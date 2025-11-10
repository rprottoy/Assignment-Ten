import React from "react";
import logo from "../../Assets/logo1.png";
import location from "../../Assets/location.png";
import message from "../../Assets/message.png";
import support from "../../Assets/support.png";
import facebook from "../../Assets/icons8-facebook-50.png";
import instagram from "../../Assets/icons8-instagram-50.png";
import x from "../../Assets/icons8-x-50.png";
import youtube from "../../Assets/icons8-youtube-50.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal bg-[#253241] text-black p-10 mb-0">
        <aside>
          <div>
            <Link to="/">
              <img
                className="w-[170px] h-[60px] mb-3 ml-[-26px]"
                src={logo}
                alt=""
              />
            </Link>
            <p className="text-[#A9AEB3]">
              RentWheels.
              <br />
              Providing reliable car rent service since 2025
            </p>
          </div>
          <div className="mt-5 space-y-3">
            <h6 className="font-semibold text-lg font-primary text-white">
              Contact Info
            </h6>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={location} alt="location" />
              <p className="text-[#A9AEB3] font-medium">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={message} alt="message box" />
              <p className="text-[#A9AEB3] font-medium">support@any.com</p>
            </div>
            <div className="flex items-center">
              <img className="w-4 h-4 mr-3" src={support} alt="support" />
              <p className="text-[#A9AEB3] font-medium">
                Phone:{" "}
                <span className="font-bold">( + 000 ) 000 0000 0000</span>
              </p>
            </div>
          </div>
        </aside>

        <nav>
          <h6 className="font-semibold text-lg font-primary text-white">
            Company
          </h6>
          <a className="link link-hover font-secondary text-[#A9AEB3]">
            About us
          </a>
          <a className="link link-hover font-secondary text-[#A9AEB3]">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg font-primary text-white">
            Legal
          </h6>
          <a className="link link-hover font-secondary text-[#A9AEB3]">
            Terms of use
          </a>
          <a className="link link-hover font-secondary text-[#A9AEB3]">
            Privacy policy
          </a>
          <a className="link link-hover font-secondary text-[#A9AEB3]">
            Cookie policy
          </a>
        </nav>
        {/* Newsletter Section */}
        <form>
          <h6 className="font-semibold text-lg font-primary text-white">
            Subscribe Newsletter
          </h6>
          <fieldset className="w-80 font-secondary">
            <label className="text-[#A9AEB3] ">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="example@email.com"
                className="input input-bordered join-item font-secondary"
              />
              <button className="btn border-[#7D0125] border-2 join-item font-primary bg-[#7D0125] hover:bg-[#222222] hover:border-[#222222] text-white shadow-none">
                SUBSCRIBE
              </button>
            </div>
          </fieldset>
        </form>
        {/* Social Links */}
        <div>
          <nav className="space-y-3">
            <h6 className=" font-semibold text-lg font-primary text-white">
              Social
            </h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img className="w-6" src={facebook} alt="Facebook Icon" />
              </a>
              <a>
                <img className="w-6" src={instagram} alt="Instagram Icon" />
              </a>
              <a>
                <img className="w-6" src={x} alt="X Icon" />
              </a>
              <a>
                <img className="w-6" src={youtube} alt="Youtube Icon" />
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer sm:footer-horizontal footer-center bg-[#253241] text-base-content p-4 border-t-2 border-gray-600">
        <aside>
          <p className="text-[#A9AEB3]">
            Copyright © {new Date().getFullYear()} - All right reserved by
            RentWheels
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
