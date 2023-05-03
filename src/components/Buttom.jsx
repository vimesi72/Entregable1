import { useState } from "react";

const Buttom = ({ outIndex, phrase }) => {

    const images = ["fondo0.jpg", "fondo1.jpg", "fondo2.jpg",
    "fondo3.jpg", "fondo4.png", "fondo5.png", 
    "fondo6.png", "fondo7.png"];
    
    const [img, setImg] = useState(0)

    const changeIndex = () => {
        const newIndex = Math.floor(Math.random() * phrase);
        outIndex(newIndex);
        img < 7 ? setImg(img + 1) : setImg( 0 );
    }
    
    document.body.style = `background: lightblue url("./${images[img]}");
                           background-size: cover;
                           background-position: center;
                           background-repeat: no-repeat; `;

  return (
    <div className="boton">
      <button onClick={ changeIndex } >Probar Suerte!</button>
    </div>
  );
};

export default Buttom;

