"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
    x: -100, 
    scale: 0.8, 
  },
  enter: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1, 
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.75, 
    },
  },
  exit: {
    opacity: 0,
    y: -100, 
    x: 100, 
    scale: 0.8, 
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.75,
    },
  },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname(); 

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="staircase-effect"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
