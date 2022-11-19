import React from "react";
import Apple from '../Asset/Group 68@2x.png'
import Google from '../Asset/Group 69.png'
import '../Style/Header.css'

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="container3">
          <section>
            <div>
              <p className="container2">
                Buy, sell and manage your  Crypto on TradExpress.
              </p>
              <p className="container1">
                Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP
                with NGN.
              </p>

              <button className="start-button">Get Started</button>
              <div className="google-con">
                <img src={Apple} alt="Apple" />
                <img src={Google} alt="google" />
              </div>
            </div>

            <div className="Background-container"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
