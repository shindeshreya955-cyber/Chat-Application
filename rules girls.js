const viewRulesBtn = document.getElementById('viewRulesBtn');
const rulesModal = document.getElementById('rulesModal');
const closeRules = document.getElementById('closeRules');

// Open Modal
viewRulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'flex';
});

// Close Modal
closeRules.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if(e.target === rulesModal){
    rulesModal.style.display = 'none';
  }
});
