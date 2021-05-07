import React from 'react';
import './Project.css';

export default class Piece extends React.Component {
  render() {
    // deconstruct properties for Project
    const {
      title,
      imgPath,
      description,
      livelink,
      repolink,
    } = this.props.details;

    return (
      <article className="project-container">
        <a href={livelink} rel="noreferrer" target="_blank">
          <h1 className="project-title">{title}</h1>
        </a>
        <div className="project-deets-div">
          <img src={imgPath} alt={title} className="project-image" />
          <p className="project-description">{description}</p>
        </div>
      </article>
    );
  }
}
