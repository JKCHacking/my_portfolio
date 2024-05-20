import React from "react";
import "./Home.css";
import MessageCard from "../../components/MessageCard";
import combined from "./images/pictures_combined3.png"

function Home() {
    return (
        <div className="home-contents">
            <MessageCard mesage_header="Hello, Im Josh" message_body="I am software programmer"/>
            <img className="hexagon-img" src={combined} alt=""/>
        </div>
    );
}

export default Home;