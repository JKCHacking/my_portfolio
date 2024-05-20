import React from "react";
import "./About.css";
import MessageCard from "../../components/MessageCard";
import casual from "./images/casual1.jpg"

function About() {
    var message_body = "My name is Joshnee Kim Baring Cunanan, and I am based in Manila, Philippines. I have a strong passion for sports, particularly basketball, table tennis, and chess, and I also enjoy gaming and learning in my free time. My journey into the world of programming began with writing Lua scripts for a game, which sparked my passion for programming and technology as a whole. During college, I won a competitive programming contest, further solidifying my interest in this field. Professionally, I have accumulated seven years of experience working for various companies, specializing in web, mobile, cloud and command line development, as well as hardware and CAD automations."
    return (
        <div className="about-contents">
            <MessageCard mesage_header="About me" message_body={message_body}/>
            <img className="about-pic" src={casual} alt=""/>
        </div>
    );
}

export default About;