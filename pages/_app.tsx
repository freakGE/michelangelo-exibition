import "../styles/globals.scss";

import dynamic from "next/dynamic";
import store from "../app/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
const Header = dynamic(() => import("../components/Header"));

type VariantsType = {
  initialState: {};
  animateState: {};
  exitState: {};
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const variants: VariantsType = {
    initialState: {
      x: `100%`,
    },
    animateState: {
      x: `0%`,
    },
    exitState: {
      x: `100%`,
    },
  };
  return (
    <Provider store={store}>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
}
