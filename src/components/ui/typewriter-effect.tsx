"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split words into characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split words into characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const renderWords = () => {
    return (
      <div className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};


export const TypewriterLoop = ({
  wordsArray,
  className,
  cursorClassName,
  wait = 3000,
}: {
  wordsArray: {
    text: string;
    className?: string;
  }[][];
  className?: string;
  cursorClassName?: string;
  wait?: number;
}) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);

  useEffect(() => {
    // Calculate total duration of typing = (chars count * 0.05) + wait + (chars count * 0.03)
    // But since we use AnimatePresence, we just need to wait for typing to finish + wait time.
    // Actually, we can just use a fixed timer if we assume a max length, or dynamic.
    // Better: let the exit animation happen automatically when key changes.
    // But we need to delay the switch.

    const currentWords = wordsArray[currentSentenceIdx];
    const totalChars = currentWords.reduce((acc, word) => acc + word.text.length, 0);
    const typingDuration = totalChars * 0.05; // 0.05 per char stagger
    const deleteDuration = totalChars * 0.03; 
    
    // Total cycle: Type (typingDuration) + Wait (wait) + Delete (deleteDuration)
    // Actually, with AnimatePresence, we can't easily "wait" in the middle unless we use variants with delay.
    
    // Let's stick to the cycle logic but drive it via state and AnimatePresence.
    // However, AnimatePresence works best for entering/exiting. 
    // "Deleting" character by character (backspace) is an "Exit" animation.
    
    const timeout = setTimeout(() => {
      setCurrentSentenceIdx((prev) => (prev + 1) % wordsArray.length);
    }, (typingDuration * 1000) + wait + (deleteDuration * 1000) + 500); // + buffer

    return () => clearTimeout(timeout);
  }, [currentSentenceIdx, wait, wordsArray]);

  const currentWords = wordsArray[currentSentenceIdx];
  const splitWords = currentWords.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSentenceIdx}
          className="inline"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
            hidden: {
              transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
              },
            },
          }}
        >
          {splitWords.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  key={`char-${index}`}
                  className={cn(
                    `inline-block`, // Ensure it takes space
                    word.className
                  )}
                  variants={{
                    visible: {
                      display: "inline-block",
                      opacity: 1,
                      width: "auto", // allow natural width
                      transition: {
                        duration: 0.01, // instant appearance after delay
                      }
                    },
                    hidden: {
                      display: "none",
                      opacity: 0,
                      width: 0,
                      transition: {
                         duration: 0.01,
                      }
                    },
                  }}
                  style={{ whiteSpace: "pre" }} // preserve spaces if any
                >
                  {char}
                </motion.span>
              ))}
              {/* Add a non-breaking space after each word */}
              <span className="inline-block">&nbsp;</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 align-middle ml-1",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
