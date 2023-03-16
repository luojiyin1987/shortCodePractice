import { useState } from "react";
import styles from '../styles/Home.module.css'

export default function Question( {question} :{id:number, title:string, info: string}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{question.title}</h4>
        <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}
