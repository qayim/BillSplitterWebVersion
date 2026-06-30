import { useCallback, useRef } from "react";

export default function useLongPress(onLongPress, delay = 500) {
  const timerRef = useRef(null);

  const start = useCallback(() => {
    timerRef.current = window.setTimeout(() => {
      onLongPress?.();
    }, delay);
  }, [delay, onLongPress]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchStart: start,
    onTouchEnd: clear,
  };
}
