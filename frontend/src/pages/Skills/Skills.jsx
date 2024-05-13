import React from "react";
import "./Skills.css";
import SkillCategory from "../../components/SkillCategory/SkillCategory";

function Skills() {
    const title_str = "Web Development";
    const skillsList = [
        {
            id: 0,
            title: 'Python',
            percent: 9.5,
            selected: false,
            key: 'location'
        },
        {
            id: 1,
            title: 'Javascript',
            percent: 7,
            selected: false,
            key: 'location'
        }
    ];


    return (
        <div className="skills-content">
            <SkillCategory title={title_str} skillList={skillsList}/>
        </div>
    );
}

export default Skills;