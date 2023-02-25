import React from "react";

import "../Foursome/Foursome.scss";


import {AiFillMessage} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
export default function Foursome({srca,span1,span2}) {

    const [counter,setCounter]= React.useState(18)

    function onClickCounter(){
        if(counter < 19){
            setCounter(counter+1)
        }else if(counter >18){
            setCounter(counter-1)
        }
    }

  return (
    <div className="foursome">
      <div className="foursome-images">
        <img src={srca} alt="" />
        <span>+</span>
      </div>
      <div className="foursome-content">
        <div className="foursome-titles">
          <span className="foursome-span1">{span1}</span><span>/</span>
          <span className="foursome-span2"> {span2}</span>
        </div>
        <h5>Standard Post Comment Header Here</h5>
        <p>Fusce gravida interdum eros a mollis. Sed non <br /> lorem varius, volutpat nisl in, laoreet ante.</p>
        <data>
          <span className="foursome-icondata1">6th June 2014</span>/
          <span className="foursome-icondata2"><AiFillMessage id="foursome-icondata2-id"/>27</span>/
          <span className="foursome-icondata3" onClick={onClickCounter}><AiFillHeart id="foursome-icondata3-id"/> {counter} </span>
        </data>
      </div>
    </div>
  );
}
