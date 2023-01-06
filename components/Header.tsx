import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHamburger, openHamburger } from "../features/hamburgerSlice";
import useWindowDimensions from "./WindowDimensions";

const Cursor = dynamic(() => import("./Cursor"));
const ModalMenu = dynamic(() => import("./ModalMenu"));
const Navbar = dynamic(() => import("./Navbar"));

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const hamburgerIsOpen = useSelector(getHamburger);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    let path = router.asPath.replace("/", "").replace("#", "");
    setCurrentSection(path || "home");
  }, [router]);

  useEffect(() => {
    if (width && width > 767) dispatch(openHamburger(false));
  }, [width]);

  return (
    <>
      <Cursor />
      <Navbar selected={currentSection} />
      <ModalMenu selected={currentSection} isVisible={hamburgerIsOpen} />
    </>
  );
};

export default Header;
