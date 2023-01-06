/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { changeCursor } from "../features/cursorSlice";
import { getHamburger } from "../features/hamburgerSlice";
import godImg from "../public/god-transparent.webp";
import { useEffect, useState } from "react";
import Head from "next/head";

const NotFound = () => {
  const dispatch = useDispatch();
  const hamburgerIsOpen = useSelector(getHamburger);
  const [errorIsVisible, setErrorIsVisible] = useState(false);
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setErrorIsVisible(true);
    }, 500);
    setTimeout(() => {
      setAnimate(1);
      setTimeout(() => {
        setTimeout(() => {
          setAnimate(3);
        }, 1000);
      }, 750);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta
          property="og:image"
          content="https://michelangelo-exibition.vercel.app/thumbnail.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen z-[0] relative overflow-hidden flex justify-center items-center">
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

        {animate <= 3 && (
          <div
            className={`flex absolute left-0 flex-col justify-center items-center w-full md:hidden z-[2] md:w-1/2 text-secondary`}
          >
            <span className="flex absolute top-0 justify-center w-full h-full z-[1] py-[0.25rem]">
              <AnimatePresence>
                {animate === 1 && (
                  <>
                    <motion.span
                      initial={{ x: -500 }}
                      animate={{ x: 0 }}
                      exit={{ x: -500 }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="absolute left-0 w-1/2 h-full bg-secondary"
                    />
                    <motion.span
                      initial={{ x: 500 }}
                      animate={{ x: 0 }}
                      exit={{ x: 500 }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="absolute right-0 w-1/2 h-full bg-dark"
                    />
                  </>
                )}
              </AnimatePresence>
            </span>
            <div
              className="text-5xl tiny:text-6xl esm:text-7xl sm:text-8xl"
              style={{
                opacity: 0,
              }}
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              404
            </div>

            <h1
              className="text-3xl tiny:text-4xl sm:text-5xl"
              style={{
                opacity: 0,
              }}
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Page Not Found
            </h1>
          </div>
        )}
        <div
          className={`flex absolute left-0 flex-col justify-center items-center w-full opacity-0 mix-blend-difference md:hidden z-[1] md:w-1/2 text-secondary`}
          style={{
            opacity: animate >= 2 ? 100 : "default",
          }}
        >
          <div
            className="text-5xl tiny:text-6xl esm:text-7xl sm:text-8xl"
            onMouseEnter={() => dispatch(changeCursor("textLarge"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          >
            404
          </div>
          <h1
            className="text-3xl tiny:text-4xl sm:text-5xl"
            onMouseEnter={() => dispatch(changeCursor("textLarge"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          >
            Page Not Found
          </h1>
        </div>

        {errorIsVisible && (
          <div
            className={`hidden absolute left-0 flex-col justify-center items-center w-full mix-blend-difference md:flex z-[1] md:w-1/2 text-secondary slide-right`}
          >
            <div
              className="text-5xl tiny:text-6xl esm:text-7xl sm:text-8xl"
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              404
            </div>
            <h1
              className="text-3xl tiny:text-4xl sm:text-5xl"
              onMouseEnter={() => dispatch(changeCursor("textLarge"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            >
              Page Not Found
            </h1>
          </div>
        )}

        <div className="flex absolute  flex-col  items-center h-1/2 wrapper text-dark md:flex-row-reverse gap-[1.1rem] justify-center md:justify-between w-4/6">
          <div className="hidden overflow-hidden relative justify-center items-center w-4/6 h-full md:flex md:justify-start md:min-w-4/6">
            <Image
              priority
              placeholder="blur"
              alt={`The god`}
              src={godImg}
              onMouseEnter={() => dispatch(changeCursor("image"))}
              onMouseLeave={() => dispatch(changeCursor("default"))}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
