import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCB = useRef();

  useEffect(() => {
    savedCB.current = callback;
  }, [callback]);

  useEffect(() => {
    function executeCallback() {
      savedCB.current();
    }
    if (delay !== null) {
      let intervalId = setInterval(executeCallback, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}
