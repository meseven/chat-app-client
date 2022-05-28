import React from "react";
import { useChat } from "../contexts/ChatContext";

function ChaList() {
  const { chat } = useChat();

  return (
    <div className="chat-list">
      {chat.map((item, i) => (
        <div
          key={i}
          className={`chat-item-container ${item.isFromMe ? "from-me" : ""}`}
        >
          <div className="chat-item">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default ChaList;
