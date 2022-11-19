import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import HEader1 from "./HEader1";
import Header2 from "./Header2";
import Main from "./Main";
import Main1 from "./Main1";
import Article from "./Article";
import Footer from "./Footer";
import Db from "./Db";

const Home = () => {
  return (
    <div>
      <div className="bgrc-sec">
      <div className="Header-section">
       <NavBar/>
        <Header />
      </div>
      </div>
      <div  className="backgroundsec">
      <Db/>
      </div>
<div className="container">
      <HEader1  />
      </div>
      <Header2 />
      <Main />
      <Article/>
      <Main1 />
      <Footer />
    </div>
  );
};

export default Home;
