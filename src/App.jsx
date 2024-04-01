import "./App.css";
import arrayPhrases from "./utils/phrases.json";
import getRandom from "./services/getRandom";
import { useState } from "react";
import ShowPhrase from "./components/ShowPhrase";
import ButtonPhrase from "./components/ButtonPhrase";
import arrayImages from "./utils/images.json";

function App() {
  const [phrase, setPhrase] = useState(getRandom(arrayPhrases));
  const [image, setImage] = useState(getRandom(arrayImages));
  const objStyles = {
    backgroundImage: `url(../public/img/fondo${image}.jpg)`,
  };

  return (
    <div className="app" style={objStyles}>
      <h1 className="app__title">Galletas de la fortuna</h1>
      <ShowPhrase phrase={phrase} />
      <ButtonPhrase setPhrase={setPhrase} setImage={setImage} />
    </div>
  );
}

export default App;
