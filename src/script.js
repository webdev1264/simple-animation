document.getElementById("app").innerHTML = `
<h1>VanillaJS Animation</h1>
<button class="btn">Start/stop animation</button>
<div class="big-square">
  <div class="round">
  </div>
</div>
`;

const button = document.querySelector(".btn");
const round = document.querySelector(".round");
let isAnimated = false;
let direction = "down";
let position = 250;
let intervalId;

button.addEventListener("click", () => {
  isAnimated = !isAnimated;
  if (isAnimated) {
    return animation();
  }
  clearInterval(intervalId);
});

const animate = () => {
  direction === "down" ? position++ : position--;
  round.style.top = position + "px";
  round.style.left = position + "px";
  if (position === 450) {
    direction = "up";
  }
  if (position === 0) {
    direction = "down";
  }
};

const animation = () => {
  intervalId = setInterval(animate, 1);
};
