import React from "react";

import { BsHeartFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import '../MiddleHeader/MiddleHeader.scss'

function MiddleHeader() {

  const [count, setCount] = React.useState(0)
  return (
    <header>
      <div className="main">
        <div className="right">
          <span>
            <BsHeartFill />{" "}
          </span>

          <div className="cart">
            <BsCartFill /> {count} item(s) - $0.00
          </div>
        </div>
      </div>
    </header>
  );
}

export default MiddleHeader;
