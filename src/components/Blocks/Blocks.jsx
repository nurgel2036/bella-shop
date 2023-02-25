import React from "react";
import '../Blocks/Blocks.scss'

import LeftBlock from "../Content/LeftBlock/LeftBlock";
import RightBlock from "../Content/RightBlock/RightBlock";

export default function Blocks() {
  return (
    <div className="outBlocks">
      <div className="blocks">
        <LeftBlock />
        <RightBlock />
      </div>
    </div>
  );
}
