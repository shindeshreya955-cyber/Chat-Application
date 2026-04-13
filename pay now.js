// Generate QR Code
const qrOptions = { width: 150, colorDark:"#1e3c72", colorLight:"#fff" };
QRCode.toCanvas(document.getElementById('qrPayment'), 'upi://pay?pa=college@upi&pn=College&am=40000', qrOptions);

// Simulate Payment Function
function simulatePayment(){
  showToast("Payment Successful ✅");
}

// Show Toast Function
function showToast(message){
  const toast = document.getElementById('paymentToast');
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}
