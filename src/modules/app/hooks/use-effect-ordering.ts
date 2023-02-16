import { useEffect } from "react";

export const useEffectOrdering = (componentName: string) => {
  useEffect(() => {
    console.log(`using effect at ${componentName}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
