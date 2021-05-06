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
              In a world where social media is giving us a convenience no
              generation before us ever had, many use it to spew hatred and be
              downright vicious to one another. I am undersanding, empathetic,
              and kind to everyone.
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Service</h3>
            <p>
              I've been in the service industry since I was 14 years old working
              at a local restaraunt as a busboy, and I also love helping people.
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Determination</h3>
            <p>
              I've got an all-in attitude. When I make a decision and set my
              mind to do something I do it. <strong>PERIOD.</strong>
            </p>
          </div>
          <div className="value-container">
            <h3 className="core-values-subtitles">Growth</h3>
            <p>
              I love learning new skills and technologies and am constantly
              trying to better myself. I am always looking to learn something
              new or hone my current abilities. I am always sharpening my axe.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
