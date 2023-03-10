import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./modules/app/components/App";
import { ChatRoomContainer } from "./modules/chat-room/components/chat-room-container";
import { createSocketManager } from "./modules/socket/helpers";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const manager = createSocketManager();

root.render(
  <React.StrictMode>
    <App>
      <ChatRoomContainer manager={manager} />
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
