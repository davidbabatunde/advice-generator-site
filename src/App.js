import "./App.css";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const getData = async () => {
    await axios("	https://api.adviceslip.com/advice").then((response) =>
      setData(response.data.slip)
    );
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <article>
        <h1>ADVICE #{data ? data.id : null}</h1>
        <q>{data ? data.advice : <h1>loading...</h1>}</q>
        <img src={divider} alt="divider" />
      </article>
      <img id="dice" src={dice} onClick={getData} alt="dice" />
    </section>
  );
}

export default App;
