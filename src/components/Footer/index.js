import React from "react";
import "./style.css";

const Footer = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".footer").style.bottom = "0";
    } else {
      document.querySelector(".footer").style.bottom = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <footer className="footer">
      <span>&copy; Taani Maama 2021</span>
    </footer>
  );
};

export default Footer;
