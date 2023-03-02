import React from "react";
import "./ColorChanger.scss";
import { IoMdSettings } from "react-icons/io";



export default function ColorChanger({setMainBool,mainBool}) {

  const ChangeClick1 = () => {
    setMainBool("red-bg red-cl");
  };

  const ChangeClick2 = () => {
    setMainBool("black-bg black-cl");
  };
  const ChangeClick3 = () => {
    setMainBool("green-bg green-cl");
  };
  const ChangeClick4 = () => {
    setMainBool("darkblue-bg darkblue-cl");
  };
  const ChangeClick5 = () => {
    setMainBool("yellow-bg yellow-cl");
  };
  const ChangeClick6 = () => {
    setMainBool("");
  };
  const colorChangerData = [
    {
      inde: `li1`,
      onClicker: ChangeClick1,
    },
    {
      inde: "li2",
      onClicker: ChangeClick2,
    },
    {
      inde: "li3",
      onClicker: ChangeClick3,
    },
    {
      inde: "li4",
      onClicker: ChangeClick4,
    },
    {
      inde: "li5",
      onClicker: ChangeClick5,
    },
    {
      inde: "li6",
      onClicker: ChangeClick6,
    },
  ];


  const [boolean, setBoolean] = React.useState(false);
  const ToggleMenuColor = () => {
    setBoolean(!boolean);
  };

  return (
    <div className="all">
      <div className={boolean ? "out-CH-fixed right-CH" : "out-CH-fixed"}>
        <button onClick={ToggleMenuColor}>
          <IoMdSettings />
        </button>

        <div className="content-CH">
          <h1>Settings</h1>
          <p>Predefined Colors</p>
          <ul>
            {colorChangerData.map((item, i) => {
              return (
                <li id={item.inde} key={i} onClick={item.onClicker}>
                  {" "}
                </li>
              );
            })}
          </ul>
          <h2 onClick={() => window.location.reload()}>RESET</h2>
        </div>
      </div>

    </div>
  );
}
