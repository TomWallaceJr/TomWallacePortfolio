import React from 'react';
import './About.css';

export default function About() {
  return (
    <main className="main-container">
      <section className="about-section">
        <h2 className="section-heading">About Me</h2>
        <p className="about-p">
          I am a Web Developer born, raised, and currently living in
          Wilkes-barre/Scranton PA. I am most comfortable coding in JavaScript,
          and my current tech stack of choice is PERN (PostgreSQL, Express,
          React, Node) but I am always open to learning new languages and
          technologies.
        </p>

        <p className="about-p">
          Ten years experience in the casino industry gifted me with exceptional
          customer service, communication, and interpersonal skills. I recently
          obtained my Certificate of Completion from Thinkfuls's Remote
          Engineering Immersion Program and am now seeking a remote position
          with a strong, collaborative, and supportive team where I can gain
          some mentorship, learn new skills, and improve my current ones.{' '}
        </p>

        <p className="about-p">
          When I am not at a computer, I love spending time outdoors with my
          wife and son, watching sports, and playing poker. I am also a
          finance/economics enthusiast and have lately been fascinated by
          Bitcoin and blockchain technology.
        </p>
      </section>

      <section className="core-values-section">
        <h2 className="section-heading">My Core Values</h2>
        <article>
          <div className="value-container">
            <h3 className="core-values-subtitles">Kindness</h3>
            <p>
              I look for the good qualities in people and treat everyone I meet
              with respect. I am an empathetic active listener who seeks first
              to understand a person and then to be understood.
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Service Focused</h3>
            <p>
              Since working as a busboy at the age of 14, I have always had a
              customer-first mindset. I've developed exceptional tact over the
              years and I love helping people.
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Determination</h3>
            <p>
              I've got an all-in attitude. When I set a goal I achieve it{' '}
              <strong>PERIOD.</strong>I do this by breaking down large goals
              into smaller ones and achieve them through discipline,
              consistency, and self accountability.
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Growth</h3>
            <p>
              I thrive on complexity and difficulties and am constantly looking
              for ways to better myself. I look at failure as an opportunity to
              learn and eventually succeed. I am always 'sharpening my axe'.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
