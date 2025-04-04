"use client";
import { useEffect, useState, useCallback } from "react";

export const useIsClickOut = (
  setter: (bool: boolean) => void
): [(node: HTMLDivElement) => void] => {
  const [ele, setEle] = useState<HTMLDivElement | null>(null);
  const eleCallback = useCallback((node: HTMLDivElement) => {
    setEle(node);
  }, []);

  useEffect(() => {
    if (ele === null) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (e: any) => {
      if (ele.contains(e.target)) return;
      setter(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ele]);

  return [eleCallback];
};

export default useIsClickOut;
