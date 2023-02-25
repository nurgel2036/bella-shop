import React from "react";


import '../WordImage/WordImage.scss'

export default function WordImage({icon,titleOfWord}) {

  return (
    <div className="borderImage">

      <div className="leftBorder">
        <h1>{titleOfWord}</h1>
        <p>
          Lorem ipsum dolor sit amet elit.
          <br />
          conse adipisicing
        </p>
      </div>

      <div className="rightBorder">
        {icon}
      </div>


        
    </div>
  );
}
