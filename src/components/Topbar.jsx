import React from "react";
import "./topbar.css";
import image from "../assets/mardan.jpeg";
export default function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icons fa-brands fa-square-facebook"></i>
        <i className="top-icons fa-brands fa-square-twitter"></i>
        <i className="top-icons fa-brands fa-square-pinterest"></i>
        <i className="top-icons fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">Home</li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Contact</li>
          <li className="top-list-item">Write</li>
          <li className="top-list-item">Logout</li>
        </ul>
      </div>
      <div className="top-right">
        <img className="top-imag" src={image} alt="" />
        <i class="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
