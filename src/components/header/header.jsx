import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
      <nav>
        <div className={styles.nav_box}>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/welcome"}>Welcome</Link>
            <Link to={"/ageCalculator"}>Age Calculator</Link>
        </div>
        <div className={styles.nav_box}>
            <Link to="/login">Login</Link>
        </div>
        

      </nav>
      </div>
    </header>
  );
};

export default Header
