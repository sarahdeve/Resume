import "./WorkCard.css";
import React from 'react';
import { Link } from "react-router-dom";

const WorkCard = (props) => {
    const openInNewTab = (url, props) => {
        window.open(url, props, '_blank', 'noreferrer')
    }

    console.log(props)
  return (
        <div className="project-card">
            <img src={props.imgsrc} alt="" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <Link className="btn">
                        <button role="link" onClick={() => openInNewTab(`${props.view}`)} className="btn">View</button>
                    </Link>
                    {/* <NavLink to="url.com" className="btn">Source</NavLink> */}
                    {/* <button role="link" onClick={() => openInNewTab('https://hospitalv1.netlify.app/')} className="btn">View</button> */}
                    <button role="link" onClick={() => openInNewTab('https://github.com/sarahdeve')} className="btn">Source</button>
                </div>
            </div>
      </div>
  );
};

export default WorkCard
