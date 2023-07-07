import { useEffect, useRef, RefObject } from "react";

type Handler = (event?: MouseEvent) => void;

const useClickOutside = (handler: Handler): RefObject<HTMLDivElement> => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler: Handler = (event) => {
      if (domNode.current && !domNode.current.contains(event?.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
};

export default useClickOutside;
