import React from "react";
import '../Words/Words.scss'

export default function Words() {
  return (
    <div className="outWords">
      <div className="words">
        <p>FEATURED</p> -
        <p>
          <span>NEWEST</span>
        </p>{" "}
        -<p>TOP SELLERS</p>
      </div>
    </div>
  );
}
