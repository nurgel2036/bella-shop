import React from "react";
import '../Blocks/Blocks.scss'

import LeftBlock from "../Content/LeftBlock/LeftBlock";
import RightBlock from "../Content/RightBlock/RightBlock";

export default function Blocks({mainBool}) {
  return (
    <div className="outBlocks">
      <div className="blocks">
        <LeftBlock mainBool={mainBool} />
        <RightBlock mainBool={mainBool} />
      </div>
    </div>
  );
}
