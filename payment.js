// Show/Hide Payment Method Details
const cardRadio = document.getElementById('card');
const upiRadio = document.getElementById('upi');
const netRadio = document.getElementById('netbanking');
const cardDetails = document.getElementById('cardDetails');
const upiQR = document.getElementById('upiQR');

cardRadio.addEventListener('change', togglePaymentFields);
upiRadio.addEventListener('change', togglePaymentFields);
netRadio.addEventListener('change', togglePaymentFields);

function togglePaymentFields(){
  if(cardRadio.checked){
    cardDetails.style.display = 'block';
    upiQR.style.display = 'none';
  } else if(upiRadio.checked){
    cardDetails.style.display = 'none';
    upiQR.style.display = 'block';
    generateQRCode();
  } else {
    cardDetails.style.display = 'none';
    upiQR.style.display = 'none';
  }
}

// Generate QR Code for UPI
function generateQRCode(){
  QRCode.toCanvas(document.getElementById('qrCanvas'), 'upi://pay?pa=college@upi&pn=College&am=40000', {
    width:150,
    colorDark:"#1e3c72",
    colorLight:"#fff"
  });
}

// Handle Payment Form Submission
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', function(e){
  e.preventDefault();
  showToast("Payment Successful ✅");
  paymentForm.reset();
  cardDetails.style.display = 'none';
  upiQR.style.display = 'none';
});

// Toast Notification
function showToast(message){
  const toast = document.getElementById('paymentToast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(()=> { toast.style.display='none'; }, 3000);
}
