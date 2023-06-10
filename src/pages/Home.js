import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to event planner </h1>
        <p> UNFORGETTABLE EXPERIENCES FROM SIMPLE IDEAS</p>
        <Link to="/menu">
          <button> Lets start </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
