import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import react from "react";

export default function SocialLinks() {
  return (
    <div className="socials">
      <button>Contact Me</button>
      <div className="contactLinks">
        <a href="" className="linkWrap">
          <AiFillDribbbleCircle />
        </a>
        <a href="" className="linkWrap">
          <BsInstagram />
        </a>
        <a href="" className="linkWrap">
          <AiFillTwitterCircle />
        </a>
        <a href="" className="linkWrap">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}
