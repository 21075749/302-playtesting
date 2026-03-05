let rectangles = [];
let barY;
const rectWidth = 90;
const rectHeight = 30;
let speed = 3;
let level = 1;
let gameOver = false;
const maxLevels = 3;
let particles = []; // store all active particles

function setup() {
  createCanvas(600, 600);
  barY = height - 50;
  startLevel(level);

  const retryBtn = document.getElementById("retryButton");
  retryBtn.addEventListener("click", () => {
    // Reset game
    speed = 3;
    level = 1;
    gameOver = false;
    rectangles = [];
    particles = [];
    retryBtn.style.display = "none";
    document.getElementById("message").innerText =
      "Hit F or J as rectangles reach the bar";
    startLevel(level);
  });
}

function draw() {
  background(0);

  noStroke();

  // ---- Draw neon lanes with gradient opacity ----
  const topAlpha = 102; // ~40% opacity
  const bottomAlpha = 255; // fully opaque
  const steps = 60;

  for (let i = 0; i < steps; i++) {
    const alphaValue = lerp(topAlpha, bottomAlpha, i / (steps - 1));
    fill(60, 60, 60, alphaValue);
    const yPos = (height / steps) * i;
    const h = height / steps;
    rect(width / 4 - rectWidth / 2, yPos, rectWidth, h);
    rect((3 * width) / 4 - rectWidth / 2, yPos, rectWidth, h);
  }

  drawingContext.shadowBlur = 0;

  // ---- Draw glowing bottom bar ----
  drawingContext.shadowBlur = 25;
  drawingContext.shadowColor = color(255);
  fill(255);
  rect(0, barY, width, 12);
  drawingContext.shadowBlur = 0;

  if (!gameOver) {
    rectangles.forEach((r) => {
      if (!r.hit) {
        r.y += speed;

        // ---- Glowing falling rectangles ----
        drawingContext.shadowBlur = 25;
        drawingContext.shadowColor =
          r.key === "F" ? color(0, 255, 255) : color(255, 0, 255);

        fill(r.key === "F" ? color(0, 255, 255) : color(255, 0, 255));
        rect(r.x, r.y, rectWidth, rectHeight, 12);

        drawingContext.shadowBlur = 0; // reset shadow

        // Missed rectangle
        if (r.y > barY + 10) {
          gameOver = true;
          document.getElementById("message").innerText =
            "Game Over! You missed a note.";
          document.getElementById("retryButton").style.display = "block";
        }
      }
    });

    // Check if all hit
    let allHit = rectangles.every((r) => r.hit);
    if (allHit && !gameOver) {
      if (level < maxLevels) {
        level++;
        speed += 1;
        document.getElementById("message").innerText =
          `Level ${level - 1} Complete! Get ready for Level ${level}`;
        startLevel(level);
      } else {
        gameOver = true;
        document.getElementById("message").innerText =
          "All Levels Complete! 🎉";
        document.getElementById("retryButton").style.display = "block";
      }
    }
  }

  // ---- Draw and update particles ----
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    fill(red(p.color), green(p.color), blue(p.color), p.alpha);
    noStroke();
    ellipse(p.x, p.y, p.size);

    // Move particle
    p.x += p.vx;
    p.y += p.vy;

    // Fade out
    p.alpha -= 10;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

function startLevel(levelNumber) {
  rectangles = createLevel(levelNumber);
  gameOver = false;
}

function keyPressed() {
  if (gameOver) return;

  const pressedKey = key.toUpperCase();
  rectangles.forEach((r) => {
    if (!r.hit && r.key === pressedKey) {
      if (r.y + rectHeight >= barY && r.y <= barY + 10) {
        r.hit = true;

        // ---- Particle burst on hit ----
        createBurst(
          r.x,
          r.y,
          r.key === "F" ? color(0, 255, 255) : color(255, 0, 255),
        );
      }
    }
  });
}

// ---- Create particles for a burst ----
function createBurst(x, y, noteColor) {
  const count = 8; // fewer particles for performance
  for (let i = 0; i < count; i++) {
    particles.push({
      x: x + rectWidth / 2,
      y: y + rectHeight / 2,
      vx: random(-2, 2),
      vy: random(-2, -4),
      alpha: 255,
      color: noteColor,
      size: random(4, 8),
    });
  }
}
