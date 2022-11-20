import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="main-cont">
        <div className="text">
          <p className="text-cont1">Product</p>
          <div className="footer-p">
            <p>Bitcoin</p>
            <p>All</p>
            <p>Flat</p>
            <p>Refil</p>
            <p>P2P</p>
          </div>
        </div>
        <div>
          <p className="text-cont1">Learn</p>
          <div className="footer-p">
            <p>Blog</p>
            <p>Hellp center</p>
          </div>
        </div>
        <div>
          <p className="text-cont1">Contact</p>
          <div className="footer-p">
            <p>hello@tradeexpress.com</p>
            <p>support@tradeexpress.com</p>
            <section className="icon-tab">
              <ul>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <BsTelegram />
                </li>
                <li>
                  <BsWhatsapp />
                </li>
                <li>
                  <BsFacebook />
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div>
          <p className="text-cont1">Company</p>{" "}
          <div  className="footer-p">
            <p>About us</p>
            <p>Career</p>
            <p>Rate</p>
            <p>Mobile</p>
          </div>
        </div>
        <div>
          <p className="text-cont1">Legal</p>{" "}
          <div  className="footer-p">
            <p>Privacy policy</p>
            <p>Anti-Money Laundering</p>
            <p>Terms and Condition</p>
          </div>
        </div>
      </div>
      <div>
        <p className="copyright">
          <BiCopyright/> 2021 Tradeexpress Technologies. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
