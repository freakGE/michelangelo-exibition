import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCursor } from "../features/cursorSlice";
import useWindowDimensions from "./WindowDimensions";

type MousePosition = {
  x: number;
  y: number;
};

type VariantsOptions = {
  backgroundColor: string;
  height: number;
  width: number;
  x: number;
  y: number;
};

type VariantsType = {
  default: VariantsOptions;
  text: VariantsOptions;
  textWhite: VariantsOptions;
  textLarge: VariantsOptions;
  image: VariantsOptions;
  imageWhite: VariantsOptions;
};

const Cursor = (): JSX.Element => {
  const { height, width } = useWindowDimensions();
  const variant = useSelector(getCursor);
  const [cursorVisibility, setCursorVisibility] = useState<
    "hidden" | "visible"
  >("hidden");

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [cursorSize, setCursorSize] = useState(32);

  const variants: VariantsType = {
    default: {
      backgroundColor: "rgb(158 141 116)",
      height: cursorSize,
      width: cursorSize,
      x: mousePosition.x - cursorSize / 2,
      y: mousePosition.y - cursorSize / 2,
    },
    textWhite: {
      backgroundColor: "rgb(237 225 225)",
      height: cursorSize * 1.5,
      width: cursorSize * 1.5,
      x: mousePosition.x - (cursorSize * 1.5) / 2,
      y: mousePosition.y - (cursorSize * 1.5) / 2,
    },
    text: {
      backgroundColor: "rgb(158 141 116)",
      height: cursorSize * 1.5,
      width: cursorSize * 1.5,
      x: mousePosition.x - (cursorSize * 1.5) / 2,
      y: mousePosition.y - (cursorSize * 1.5) / 2,
    },
    textLarge: {
      backgroundColor: "rgb(158 141 116)",
      height: width && width >= 1280 ? cursorSize * 4 : cursorSize * 3,
      width: width && width >= 1280 ? cursorSize * 4 : cursorSize * 3,
      x:
        mousePosition.x -
        (width && width >= 1280 ? cursorSize * 4 : cursorSize * 3) / 2,
      y:
        mousePosition.y -
        (width && width >= 1280 ? cursorSize * 4 : cursorSize * 3) / 2,
    },
    image: {
      backgroundColor: "rgb(158 141 116)",
      height:
        width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5,
      width:
        width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5,
      x:
        mousePosition.x -
        (width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5) /
          2,
      y:
        mousePosition.y -
        (width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5) /
          2,
    },
    imageWhite: {
      backgroundColor: "rgb(237 225 225)",
      height:
        width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5,
      width:
        width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5,
      x:
        mousePosition.x -
        (width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5) /
          2,
      y:
        mousePosition.y -
        (width && width >= 1536
          ? cursorSize * 7.5
          : width && width >= 640
          ? cursorSize * 5
          : cursorSize * 2.5) /
          2,
    },
  };

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setTimeout(() => setCursorVisibility("visible"), 250);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.span
      className="cursor"
      variants={variants}
      animate={variant}
      style={{
        visibility: cursorVisibility,
      }}
    ></motion.span>
  );
};

export default Cursor;
