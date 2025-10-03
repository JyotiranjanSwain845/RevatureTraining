import React from 'react'
import styles from '../css/WelcomeUser.module.css'
import { useEffect,useState } from 'react';



export default function Welcome() {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal
    try {
      async function fetchJoke() {
        const raw_jokes = await fetch(
          "https://sv443.net/jokeapi/v2/joke/Programming"
        ,{signal});
        const parseJoke = await raw_jokes.json();
        setJoke({
          setup: parseJoke.setup,
          delivery: parseJoke.delivery,
        });
        await console.log(joke);
      }
      fetchJoke();
      ()=>controller.abort();
    } catch (error) {
      controller.abort();
    }
  },[]);
  return (
    <section>
      <div className={styles.welcomeUser}>
        <h1>Helllooo...!!!!</h1>
      </div>
      <div>
        <p>
          question:<q>{joke.setup}</q>
        </p>
        <br />
        <p>
          ans:<q>{joke.delivery}</q>
        </p>
        <br />
      </div>
    </section>
  );
}
