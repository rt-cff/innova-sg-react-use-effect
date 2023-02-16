import { Manager } from "socket.io-client";

export const createSocketManager = () =>
  new Manager("http://localhost:3001", {
    autoConnect: false,
  });
