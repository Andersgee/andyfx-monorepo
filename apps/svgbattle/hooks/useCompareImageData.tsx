import { useEffect, useState } from "react";

/**
 * compare two images. return imagedata describing where they are not equal.
 *
 * also return percentage of equal pixels.
 */
export function useCompareImageData(imageData1?: ImageData, imageData2?: ImageData) {
  const [percent, setPercent] = useState(0);
  const [imageData, setImageData] = useState<ImageData | undefined>(undefined);

  useEffect(() => {
    if (!imageData1 || !imageData2) {
      return;
    }
    const { percentCorrect, debugImageData } = compareImageData(imageData1, imageData2);
    setPercent(percentCorrect);
    setImageData(debugImageData);
  }, [imageData1, imageData2]);

  return { percent, imageData };
}

/**
 * return percentage equal pixels.
 *
 * also return ImageData of where errors are
 */
function compareImageData(imageData: ImageData, targetImageData: ImageData) {
  const Nbytes = imageData.data.length;
  const Npixels = Nbytes / 4;
  const debugData = new Uint8ClampedArray(Nbytes);
  let correctPixelCount = 0;
  for (let i = 0; i < Nbytes; i += 4) {
    const isCorrect = hasSamePixelvalue(i, imageData, targetImageData);
    debugData[i + 3] = 255; // always use full alpha
    if (isCorrect) {
      correctPixelCount += 1;
    } else {
      /*
      debugData[i] = Math.hypot(
        absdiff(imageData.data[i], targetImageData.data[i]),
        absdiff(imageData.data[i + 1], targetImageData.data[i + 1]),
        absdiff(imageData.data[i + 2], targetImageData.data[i] + 2)
      );
      debugData[i] = Math.max(64, debugData[i]);
*/
      debugData[i] = 255; //red
      //debugData[i+1] = 0; //green
      //debugData[i+2] = 0; //blue

      //debugData[i] = 0.5 * imageData.data[i] + 0.5 * targetImageData.data[i];
      //debugData[i + 1] = 0.5 * imageData.data[i + 1] + 0.5 * targetImageData.data[i + 1];
      //debugData[i + 2] = 0.5 * imageData.data[i + 2] + 0.5 * targetImageData.data[i + 2];
    }

    //debugData[i] = diffValue(targetImageData.data[i], imageData.data[i]);
    //debugData[i + 1] = diffValue(targetImageData.data[i + 1], imageData.data[i + 1]);
    //debugData[i + 2] = diffValue(targetImageData.data[i + 2], imageData.data[i + 2]);
  }
  const percentCorrect = Math.floor(100 * (correctPixelCount / Npixels));
  const debugImageData = new ImageData(debugData, imageData.width, imageData.height);
  return {
    percentCorrect,
    debugImageData,
  };
}

const absdiff = (a: number, b: number) => Math.abs(a - b);

/** return 0 if a==b otherwise return largest */
const diffValue = (a: number, b: number) => (a == b ? 0 : a > b ? a : b);

//const diffValue = (a: number, b: number) => Math.abs(b - a);
/**
 * true if indexes i, i+1, i+2, i+3 are the same in `a` and `b`
 * */
function hasSamePixelvalue(i: number, a: ImageData, b: ImageData) {
  return (
    a.data[i] === b.data[i] &&
    a.data[i + 1] === b.data[i + 1] &&
    a.data[i + 2] === b.data[i + 2] &&
    a.data[i + 3] === b.data[i + 3]
  );
}
