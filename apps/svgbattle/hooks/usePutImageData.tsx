import { useEffect } from "react";

/**
 * Utility for drawing on canvas by ImageData
 *
 * (does nothing if no canvas or no imageData)
 * */
export function usePutImageData(ref: React.RefObject<HTMLCanvasElement>, imageData?: ImageData) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !imageData) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
  }, [ref, imageData]);
}
