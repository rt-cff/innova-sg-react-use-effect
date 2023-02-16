import { Manager } from "socket.io-client";

export const createSocket = (manager: Manager, namespace: string) => {
  return manager && manager.socket(namespace);
};
