import React, { FC, useState } from "react";
import "./Header.scss";
import githubLogo from '../../assets/github.svg';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header">
      <a href="https://github.com/Biamah" className="header__logo">
        <img src={githubLogo} alt="Github Logo" />
      </a>

      <nav className="header__navigation">
        <a href="#">Home</a>
      </nav>
    </header>
  );
};
