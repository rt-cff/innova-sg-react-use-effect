import { ChakraProvider } from "@chakra-ui/react";
import "../styles/App.css";

function App({ children }: React.PropsWithChildren) {
  return (
    <ChakraProvider>
      <div className="App">{children}</div>
    </ChakraProvider>
  );
}

export default App;
