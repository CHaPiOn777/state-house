"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useWindowSize = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 520px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 521px) and (max-width: 1025px)",
  });

  const [windowSize, setWindowSize] = useState("large"); // Установите значение по умолчанию

  useEffect(() => {
    // Обновляйте состояние только на клиенте
    if (isSmallScreen) {
      setWindowSize("small");
    } else if (isMediumScreen) {
      setWindowSize("medium");
    } else {
      setWindowSize("large");
    }
  }, [isSmallScreen, isMediumScreen]);

  return { width: windowSize };
};

export default useWindowSize;
