const form = document.getElementById("applyForm");
const feedback = document.getElementById("applyFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show feedback
  form.style.display = "none";
  feedback.style.display = "block";
});
