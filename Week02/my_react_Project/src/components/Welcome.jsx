import React, {useEffect, useState, useContext } from "react";
import styles from "../css/WelcomeUser.module.css";
import { ThemeContext } from "./ThemeContext";
import axios from "axios";

export default function Welcome() {
  let {theme,setTheme} = useContext(ThemeContext);
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      async function fetchJoke() {
        const Joke = await axios.get(
          "https://sv443.net/jokeapi/v2/joke/Programming",
          { signal }
        );
        //const parsedjoke = joke.json();
        setJoke({
          setup: Joke.data.setup,
          delivery: Joke.data.delivery,
        });
      }
      fetchJoke();
      () => controller.abort();
    } catch (error) {
      controller.abort();
    }
  }, []);
  return (
    <section>
      <div
        className={`${styles.welcomeUser}  ${
          theme === "light" ? styles.lightwelcomeUser : styles.darkwelcomeUser
        }`}
      >
        <h1>Helllooo...!!!!</h1>
      </div>
      <div className={styles.welcomeUser}>
        <h1>{joke.setup}</h1>
        <br />
        <h1>{joke.delivery}</h1>
        <br />
      </div>
    </section>
  );
}
