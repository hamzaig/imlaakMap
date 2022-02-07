import React from 'react';
import logo from "../../assets/logo.png";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="company-log" />
      </div>
      <div className={classes.menu}>
        <a href="#">Projects</a>
        <a href="#">Plots/Files</a>
        <a href="#">Services</a>
        <a href="#">Discussion/Blog</a>
        <a href="#">Maps</a>
        <a href="#">About Us</a>
      </div>
      <div className={classes.auth}>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </nav>);
};

export default Navbar;
