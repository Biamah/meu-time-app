import React, { FC, useState } from "react";
import "./Header.scss";

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
      <h2 className="header__logo">Logo</h2>

      <nav className="header__navigation">
        <a href="#">Home</a>
      </nav>
    </header>
  );
};
