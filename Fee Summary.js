// Animate progress bar
window.addEventListener("load", () => {
  const progress = document.getElementById("progress");
  const progressText = document.getElementById("progressText");
  const percent = 70; // Paid Percentage

  setTimeout(() => {
    progress.style.width = percent + "%";
    progressText.textContent = percent + "% Paid";
  }, 500);
});

// Pie Chart
const ctx = document.getElementById("feeChart").getContext("2d");
const feeChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Fees Paid", "Pending Fees"],
    datasets: [{
      data: [42000, 18000],
      backgroundColor: ["#2c3e91", "#ff8c42"],
      hoverOffset: 6,
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#333', font: { size: 14 } }
      }
    }
  }
});

// Smart alert timeout
setTimeout(() => {
  const alertBox = document.getElementById("alertBox");
  alertBox.style.transition = "opacity 1s";
  alertBox.style.opacity = "0.6";
}, 5000);

// Receipt Button
document.getElementById("receiptBtn").addEventListener("click", () => {
  alert("📄 Redirecting to your payment receipts...");
});


.
// Fade-in on scroll for timeline cards
const timelineCards = document.querySelectorAll('.timeline-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  timelineCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom){
      card.classList.add('active');
    }
  });
});
