function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener(
      "load",
      () => {
        resolve(image);
      },
      { once: true }
    );
    image.addEventListener("error", (err) => reject(err));
    image.src = url;
  });
}

function dataurlFromSvgstring(svg: string) {
  return URL.createObjectURL(
    new Blob([svg], {
      type: "image/svg+xml",
    })
  );
}

export async function imageDataFromSvgstring(svg: string, width: number, height: number) {
  try {
    const dataurl = dataurlFromSvgstring(svg);
    const image = await loadImage(dataurl);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.drawImage(image, 0, 0, width, height);
    const imageData = ctx.getImageData(0, 0, width, height);
    return imageData;
  } catch {
    return undefined;
  }
}
