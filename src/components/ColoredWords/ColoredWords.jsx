import React from "react";


import "../ColoredWords/ColoredWords.scss";

export default function ColoredWords({mainBool}) {
  return (
    <div className="outColoredWords">
      <div className={ `${mainBool} coloredWords`}>
        <div className="coloredWords-border">
          <h1 >FREE SHIPING ON ALL ORDERS OVER 45%</h1>
        </div>
      </div>
    </div>
  );
}
