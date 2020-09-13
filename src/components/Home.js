import React from "react";
import "./Home.css";
import HomeMain from "../assets/images/homemain.png";
import Product from "./Product";
import AppleImage from "../assets/images/Apple.png";
import BlackJamun from "../assets/images/Black-Jamun.png";
import Hilsa from "../assets/images/Hilsa.jpg";
import Rohu from "../assets/images/Rohu.jpg";
import Rani from "../assets/images/Rani.jpg";
import Fortune from "../assets/images/Fortune.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeMain} alt="HomeImage" />

        <div className="home__row">
          <Product title="Apples" price={45} image={AppleImage} rating={5} />
          <Product
            title="Black Jamun"
            price={60}
            image={BlackJamun}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product title="Rohu Fish" price={190} image={Rohu} rating={4} />
          <Product title="Rani Fish" price={160} image={Rani} rating={5} />
          <Product title="Hilsa Fish" price={210} image={Hilsa} rating={5} />
        </div>

        <div className="home__row">
          <Product
            title="Fortune Refined Sinflower oil - 1 litre"
            price={122}
            image={Fortune}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
