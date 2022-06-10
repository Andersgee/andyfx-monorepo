import { useEffect, useState } from "react";

export function useCanvasDataUrl(ref: React.RefObject<HTMLCanvasElement>) {
  const [url, setUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return;
    }
    const url = canvas.toDataURL(); //default MIME type is image/png
    setUrl(url);
  }, [ref]);

  return url;
}
