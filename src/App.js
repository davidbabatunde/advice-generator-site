import "./App.css";
import divider from "./images/pattern-divider-mobile.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const getData = async () => {
    await axios("	https://api.adviceslip.com/advice")
      .then((response) => setData(response.data.slip))
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
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
        <img
          id="divider"
          src={divider}
          srcSet={`${divider} 300w, ${desktopDivider} 768w`}
          alt="divider"
        />
      </article>
      <div id="diceContainer" onClick={getData}>
        <img id="dice" src={dice} alt="dice" />
      </div>
    </section>
  );
}

export default App;
