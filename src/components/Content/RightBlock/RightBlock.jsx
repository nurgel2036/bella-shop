import React from "react";
import "../RightBlock/RightBlock.scss";

function RightBlock({mainBool}) {
  return (
    <div className="main-img">
      <div className="image1">
        <div className={`${mainBool} background-phon`}>
          <div className="content">
            <p>lorem ipsum</p>
            <p>Lorem ipsum dolor sit rtuuted.</p>
            <button className={`${mainBool} button-shop-now`}>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBlock;
