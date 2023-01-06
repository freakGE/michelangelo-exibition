import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { changeCursor } from "../features/cursorSlice";
import { getHamburger, openHamburger } from "../features/hamburgerSlice";
import { AnimatePresence, motion } from "framer-motion";
import useCurrentScroll from "./CurrentScroll";
import { useRouter } from "next/router";
const HamburgerMenu = dynamic(() => import("./HamburgerMenu"));

export type NavbarProps = {
  selected: string;
};

const Navbar = ({ selected }: NavbarProps) => {
  const scroll = useCurrentScroll();
  const router = useRouter();

  const dispatch = useDispatch();
  const hamburgerIsOpen = useSelector(getHamburger);

  const [selectedWidth, setSelectedWidth] = useState(0);
  const [coordinateX, setCoordinateX] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    //!
    setSelectedWidth(e.currentTarget.clientWidth);
    setCoordinateX(e.currentTarget.offsetLeft);

    dispatch(openHamburger(false));
    //!

    const href = e.currentTarget.href.split("/");

    const nextSection = `/${href[href.length - 1]}`;
    const currentSection = router.asPath;

    if (
      (currentSection === "/#about" && nextSection === "/#about") ||
      (currentSection === "/#home" && nextSection === "/#home") ||
      (currentSection === "/collection" && nextSection === "/collection")
    )
      return;

    setTimeout(() => {
      router.push(nextSection);
    }, 750);
  };

  useEffect(() => {
    const selectedLink = Array.from(document.querySelectorAll("a")).filter(
      element => {
        return element.innerText.toLowerCase() === selected;
      }
    )[0];
    if (selectedLink) {
      setSelectedWidth(selectedLink.clientWidth);
      setCoordinateX(selectedLink.offsetLeft);
    }
  }, [selected]);
  //!!!!
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollUp(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollUp]);
  //!!!!
  // return (
  //   <nav
  //     className={`flex fixed justify-center py-5 w-full z-[10] md:w-[50vw]
  //     duration-200
  //     ${!hamburgerIsOpen && `backdrop-blur bg-dark bg-opacity-[65%]`}
  //     `}
  //   >
  //     <div
  //       className="hidden relative justify-between items-center text-2xl md:flex wrapper wrapper-navbar"
  //       onMouseEnter={() => dispatch(changeCursor("textWhite"))}
  //       onMouseLeave={() => dispatch(changeCursor("default"))}
  //     >
  //       <Link href="/" onClick={handleClick}>
  //         Home
  //       </Link>
  //       <Link href="#About" onClick={handleClick}>
  //         About
  //       </Link>
  //       <Link href="#" onClick={handleClick}>
  //         Collection
  //       </Link>
  //       <div
  //         className={`navbar-line`}
  //         style={{ left: `${coordinateX}px`, width: `${selectedWidth}px` }}
  //       ></div>
  //     </div>
  //     <HamburgerMenu />
  //   </nav>
  // );
  return (
    <AnimatePresence>
      {(scrollUp || hamburgerIsOpen) && (
        <motion.nav
          initial={{ translateY: -500 }}
          animate={{ translateY: 0, transition: { duration: 0.25 } }}
          exit={{ translateY: -500, transition: { duration: 0.25 } }}
          // style={{
          //   transform: scrollUp ? `translateY(0%)` : `translateY(-100%)`,
          //   transition: `all 0.25s cubic-bezier(0.645,0.045,0.355,1)`,
          // }}
          className={`flex fixed justify-center py-5 w-full z-[10] md:w-[50vw]
    duration-200 rounded-br-lg
    ${
      !hamburgerIsOpen &&
      scroll !== 0 &&
      `backdrop-blur bg-dark bg-opacity-[65%]`
    } 
    `}
        >
          <div
            className="hidden relative justify-between items-center text-2xl md:flex wrapper wrapper-navbar"
            onMouseEnter={() => dispatch(changeCursor("textWhite"))}
            onMouseLeave={() => dispatch(changeCursor("default"))}
          >
            <Link href="/#home" onClick={handleClick}>
              Home
            </Link>
            <Link href="/#about" onClick={handleClick}>
              About
            </Link>
            <Link href="collection" onClick={handleClick}>
              Collection
            </Link>
            <div
              className={`navbar-line`}
              style={{ left: `${coordinateX}px`, width: `${selectedWidth}px` }}
            ></div>
          </div>
          <HamburgerMenu />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
