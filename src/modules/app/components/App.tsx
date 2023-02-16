import React, { useEffect, useRef, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createSocketManager } from "../../socket/helpers";
import { useEffectOrdering } from "../hooks";
import "../styles/App.css";

// const manager = createSocketManager();

function App({ children }: React.PropsWithChildren) {
  const managerRef = useRef<null | ReturnType<typeof createSocketManager>>(
    null
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_v, forceUpdate] = useState<null>();

  useEffectOrdering("App");

  useEffect(() => {
    managerRef.current = createSocketManager();
    forceUpdate(null);
  }, []);

  return (
    <ChakraProvider>
      {/* <div className="App">{children}</div> */}
      <div className="App">
        {React.Children.map(children, (child) => {
          // @ts-ignore
          return React.cloneElement(child, { manager: managerRef.current });
        })}
      </div>
    </ChakraProvider>
  );
}

export default App;
