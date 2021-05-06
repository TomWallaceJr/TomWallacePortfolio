import React from 'react';
import selfie from '../../images/selfie.jpg';
import './Header.css';

export default function Header() {
  return (
    <header className="intro-container">
      <h1 className="intro-title">
        <strong>Thomas Wallace Jr</strong>
      </h1>
      <p className="intro-subtitle">
        <strong>Full Stack Web Developer</strong>
      </p>
      <img src={selfie} alt="selfie" className="intro-img" />
    </header>
  );
}
