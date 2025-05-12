// Select elements
const colorPicker = document.getElementById("colorPicker");
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Load user preference from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("boxColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
});

// Save the selected color to localStorage and apply it to the box
colorPicker.addEventListener("change", () => {
  const selectedColor = colorPicker.value;
  localStorage.setItem("boxColor", selectedColor);
  box.style.backgroundColor = selectedColor;
});

// Trigger animation on the box
animateBtn.addEventListener("click", () => {
  box.style.transform = "rotate(360deg)";
  // Reset the transform after animation ends
  setTimeout(() => {
    box.style.transform = "rotate(0deg)";
  }, 1000); // Match the transition duration in CSS
});
