const body = document.querySelector('body');

body.addEventListener("click", (e) => {
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");

  const colors = ["red", "blue", "orange", "green", "pink", "purple"];
  circleElement.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  circleElement.textContent = "😀";

  circleElement.style.position = "absolute";
  circleElement.style.top = `${e.clientY}px`;
  circleElement.style.left = `${e.clientX}px`;

  body.append(circleElement);

  // ❗ animation khatam hone ke baad remove karo
  circleElement.addEventListener("animationend", () => {
    circleElement.remove();
  });
});
