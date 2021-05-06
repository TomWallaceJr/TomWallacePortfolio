import React from 'react';
import portfolio from '../../helpers/portfolio';
import Project from '../Project/Project';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <h1 className="portfolio-title">My Portfolio</h1>
      <section className="portfolio-container"></section>
      {Object.keys(portfolio).map((key) => {
        return <Project key={key} index={key} details={portfolio[key]} />;
      })}
    </>
  );
}
