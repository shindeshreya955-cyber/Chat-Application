const downloadBtn = document.getElementById('downloadReceipt');
const closeBtn = document.getElementById('closeReceipt');
const receiptModal = document.getElementById('receiptModal');

// Download PDF
downloadBtn.addEventListener('click', () => {
    const element = document.getElementById('receiptCard');
    html2pdf().from(element).set({
        margin: 10,
        filename: `Payment_Receipt_${Date.now()}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    }).save();
});

// Close modal
closeBtn.addEventListener('click', () => {
    receiptModal.style.display = 'none';
});
