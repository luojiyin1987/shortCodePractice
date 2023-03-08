import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList } from "@liveblocks/client";

import {
  RoomProvider,
  useOthers,
  useStorage,
  useUpdateMyPresence,
  useMutation,
} from "../../liveblocks.config";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <RoomProvider id={"nextjs-todo-list"} initialPresence={{isTyping:false}} initialStorage={{todos: new LiveList()}}>
        <ClientSideSuspense fallback={<div>Loading....</div>}>
          {() => <TodoList />}
        </ClientSideSuspense>
      </RoomProvider>
    </>
  );
}

function TodoList() {
  const [draft, setDraft] = useState("");
  const updateMyPresence = useUpdateMyPresence();
  const todos = useStorage((root) => root.todos);

  const addTodo = useMutation(({ storage }, text) => {
    storage.get("todos").push({ text })
  }, []);

  const deleteTodo = useMutation(({ storage }, index) => {
    storage.get("todos").delete(index);
  }, []);

  return (
    <div className="container">
      <WhoIsHere />
      <input
        type="text"
        placeholder="what needs to be done?"
        value={draft}
        onChange={(e) => {
          setDraft(e.target.value);
          updateMyPresence({ isTyping: true });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateMyPresence({ isTyping: false });
            addTodo(draft)
            setDraft("");
          }
        }}
        onBlur={(e) => updateMyPresence({ isTyping: false })}
      />
      <SomeoneTyping />
      {todos.map((todo, index) => {
        return (
          <div key={index} className="todo_container">
            <div className="todo">{todo.text}</div>
            <button
              className="delete_button"
              onClick={() => deleteTodo(index)}
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
}

function WhoIsHere() {
  const userCount = useOthers((others) => others.length);

  return (
    <div className="who_is_here">There are {userCount} other users online</div>
  );
}

function SomeoneTyping() {
  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );

  return (
    <div className="someone_it_typing">
      {someoneIsTyping ? "Someone is typing..." : ""}
    </div>
  );
}
