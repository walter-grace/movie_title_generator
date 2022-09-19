import Head from "next/head";
import { useState } from "react";
import Body from "./components/Body";
import styles from "./index.module.css";

export default function Home() {
  const [movieInput, setmovieInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movie: movieInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setmovieInput("");
  }

  return (
    <div>
      <Head>
        <title>Title Generator</title>
        <link rel="icon" href="/video-player.png" />
      </Head>

      <main className={styles.main}>
        <img src="/video-player.png" className={styles.icon} />
        <h3>Create a movie title</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="movie"
            placeholder="Create a movie title with a prompt"
            value={movieInput}
            onChange={(e) => setmovieInput(e.target.value)}
            />
          <input type="submit" value="Generate titles" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
