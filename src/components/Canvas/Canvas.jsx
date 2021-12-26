import React, { useEffect, useRef } from "react";
import "./Canvas.sass";
import { useProduct } from "../hook/ProductProvider";

export default function Canvas() {
  const canvasRef = useRef(null);
  const { productDataCanvas } = useProduct();
  const data = Object.entries(productDataCanvas);
  let dataMax = Math.max(...Object.values(productDataCanvas));
  let dataMin = Math.min(...Object.values(productDataCanvas));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const scaleX = 20;
    const scaleY = 20;
    canvas.width = dataMax + 300;
    canvas.height = scaleY * data.length + scaleY;
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = scaleY * data.length + scaleY;
    console.log(canvas.width);

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    ctx.strokeStyle = "#f5f0e8";
    ctx.lineWidth = 1;
    for (let i = 0; i <= canvasWidth; i = i + scaleX) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvasHeight);
    }
    for (let i = 0; i <= canvasHeight; i = i + scaleY) {
      ctx.moveTo(0, i);
      ctx.lineTo(canvasWidth, i);
    }
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();

    for (let i = 0; i < data.length; i++) {
      const x = 0;
      const x_1 = data[i][0];
      const x_2 = data[i][1];
      const color = "#0000ff";

      ctx.font = `${Math.round(scaleY / 2 + 5)}px  Arial`;
      ctx.fillText(x_1, x + 10, scaleX - 5 + i * scaleY);
      ctx.fillText(x_2, x_2 + 100, scaleX - 5 + i * scaleY);

      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.moveTo(x, scaleX + i * scaleY);
      ctx.lineTo(x_2 + 100, scaleX + i * scaleY);
    }
    ctx.stroke();
    ctx.closePath();
  });

  return (
    <>
      <canvas ref={canvasRef} className="canvas" />
    </>
  );
}
