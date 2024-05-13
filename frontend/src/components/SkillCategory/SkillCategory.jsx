import React, { useState } from "react";
import "./SkillCategory.css";
import Skill from "../Skill/Skill";

function SkillCategory({ title, skillList }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    const expandedClass = isOpen ? 'expanded' : '';

    return (
        <div className="skill-category">
            <button type="button" className={`dd-header ${expandedClass}`} onClick={toggleList}>
                <div className="dd-header-title">{title}</div>
                <div className="dd-expansion-indicator">
                    {isOpen ? <p>-</p> : <p>+</p>}
                </div>
            </button>
            {isOpen && (
                <div role="list" className="dd-list">
                    {skillList.map((item) => (
                        <Skill skillName={item.title} percent={item.percent}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SkillCategory;