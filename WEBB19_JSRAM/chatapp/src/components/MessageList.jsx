import React, { useRef } from "react";

const MessageList = () => {
  const messageInputRef = useRef();

  function handleSendMessage() {
    const message = messageInputRef.current.value;
    //payloaded kommer vi skicka in till backenden
    const payload = {
      message: message,
      name: "Andreas",
    };
    fetch(messageURL, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => fetchChatRoomData());
  }

  return (
    <div className="container">
      <div className="row">
        <div className="form-group">
          <label>Enter your message</label>
          <input
            ref={messageInputRef}
            className="form-control"
            placeholder="helloo.."
          />
        </div>
        <button onClick={handleSendMessage} className="btn btn-primary">
          Send message
        </button>
      </div>
    </div>
  );
};

export default MessageList;
