import React from "react";

const ShowPhrase = ({ phrase }) => {
  return (
    <div className="caja">
      <img src="../public/img/rectangle1.svg" alt="Fondo Frase" />
      <div className="phrase-box">
        <p>
          <span>{phrase.phrase} 💭</span>
        </p>
      </div>
      <p className="phrase-autor">
        <span>Fuente :</span> {phrase.author}
      </p>
    </div>
  );
};

export default ShowPhrase;
