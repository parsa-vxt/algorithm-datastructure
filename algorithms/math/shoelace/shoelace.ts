// Learned this implementation from the Virtual Math YouTube channel
// Source: https://www.youtube.com/watch?v=FSWPX0XB7a0

type Cordinate = { x: number; y: number };

const polygon: Cordinate[] = [
  { x: 4, y: 10 },
  { x: 9, y: 7 },
  { x: 11, y: 2 },
  { x: 2, y: 2 },
  { x: 4, y: 10 },
];

const shoeLace = (cordinates: Cordinate[]) =>
  Math.abs(
    cordinates
      .map((point, index) =>
        index === 0 ? 0 : point.y * cordinates[index - 1].x
      )
      .reduce((a, b) => a + b) -
      cordinates
        .map((point, index) =>
          index === 0 ? 0 : point.x * cordinates[index - 1].y
        )
        .reduce((a, b) => a + b)
  ) / 2;

console.log("Result:", shoeLace(polygon));
