import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openHamburger } from "../features/hamburgerSlice";
import { NavbarProps } from "./Navbar";

type ModalMenuProps = {
  isVisible: boolean;
} & NavbarProps;

const ModalMenu = ({ isVisible, selected }: ModalMenuProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [coordinateY, setCoordinateY] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setCoordinateY(e.currentTarget.offsetTop);
    dispatch(openHamburger(false));

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
    switch (selected) {
      case "collection":
        setCoordinateY(88);
        break;
      case "about":
        setCoordinateY(44);
        break;
      default:
        setCoordinateY(0);
    }
  }, [selected]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          exit={{ x: -500, transition: { duration: 0.75 } }}
          className="flex fixed z-[1] justify-center items-center h-screen text-4xl font-semibold bg-secondary text-dark w-full esm:w-[50vw] tiny:w-[75vw]"
        >
          <div className="flex relative flex-col gap-y-1 text-right">
            <Link href="/#home" onClick={handleClick}>
              Home
            </Link>
            <Link href="/#about" onClick={handleClick}>
              About
            </Link>
            <Link href="collection" onClick={handleClick}>
              Collection
            </Link>
            <span
              className={`h-[30px] mt-[5px] modal-line`}
              style={{ top: `${coordinateY}px` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMenu;
