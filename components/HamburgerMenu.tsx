import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCursor } from "../features/cursorSlice";
import { getHamburger, openHamburger } from "../features/hamburgerSlice";

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  let array = Array(3).fill(0);
  const hamburgerIsOpen = useSelector(getHamburger);
  const [firstLoad, setFirstLoad] = useState(false);
  const [duration, setDuration] = useState<string | null>(null);

  const handleChange = () => {
    dispatch(openHamburger(!hamburgerIsOpen));
  };

  useEffect(() => {
    setTimeout(() => setFirstLoad(true), 500);
    setTimeout(() => setDuration("duration-500"), 2000);
  }, []);

  return (
    <div
      className="flex overflow-visible relative flex-col gap-y-2 justify-between w-11/12 h-full duration-300  md:hidden z-[11]"
      onClick={handleChange}
      onMouseEnter={() =>
        hamburgerIsOpen
          ? dispatch(changeCursor("text"))
          : dispatch(changeCursor("textWhite"))
      }
      onMouseLeave={() => dispatch(changeCursor("default"))}
    >
      {array.map((line, i) => {
        i++;

        return (
          <motion.div
            key={i}
            className={`h-1 ${duration} ${
              hamburgerIsOpen
                ? `w-[2.5rem] bg-dark`
                : `w-[2.25rem] bg-secondary`
            }`}
            initial={{
              x: -1000,
              opacity: 0,
            }}
            animate={{
              x: hamburgerIsOpen === true && i === 2 ? -1000 : 0,
              rotate: hamburgerIsOpen && i !== 2 ? (i === 1 ? 45 : -45) : 0,
              y:
                hamburgerIsOpen && i !== 2
                  ? i === 1
                    ? `0.75rem`
                    : `-0.75rem`
                  : 0,
              opacity: 1,
            }}
            transition={{
              duration: hamburgerIsOpen
                ? i !== 2
                  ? 1 / 3
                  : 1 / 2
                : !firstLoad
                ? i / 2
                : i / 4,
              type: "spring",
              bounce: 1 / 5,
            }}
          ></motion.div>
        );
      })}
    </div>
  );
};

export default HamburgerMenu;
