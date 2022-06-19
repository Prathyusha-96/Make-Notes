import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-header">Made with <i className="fas fa-heart"></i> by Prathyusha</div>
      <ul className="mt-3 disp-inline-flex ul-no-decor footer-social">
        <a href="#" target="_blank">
          <i className="fab fa-github "></i>
        </a>
        <a href="#" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </ul>
      <div className="mt-3 copy-right">© All Rights Reserved 2022 Make-Notes</div>
    </footer>
  );
};

export { Footer };
