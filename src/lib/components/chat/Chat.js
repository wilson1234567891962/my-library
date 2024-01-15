import React from "react";
import "./Chat.css";

const Chat = ({ logo }) => (
    <div className="container-chat-bot">
        <div>
         <span>Hello! Welcome, Let me help you find  your DreamJob</span>
        </div>
        <div className="container-chat-bot-icon">
            <img src={logo} alt="Logo" />
        </div>

    </div>
);

export default Chat;
