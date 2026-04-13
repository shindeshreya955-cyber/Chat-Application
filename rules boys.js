const viewBoysRulesBtn = document.getElementById('viewBoysRulesBtn');
const boysRulesModal = document.getElementById('boysRulesModal');
const closeBoysRules = document.getElementById('closeBoysRules');

// Open Modal
viewBoysRulesBtn.addEventListener('click', () => {
  boysRulesModal.style.display = 'flex';
});

// Close Modal
closeBoysRules.addEventListener('click', () => {
  boysRulesModal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === boysRulesModal) {
    boysRulesModal.style.display = 'none';
  }
});
