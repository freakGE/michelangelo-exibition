import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArtCollection from "../components/ArtCollection";
import { changeCursor } from "../features/cursorSlice";
import { getHamburger } from "../features/hamburgerSlice";

import creationOfAdam from "../public/creation-of-adam.jpg";

const Collection = () => {
  const dispatch = useDispatch();
  const hamburgerIsOpen = useSelector(getHamburger);
  const [introIsVisible, setIntroIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroIsVisible(true);
    }, 750);
  }, []);

  return (
    <>
      <div className="w-screen h-screen z-[0] relative overflow-hidden mb-[5rem] flex justify-center items-center">
        <AnimatePresence>
          {!hamburgerIsOpen && (
            <motion.span
              initial={{ x: `100%` }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              exit={{ x: `100%`, transition: { duration: 0.75 } }}
              className={`home-bg`}
            ></motion.span>
          )}
        </AnimatePresence>
        {introIsVisible && (
          <div className="flex absolute flex-col justify-between items-center h-1/2 wrapper text-dark md:flex-row gap-[1.1rem]">
            <motion.div
              initial={{
                x: -1250,
              }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="flex overflow-hidden relative justify-center items-center w-full h-full md:justify-start md:min-w-4/6"
            >
              <Image
                priority
                placeholder="blur"
                alt="Creation of Adam"
                src={creationOfAdam}
                className="scale-[3.5] pl-[19.5%]"
                onMouseEnter={() => dispatch(changeCursor("image"))}
                onMouseLeave={() => dispatch(changeCursor("default"))}
              />
            </motion.div>
            <motion.div
              className="flex justify-end w-full mix-blend-difference md:mix-blend-normal md:w-auto md:justify-start"
              initial={{
                x: 1000,
              }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1
                className="home-header text-end md:text-start text-secondary md:text-dark"
                onMouseEnter={() => dispatch(changeCursor("textLarge"))}
                onMouseLeave={() => dispatch(changeCursor("default"))}
              >
                Art Collection
              </h1>
            </motion.div>
          </div>
        )}
      </div>
      <ArtCollection full={true} />
    </>
  );
};

export default Collection;
