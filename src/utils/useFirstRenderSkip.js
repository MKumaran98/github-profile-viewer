/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useFirstRenderSkip = (callback, deps) => {
  const isFirstRenderingDone = useRef(false);

  useEffect(() => {
    if (isFirstRenderingDone.current) callback();
    else isFirstRenderingDone.current = true;
  }, deps);
};

export default useFirstRenderSkip;
