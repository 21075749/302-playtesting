function createLevel(levelNumber) {
  const rectangles = [];
  const rectCount = 16 + (levelNumber - 1) * 4;

  for (let i = 0; i < rectCount; i++) {
    const keyChar = i % 2 === 0 ? "F" : "J"; // fixed lanes
    const lane = keyChar === "F" ? width / 4 - 25 : (3 * width) / 4 - 25;
    rectangles.push({
      x: lane,
      y: -i * 80, // spaced apart
      key: keyChar,
      hit: false,
    });
  }

  return rectangles;
}
