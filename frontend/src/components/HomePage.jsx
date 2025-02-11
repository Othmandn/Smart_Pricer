/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.scss";
import Lottie from "react-lottie-player";
import animationData from "../assets/25889-phone-flow-3d.json";

function HomePage({ openModalToggle }) {
  return (
    <div className="home-page-container">
      <h1>Commencer l'estimation du prix des téléphones</h1>
      <div className="buttons-container">
        <button type="button" onClick={openModalToggle}>
          Commencer l'estimation
        </button>
        <button type="button">
          <Link to="/upload"> Ajouter des références </Link>
        </button>
      </div>
      <div className="lottie-container">
        <Lottie
          animationData={animationData}
          play
          loop
          style={{ width: 500, height: 500 }}
        />
      </div>
    </div>
  );
}

export default HomePage;
