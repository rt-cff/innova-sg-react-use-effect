import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { Manager } from "socket.io-client";
import { useEffectOrdering } from "../../app/hooks/";
import { createSocket } from "../../socket/helpers";

// const manager = new Manager("http://localhost:3001", {
//   autoConnect: false,
// });

interface ChatRoomContainerProps {
  manager: Manager;
}

export const ChatRoomContainer = ({ manager }: ChatRoomContainerProps) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [activeChatRoom, setActiveChatRoom] = useState<number | null>(null);

  useEffectOrdering("ChatRoomContainer");

  useEffect(() => {
    if (!manager) {
      console.log("socket manager not init");
      return;
    }
    const socket = createSocket(manager, "/admin");

    socket.on("connect", (...p) => {
      console.log("ADMIN CONNECTED", p);
      // setIsConnected(true);
    });

    socket.on("disconnect", () => {
      // setIsConnected(false);
    });

    socket.on("pong", () => {
      // setLastPong(new Date().toISOString());
    });

    socket.connect();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, [manager]);

  useEffect(() => {
    if (!manager) {
      console.log("socket manager not init");
      return;
    }
    const socket = createSocket(manager, "/user");

    if (!socket) return;

    socket.on("connect", (...p) => {
      console.log("USER CONNECTED", p);
      // setIsConnected(true);
    });

    socket.on("disconnect", () => {
      // setIsConnected(false);
    });

    socket.on("pong", () => {
      // setLastPong(new Date().toISOString());
    });

    socket.connect();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, [manager]);

  return (
    <Box w="80%" p={4} m="0 auto">
      <Tabs variant="soft-rounded" colorScheme="green" isLazy>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
