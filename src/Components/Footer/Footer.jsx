import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="bottomLinks">
          <div className="logo">
            <img src="../../public/Images/logo.svg" alt="logo" />
          </div>
          <div className="lists resources">
            <h3>Resources</h3>
            <NavLink to="Home/">Home</NavLink>
            <NavLink to="About/">About</NavLink>
          </div>
          <div className="lists follow">
            <h3>Follow Us</h3>
            <a href="https://github.com/avneets2103" target="_blank">Github</a>
            <a href="https://discord.gg/AzyXz7x9" target="_blank">Discord</a>
          </div>
          <div className="lists legal">
            <h3>Legal</h3>
            <NavLink to="Privacy/">Privacy</NavLink>
            <NavLink to="Terms_and_conditions/">T & C</NavLink>
          </div>
        </div>
        <div className="copyright">
          <div className="name">&copy; Avneet Singh</div>
          <div className="socials">
            <a href="https://github.com/avneets2103" target="_blank">
                <img src="../../../public/Images/github.svg" alt="" />
            </a>
            <a href="https://kaggle.com/avneets2103/" target="_blank">
              <img src="../../../public/Images/kaggle.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/avneets2103/" target="_blank">
              <img src="../../../public/Images/linkedin.svg" alt="" />
            </a>
            <a href="mailto:avneets2103@gmail.com" target="_blank">
              <img src="../../../public/Images/envelope-solid.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
