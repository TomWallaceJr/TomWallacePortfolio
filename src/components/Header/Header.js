import React from 'react';
import selfieheadset from '../../images/selfieheadset.jpg';
import './Header.css';

export default function Header() {
  return (
    <header className="intro-container">
      <h1 className="intro-title">Thomas Wallace Jr</h1>
      <p className="intro-subtitle">Full Stack Web Developer</p>
      <img src={selfieheadset} alt="selfie" className="intro-img" />
    </header>
  );
}
