import React from 'react';

import {MdArrowUpward} from 'react-icons/md'
import '../toUpward/toUpward.scss'

export default function GoToTop({mainBool})  {
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  };

  return (
    <div style={{ display: showButton ? "block" : "none" }}  className='button-dad'>
      <button onClick={handleClick} className={`${mainBool} coloredWords button-son`}><MdArrowUpward/></button>
    </div>
  );
};

