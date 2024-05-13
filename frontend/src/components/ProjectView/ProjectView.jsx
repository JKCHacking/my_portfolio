import React from "react";
import "./ProjectView.css";

function ProjectView() {
    return(
        <div className="project-view">
            <video width="400" controls>
                <source src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4"></source>
                {/* <source src="mov_bbb.ogg" type="video/ogg"></source> */}
                Your browser does not support HTML video.
            </video>
            <div className="title">
                <h1>Title</h1>
            </div>
            <div className="description">
                <p>Description</p>
            </div>
        </div>
    );
}

export default ProjectView;