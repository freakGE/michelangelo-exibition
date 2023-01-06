import { useState, useEffect } from "react";

type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

function getWindowDimensions(): WindowDimensions {
  const width = typeof window !== "undefined" ? window.innerWidth : undefined;
  const height = typeof window !== "undefined" ? window.innerHeight : undefined;
  return { width, height };
}

export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowDimensions;
}
