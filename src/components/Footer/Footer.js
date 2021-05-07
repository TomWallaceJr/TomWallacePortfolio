import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <p className="footer-p">@WallaceCodes 2021</p>
      <div className="icons-div">
        <SocialIcon
          url="https://twitter.com/TomWallaceJr2"
          target="_blank"
          bgColor="lightblue"
          className="icon"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/thomaswallacejr/"
          target="_blank"
          bgColor="lightblue"
          className="icon"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://github.com/TomWallaceJr"
          target="_blank"
          bgColor="lightblue"
          className="icon"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </footer>
  );
}
