const methodButtons = document.querySelectorAll('.method-btn');
const methodFields = document.querySelectorAll('.method-fields');
const paymentForm = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');

methodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    methodButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const method = btn.dataset.method;
    methodFields.forEach(field => field.classList.add('hidden'));
    document.getElementById(`${method}Fields`).classList.remove('hidden');
  });
});

paymentForm.addEventListener('submit', e => {
  e.preventDefault();
  successMessage.classList.remove('hidden');

  setTimeout(() => {
    successMessage.classList.add('hidden');
    paymentForm.reset();
    methodButtons.forEach(b => b.classList.remove('active'));
    methodButtons[0].
