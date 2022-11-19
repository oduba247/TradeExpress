import React from "react";
import Mobileimg from "../Asset/mobile-payments/rafiki.png";
import Financial from "../Asset/freelancer/cuate.png";
import Investment from "../Asset/investment-data/amico.png"
import { useState } from "react";
import '../Style/Header1.css'

const Home = () => {
  const [less, setLess] = useState(false);
  return (
    <div>
      <section>
        <p className="involve-cont">
          Why do people get involved with Cryptocurrencies?
        </p>
      </section>

      {less && <Moreinfo />}
      <section className="btnseeless">
        <button onClick={() => setLess(!less)} className="see-less-btn">
          {less ? "See Less" : "See More"}
        </button>
      </section>
      
    </div>
  );
};
function Moreinfo() {
  return (
    <div>
      <div className="see-less">
        <div className="payment-cont">
          <img src={Mobileimg} alt="" className="image-cont" />
          <p className="text-cont">Easy Mode of Payment</p>
          <small>
            People can now easily send and receive money from anywhere in the
            world to purchase goods and pay for services.
          </small>
        </div>
        <div className="payment-cont">
          <img src={Financial} alt="" className="image-cont" />
          <p className="text-cont">Financial Freedom</p>
          <small>
            Just like the internet no single entity controls the Crypto network
            which provides users transparency and privacy, which puts you in
            absolute control of your money.
          </small>
        </div>
        <div className="payment-cont">
          <img src={Investment} alt="" className="image-cont" />
          <p className="text-cont">Investment</p>
          <small>
            The constant demand as made Cryptocurrecies a Digital Gold used for
            alternative store of wealth on long term investments.
          </small>
        </div>
      </div>
      <div>
        {/* <p>Buy and Sell your Cryptocurrency in 3 simple steps</p> */}
      </div>
    </div>
  );
}

export default Home;
