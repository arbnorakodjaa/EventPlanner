import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />  <FacebookIcon /> 
      </div>
      <p> &copy; 2023 EventPlanner-ArbnoraKodja</p>
    </div>
  );
}

export default Footer;
