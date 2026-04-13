// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const hostelCards = document.querySelectorAll('.hostel-card');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    hostelCards.forEach(card => {
      if(card.id === btn.dataset.hostel){
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
