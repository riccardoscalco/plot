import * as Plot from "@observablehq/plot";

export default async function () {
  const m = (640 - 60) / 2;
  const n = (400 - 50) / 2;
  return Plot.plot({
    color: {
      scheme: "spectral"
    },
    marks: [
      Plot.pixel(
        {length: n * m},
        {
          x: (d, i) => i % m,
          y: (d, i) => Math.floor(i / m),
          fill: (d, i) => Math.sin((i % m) / 20) * Math.cos(i / m / 20)
        }
      )
    ]
  });
}
