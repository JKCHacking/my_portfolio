import React from "react";
import "./Skill.css";

function Skill({ skillName, percent }) {
    const num_divs = 10;
    const ok = percent;
    const not_ok = num_divs - percent;
    const ok_whole = Math.floor(ok);
    const ok_dec = ok - ok_whole;
    const not_ok_whole = Math.floor(not_ok);

    let has_half = false;
    if (ok_dec === 0.5) {
        has_half = true;
    }

    const createDivs = (num_divs, class_name) => {
        const rows = [];
        for (let i = 0; i < num_divs; i++) {
            rows.push(<div key={i} className={`${class_name}`}></div>);
        }
        return rows
    }

    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div class="container">
                {createDivs(ok_whole, "box ok")}
                {has_half && (createDivs(1, "box half"))}
                {createDivs(not_ok_whole, "box not-ok")}
            </div>
        </div>
    );
}

export default Skill;