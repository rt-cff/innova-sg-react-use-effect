import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

export const ChatRoomContainer = () => {
  return (
    <Box w="80%" p={4} m="0 auto">
      <Tabs variant="soft-rounded" colorScheme="green">
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
