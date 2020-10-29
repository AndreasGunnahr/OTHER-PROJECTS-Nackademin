import React, { useState, useEffect } from "react";
import MessageList from "./components/MessageList";

// import MessageForm from "./components/MessageForm";

const chatRoomURL =
  "https://mock-data-api.firebaseio.com/chatrooms/MF_cHwY2pj8e8zwu8eO.json";
const messageURL =
  "https://mock-data-api.firebaseio.com/chatrooms/MF_cHwY2pj8e8zwu8eO/messages.json";

function App() {
  const [chatRoomData, setChatRoomData] = useState(null);

  function fetchChatRoomData() {
    fetch(chatRoomURL)
      .then((res) => res.json())
      .then((data) => {
        setChatRoomData(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchChatRoomData();
  }, []);

  return (
    <div className="container bg-dark">
      {/* <MessageForm /> */}
      <MessageList />
    </div>
  );
}

export default App;
