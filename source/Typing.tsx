import React, { useEffect, useRef, useState } from "react";
import { TypingProps } from "@source/type";
import { motion } from "framer-motion";

function Typing({
  children,
  interval,
  existTime,
  textStyle,
  symbolStyle,
  symbol,
}: TypingProps) {
  const [characters, setCharacters] = useState<string[]>([]);
  const isReverseRef = useRef<boolean>(false);
  const intervalRef = useRef<number>(-1);
  const [needReload, setNeedReload] = useState<boolean>(false);

  useEffect(() => {
    const allCharacters = children.split("");

    if (intervalRef.current === -1) {
      intervalRef.current = window.setInterval(() => {
        setCharacters((characters) =>
          isReverseRef.current
            ? characters.slice(0, -1)
            : [...characters, allCharacters[characters.length]]
        );
      }, interval);
    }

    const isHead = isReverseRef.current === true && characters.length === 0;
    const isTail =
      isReverseRef.current === false &&
      characters.length === allCharacters.length;

    if (isHead || isTail) {
      window.clearInterval(intervalRef.current);
      setTimeout(
        () => {
          intervalRef.current = -1;
          setNeedReload(!needReload);
        },
        isHead ? interval : existTime
      );
      isReverseRef.current = !isReverseRef.current;
    }
  }, [characters, needReload]);

  return (
    <motion.div
      style={{
        display: "flex",
        alignContent: "center",
        fontFamily: "JetbrainsMono NF",
        ...textStyle,
      }}
    >
      <motion.div>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0, 1],
            }}
            transition={{
              duration: interval / 2000,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        style={{
          borderRight: symbol ? "none" : "3px solid orange",
          whiteSpace: "nowrap",
          marginLeft: "2px",
          ...symbolStyle,
        }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          repeatType: "loop",
          repeat: Infinity,
          duration: 0.5,
        }}
      >
        {symbol}
      </motion.div>
    </motion.div>
  );
}

export default Typing;
