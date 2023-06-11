import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Miresevini ne eventPlanner </h1>
        <p>MOMOENTE TE PA HARRUARA NGA IDE TE VOGLA</p>
        <Link to="/about">
          <button> FILLO </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
