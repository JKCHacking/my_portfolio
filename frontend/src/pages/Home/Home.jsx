import React from "react";
import "./Home.css";
import MessageCard from "../../components/MessageCard";
import ProfilePicture from "../../components/ProfilePicture";

function Home() {
    return (
        <div className="home-contents">
            <MessageCard/>
            <ProfilePicture/>
        </div>
    );
}

export default Home;