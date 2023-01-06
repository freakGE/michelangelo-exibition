import { useState, useEffect } from "react";

let currentScroll = 0;

const useCurrentScroll = () => {
  const [scroll, setScroll] = useState(currentScroll);

  useEffect(() => {
    const handleScroll = () => setScroll(scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useCurrentScroll;
