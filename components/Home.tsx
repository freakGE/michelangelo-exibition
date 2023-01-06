/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { changeCursor } from "../features/cursorSlice";
import { getHamburger } from "../features/hamburgerSlice";
import michelangelo_david_head from "../public/michelangelo_david_head.jpeg";
import useWindowDimensions from "./WindowDimensions";
import useCurrentScroll from "./CurrentScroll";

export const Home = () => {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const scroll = useCurrentScroll();
  const hamburgerIsOpen = useSelector(getHamburger);
  const [animate, setAnimate] = useState(0);
  const [divider, setDivider] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(1);
      setTimeout(() => setAnimate(2), 500);
      setTimeout(() => {
        setAnimate(3);
        setAnimate(4);
        setTimeout(() => setAnimate(5), 1000);
      }, 1000);
    }, 1000);
  }, []);

  useEffect(() => {
    if (width) {
      width >= 1024
        ? width >= 1280
          ? setDivider(3)
          : setDivider(4)
        : setDivider(5);
    }
  }, [scroll]);

  return (
    <section
      id="homeSection"
      className="w-screen h-screen z-[0] relative overflow-hidden"
    >
      <AnimatePresence>
        {!hamburgerIsOpen && (
          <motion.span
            initial={{ x: `100%` }} //500
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            exit={{ x: `100%`, transition: { duration: 0.75 } }} //500
            className={`home-bg`}
          ></motion.span>
        )}
      </AnimatePresence>
      <div
        className="relative z-[1] wrapper-container items-center w-full h-[75vh] 2xl:h-[82.5vh] flex-col"
        // h-full
      >
        <div
          //!v1
          // className={`flex overflow-hidden relative justify-center items-center w-11/12 pt-[3.25vh] sm:pt-[5vh] md:pt-[5.5vh] lg:pt-[7.5vh] lg:max-h-[31vh] md:max-h-[23vh] sm:max-h-[20vh] esm:max-h-[16vh] max-h-[13vh]  xl:max-h-[38.5vh] xl:pt-[9.5vh] 2xl:max-h-[46vh] 2xl:pt-[11.5vh]`}
          //!v2
          className={`flex overflow-hidden relative justify-center items-center w-11/12 pt-[3.25vh] sm:pt-[5vh] md:pt-[5.5vh] lg:pt-[7.5vh] lg:max-h-[31vh] md:max-h-[23vh] sm:max-h-[20vh] esm:max-h-[16vh] max-h-[13vh]  xl:max-h-[38.5vh] xl:pt-[9.5vh] 2xl:max-h-[42.5vh] 2xl:pt-[6vh]`}
        >
          {animate > 0 && (
            <>
              <span className="flex absolute top-0 justify-center w-full h-full z-[1]">
                <motion.span
                  initial={{ x: 0 }}
                  animate={{
                    x: animate >= 3 ? `-100%` : animate === 1 ? -100 : 0,
                  }}
                  transition={
                    animate >= 3
                      ? {
                          duration: 0.5,
                          type: "spring",
                        }
                      : {
                          duration: 0.5,
                        }
                  }
                  exit={{ x: 0 }}
                  className="w-full h-full bg-dark"
                ></motion.span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{
                    x: animate >= 3 ? `100%` : animate === 1 ? 100 : 0,
                  }}
                  transition={
                    animate >= 3
                      ? {
                          duration: 0.5,
                          type: "spring",
                        }
                      : {
                          duration: 0.5,
                        }
                  }
                  exit={{ x: 0 }}
                  className="w-full h-full bg-secondary"
                ></motion.span>
              </span>

              <Image
                priority
                src={michelangelo_david_head}
                alt={"michelangelo_david_head"}
                placeholder="blur"
                // className="duration-[2000ms]"
                style={{
                  zIndex: animate >= 4 ? 1 : 0,
                  objectFit: "cover",
                  // transitionTimingFunction: "cubic-bezier(0.25,-0.1,1,-0.75)",
                  transitionDuration: animate >= 5 ? "0ms" : "2000ms",
                  transform: `translateY(${scroll / divider}px)`,
                }}
                onMouseEnter={() => dispatch(changeCursor("image"))}
                onMouseLeave={() => dispatch(changeCursor("default"))}
              />
            </>
          )}
        </div>

        {animate >= 4 && (
          <div className="flex flex-wrap gap-x-24 justify-end w-11/12 esm:gap-x-0 esm:justify-between">
            <h1
              className="home-header text-primary sm:text-secondary slide-right"
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Michelangelo
            </h1>
            <h1
              className="home-header text-dark slide-left"
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Exhibition
            </h1>
          </div>
        )}
      </div>
      <motion.span
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        exit={{ y: 500, transition: { duration: 0.75 } }}
        className={`flex absolute bottom-0 justify-center items-center w-full text-xl uppercase md:text-2xl lg:text-3xl md:py-[5rem] sm:py-[4rem] py-[3rem] bg-dark text-secondary`}
      >
        <div className="flex flex-col items-start w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12">
          <p
            onMouseEnter={() => dispatch(changeCursor("text"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
            className="max-w-[26rem] sm:max-w-[41rem] lg:max-w-[44rem] xl:max-w-[52rem]"
          >
            " If people knew how hard I worked to get my mastery, it wouldn't
            seem so wonderful at all. "
          </p>
          <p
            onMouseEnter={() => dispatch(changeCursor("text"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          >
            - Michelangelo
          </p>
        </div>
      </motion.span>
    </section>
  );
};
export default Home;
