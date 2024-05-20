import React from "react";
import "./Projects.css";

import ProjectView from "../../components/ProjectView/ProjectView";

function Projects() {
    var project_link1 = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
    var project_title1 = "Sample Title"
    var project_desc = "Sample desc"
    return (
        <div className="projects-contents">
            <ProjectView link={project_link1} title={project_title1} description={project_desc}/>
        </div>
    );
}

export default Projects;