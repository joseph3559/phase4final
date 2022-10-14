import React from "react";
import header from "../assets/header.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon in Phase-5</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the release of our new MoringaNFT. Sign up below to
            recieve updates when we go live.
          </p>
          <div className="actionbtn">
          <button>Suscribe</button>
          <button>Book A Demo</button>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={header} alt="header" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
