import React from "react";
import "./MessageCard.css";

function MessageCard({mesage_header, message_body}) {
    return (
        <div className="message-card">
            <h1>{mesage_header}</h1>
            <h3>{message_body}</h3>
        </div>
    );
}

export default MessageCard;