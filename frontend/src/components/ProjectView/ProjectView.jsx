import React from "react";
import "./ProjectView.css";

function ProjectView({ link, title, description }) {
    return(
        <div className="project-view">
            <video width="400" controls>
                <source src={link} type="video/mp4"></source>
                {/* <source src="mov_bbb.ogg" type="video/ogg"></source> */}
                Your browser does not support HTML video.
            </video>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectView;