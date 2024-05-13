import React from "react";
import "./ProfilePicture.css";
import combined from "./images/pictures_combined3.png"

function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img className="combined-img" src={combined} alt="combined"/>
        </div>
    );
}

export default ProfilePicture;