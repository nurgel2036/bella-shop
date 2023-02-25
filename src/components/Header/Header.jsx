import React, { useRef } from "react";

import MiddleHeader from "./MiddleHeader/MiddleHeader";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.scss";

import { BiSearchAlt2 } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/sale",
    display: "Sale",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [count, setCount] = React.useState(0);

  const [isScrolled,setScrolled] = React.useState(false)

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  React.useEffect(()=>{
    function WindowScroll(){
      const windowPosition = window.scrollY;

      if(windowPosition > 100){
        setScrolled(true)
      } else{
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', WindowScroll);
    return ()=> window.removeEventListener('scroll', WindowScroll)
  },[])   

  return (
    <header className="header">
      <div className={isScrolled ? "header__top" : "header__top"}>
        <div className="header__top__left">
          <Link to={'/contact'}> <span>Need Help?</span></Link>
          <span className="header__top__help">
            <i class="ri-phone-fill"></i>+996 554 45 80 10
          </span>
        </div>

        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
          <Link to="#" className=" d-flex align-items-center gap-1">
            <i class="ri-login-circle-line"></i> Login
          </Link>

          <Link to="#" className=" d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> Register
          </Link>
        </div>
      </div>

      <div className={isScrolled ? "header__middle fixed" : "header__middle"}>
        <div className="header__middle__main">
          <div className="input__search__header__middle">
            <input
              type="text"
              id="header__middle__input"
              placeholder="What are you looking?"
            />
            <Link to="/about">
              <BiSearchAlt2 id="header__search" />
            </Link>
          </div>

          <h1>
            <Link to="/home" className=" d-flex align-items-center gap-2">
              BELLA SHOP
            </Link>
          </h1>

        <MiddleHeader/>

        </div>
      </div>

      <div className={isScrolled ? "main__main__navbar fixed_nav" : "main__main__navbar"}>
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-center">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                   {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </div>
      </div>
    </header>
  );
};

export default Header;
