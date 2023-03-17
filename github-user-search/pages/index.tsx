import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const API_URL = "https://api.github.com";

async function fetchResults(query: string) {
  try {
    const res = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await res.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

function Form({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit"> Search</button>
    </form>
  );
}

function User({ avatar, url, username }) {
  return (
    <div>
      <img src={avatar} alt="Profile" width={50} height={50} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {" "}
        {username}
      </a>
    </div>
  );
}

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onSearchChange(event) {
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event) {
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results);
  }

  return (
    <div className={styles.container}>
      <main>
        <h2> Github user Search </h2>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />

        <h3> Results</h3>
        <div id="results">
          <div>
            {results.map((user) => {
              return (
                <User
                  key={user.login}
                  avatar={user.avatar_url}
                  url={user.html_url}
                  username={user.login}
                />
              );
            })}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
