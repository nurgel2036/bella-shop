import React from "react";
import "./HelpField.scss";
import HelpSuccess from "./HelpSuccess/HelpSuccess";


export default function HelpFieldModal  ({setHelpField}) {
    const [boolSuccess, setBoolSuccess] = React.useState(false)
    

  return (
    <div className="out-HFModal">
      <div className="ultra-HFModal">
        <div className="main-HFModal">
          <div className="toggle-helpField" onClick={()=>setHelpField(false)}>
            <div className="toggle-HF-stick"></div>
            <div className="toggle-HF-stick"></div>
          </div>
          <form className="content-helpField" >
            <input type="text"  name="name" placeholder="Ваше Имя" required />
            <input type="text"  name="num" placeholder="Ваш номер телефона" required />
            <input type="email"  name="email" placeholder="ваша почта" required />
            <button onClick={()=>setBoolSuccess(true)} >Отправить</button>

            {boolSuccess && <HelpSuccess/>}
            <p>
              Нажимая кнопки «Отправить» Вы соглашаетесь на обработку
              предоставленных вами персональных данных.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};


