import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "./CursorProvider";
const Cursor = () => {
  const { cursorVariants } = useContext(CursorContext);
  const [cursorposition, setcursorposition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    window.addEventListener("mousemove", updatemouse);
    return () => {
      window.removeEventListener("mousemove", updatemouse);
    };
  }, []);
  const updatemouse = (e) => {
    setcursorposition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const variants = {
    default: {
      x: cursorposition.x - 15,
      y: cursorposition.y - 15,
    },
    text: {
      height: 150,
      width: 150,
      x: cursorposition.x - 75,
      y: cursorposition.y - 75,
      backgroundColor: "#e3e8f1",
      mixBlendMode: "difference",
    },
  };
  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariants}
      />
    </>
  );
};

export default Cursor;
