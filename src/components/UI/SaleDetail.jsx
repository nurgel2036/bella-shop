import React from "react";
import sb1 from "../shortBreak/productimg/product1.jpg";
import sb2 from "../shortBreak/productimg/product2.jpg";
import sb3 from "../shortBreak/productimg/product3.jpg";
import sb4 from "../shortBreak/productimg/product4.jpg";

import "../../styles/sale-detail.scss";

export default function SaleDetail() {
  const Saledetail = [
    {
      id: 1,
      brand: "bella",
      title: "white_beign",
      price: "1200$",
      made_in: "U.S.A",
      quolity: "amazing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis recusandae porro cupiditate sint.",
      img: sb1,
    },
    {
      id: 2,
      brand: "One_Piece",
      title: "black_brown",
      price: "4400$",
      made_in: "Japan",
      quolity: "best",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis recusandae porro cupiditate sint.",
      img: sb2,
    },
    {
      id: 3,
      brand: "Hard_Brown",
      title: "beign",
      price: "800$",
      made_in: "Korea",
      quolity: "amazing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis recusandae porro cupiditate sint.",
      img: sb3,
    },
    {
      id: 4,
      brand: "American_baby",
      title: "white_beign",
      price: "3000$",
      made_in: "U.S.A",
      quolity: "priceless",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis recusandae porro cupiditate sint this.",
      img: sb4,
    },
  ];
  const [step, setStep] = React.useState(0);
  const detail = Saledetail[step];

  const onClickNext = () =>{
    if(step < Saledetail.length -1 ){
      setStep(step + 1)
    } 

  }
  const onClickPrev = () =>{
    if(step > 0){
      setStep(step - 1)
    }
  }

  return (
    <div className="out-sale-detail">
      <div className="sale-detail-main">
        <img src={detail.img} alt="" id="sale-content-img1" />
        <div className="sale-detail-content">
          <h1 className="uc">
            Title of the Jacket : <span> {detail.brand}</span>
          </h1>
          <h3 className="uc">
            Color : <span>{detail.title}</span>
          </h3>
          <div className="price-made_in">
            <h4 className="uc">
              Price : <span>{detail.price}</span>
            </h4>
            <h4 className="uc">
              Made in : <span>{detail.made_in}</span>
            </h4>
            <h4 className="uc">
              The Quality of The Jackets : <span>{detail.quolity}</span>
            </h4>
          </div>
          <h5>{detail.description} 
              <blockquote className="uc">
                <span> They are so good that after purchasing you won't regret</span>
              </blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing el
              it. Eius dolores impedit sapiente quidem esse tempore neque
              exercitationem omnis labore iusto ea eum magnam sit maiores voluptate
              m facilis, nemo a dolore?
            </h5>
          <div className="buttons">
            <button className="prev" onClick={onClickPrev}>prev</button>
            <button className="next" onClick={onClickNext}>next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
