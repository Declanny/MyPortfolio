// Create a file at ../ui/text-generate-effect.tsx

import React, { useEffect, useState } from "react";

export const TextGenerateEffect = ({ words }: { words: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + words[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed of text generation here
      return () => clearTimeout(timer);
    }
  }, [index, words]);

  return <p>{displayedText}</p>;
};
