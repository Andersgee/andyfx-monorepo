import { useEffect, useState } from "react";

/**
 * convert an svg string to objecturl (which can be used in image.src)
 */
export function useSvgObjectUrl(svg: string) {
  const [url, setUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!svg) {
      return;
    }
    const dataurl = URL.createObjectURL(
      new Blob([svg], {
        type: "image/svg+xml",
      })
    );
    if (dataurl) {
      setUrl(dataurl);
    }
    return () => URL.revokeObjectURL(dataurl);
  }, [svg]);

  return url;
}
