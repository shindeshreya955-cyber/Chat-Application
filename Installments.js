// --- sample installment data
const installments = [
  { no: 1, amount: 15000, due: '10-Jul-2025', status: 'paid', paidOn: '10-Jul-2025', txn: 'TXN87421' },
  { no: 2, amount: 15000, due: '15-Aug-2025', status: 'paid', paidOn: '15-Aug-2025', txn: 'TXN99214' },
  { no: 3, amount: 15000, due: '25-Oct-2025', status: 'upcoming', paidOn: null, txn: null },
  { no: 4, amount: 15000, due: '25-Dec-2025', status: 'pending', paidOn: null, txn: null },
];

// DOM refs
const totalInstEl = document.getElementById('totalInst');
const paidInstEl = document.getElementById('paidInst');
const pendingInstEl = document.getElementById('pendingInst');
const nextDueEl = document.getElementById('nextDue');
const progressBar = document.getElementById('progressBar');
const progressPercentEl = document.getElementById('progressPercent');
const timelineEl = document.getElementById('timeline');
const tableBody = document.querySelector('#instTable tbody');
const daysLeftEl = document.getElementById('daysLeft');

const receiptModal = document.getElementById('receiptsModal');
const receiptsList = document.getElementById('receiptsList');

// utility
function calcStats(data){
  const total = data.length;
  const paid = data.filter(i=>i.status==='paid').length;
  const pending = total - paid;
  const next = data.find(i=>i.status === 'upcoming') || data.find(i=>i.status==='pending');
  return { total, paid, pending, next };
}

// populate UI
function renderOverview(){
  const s = calcStats(installments);
  totalInstEl.textContent = s.total;
  paidInstEl.textContent = s.paid;
  pendingInstEl.textContent = s.pending;
  nextDueEl.textContent = s.next ? s.next.due : '—';
  document.getElementById('totalInst').parentElement.classList.toggle('glow', s.paid >= Math.ceil(s.total/2));
  // progress
  const paidAmount = installments.filter(i=>i.status==='paid').reduce((a,b)=>a+b.amount,0);
  const totalAmount = installments.reduce((a,b)=>a+b.amount,0);
  const percent = Math.round((paidAmount / totalAmount) * 100);
  progressPercentEl.textContent = percent + '%';
  setTimeout(()=> progressBar.style.width = percent + '%', 300);
  // countdown (to next)
  if(s.next){
    const dueDate = new Date(s.next.due);
    const today = new Date();
    const diffDays = Math.max(0, Math.ceil((dueDate - today) / (1000*60*60*24)));
    daysLeftEl.textContent = diffDays;
  }
}

// render timeline
function renderTimeline(){
  timelineEl.innerHTML='';
  installments.forEach((it,idx)=>{
    const div = document.createElement('div');
    div.className = 'timeline-item ' + (it.status);
    div.style.animationDelay = `${idx * 0.08}s`;
    div.innerHTML = `<h4>Installment ${it.no} — ₹${it.amount.toLocaleString()}</h4>
                     <p>Due: ${it.due}</p>
                     <p>Status: ${it.status === 'paid' ? '✅ Paid on ' + it.paidOn : it.status === 'upcoming' ? '🔔 Upcoming' : '❌ Pending'}</p>`;
    timelineEl.appendChild(div);
  });
}

// render table
function renderTable(){
  tableBody.innerHTML = '';
  installments.forEach(it=>{
    const tr = document.createElement('tr');
    const action = (it.status === 'paid')
      ? `<button class="pdf-link" data-txn="${it.txn}">Receipt</button>`
      : `<button class="pay-btn" data-no="${it.no}">Pay Now</button>`;
    tr.innerHTML = `<td>${it.no}</td><td>₹${it.amount.toLocaleString()}</td><td>${it.due}</td><td>${it.status}</td><td>${action}</td>`;
    tableBody.appendChild(tr);
  });
}

// create chart
function createChart(){
  const ctx = document.getElementById('installmentChart').getContext('2d');
  const paidAmount = installments.filter(i=>i.status==='paid').reduce((a,b)=>a+b.amount,0);
  const totalAmount = installments.reduce((a,b)=>a+b.amount,0);
  const pendingAmount = totalAmount - paidAmount;
  new Chart(ctx, {
    type:'doughnut',
    data:{
      labels:['Paid','Pending'],
      datasets:[{data:[paidAmount,pendingAmount],backgroundColor:['#ffb300','#003d99'],borderWidth:2}]
    },
    options:{
      maintainAspectRatio:true,
      plugins:{legend:{display:false}}
    }
  });
}

// receipts modal population
function openReceipts(){
  receiptsList.innerHTML='';
  const paid = installments.filter(i=>i.status==='paid');
  if(!paid.length){
    receiptsList.innerHTML='<p>No receipts available.</p>';
  } else {
    paid.forEach(r=>{
      const div = document.createElement('div');
      div.className='receipt-row';
      div.innerHTML = `<div><strong>Txn:</strong> ${r.txn}</div>
                       <div><strong>Date:</strong> ${r.paidOn}</div>
                       <div><strong>Amount:</strong> ₹${r.amount.toLocaleString()}</div>
                       <div><button class="download-one" data-txn="${r.txn}" data-date="${r.paidOn}" data-amount="${r.amount}">Download PDF</button></div>`;
      receiptsList.appendChild(div);
    });
  }
  receiptModal.style.display='flex';
}

// jsPDF single receipt generator
async function generateReceiptPDF(txn, date, amount){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'pt', format:'a4'});
  doc.setFontSize(20);
  doc.setTextColor('#003d99');
  doc.text('NKOCET College', 40, 60);
  doc.setFontSize(14);
  doc.setTextColor('#333');
  doc.text(`Receipt: ${txn}`, 40, 100);
  doc.text(`Date: ${date}`, 40, 125);
  doc.text(`Amount: ₹${Number(amount).toLocaleString()}`, 40, 150);
  doc.text('Payment Mode: UPI / Card / NetBanking', 40, 180);
  doc.setFontSize(12);
  doc.text('Thank you for your payment.', 40, 220);
  doc.save(`receipt_${txn}.pdf`);
}

// download schedule PDF (simple)
async function downloadSchedulePDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Installment Plan - NKOCET', 40, 40);
  let y = 80;
  installments.forEach(it=>{
    doc.setFontSize(12);
    doc.text(`Installment ${it.no} — Amount: ₹${it.amount} — Due: ${it.due} — Status: ${it.status}`, 40, y);
    y += 18;
  });
  doc.save('installment_plan.pdf');
}

// events
document.getElementById('openReceipts').addEventListener('click', ()=>{
  openReceipts();
});
document.getElementById('closeReceipts').addEventListener('click', ()=> receiptModal.style.display='none');
document.getElementById('downloadAllPDF').addEventListener('click', downloadSchedulePDF);
document.getElementById('printReceipts').addEventListener('click', ()=> window.print());
document.getElementById('downloadSchedule').addEventListener('click', downloadSchedulePDF);

// receipt downloads (listen in modal)
receiptsList.addEventListener('click', e=>{
  const btn = e.target.closest('.download-one');
  if(!btn) return;
  const txn = btn.dataset.txn, date = btn.dataset.date, amount = btn.dataset.amount;
  generateReceiptPDF(txn, date, amount);
});

// pay now buttons (simulate payment)
tableBody.addEventListener('click', e=>{
  const payBtn = e.target.closest('.pay-btn');
  if(!payBtn) return;
  const no = Number(payBtn.dataset.no);
  // simple simulation: mark as paid and generate txn
  const inst = installments.find(i=>i.no===no);
  inst.status='paid';
  inst.paidOn = new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  inst.txn = `TXN${Math.floor(Math.random()*90000)+10000}`;
  // re-render
  renderOverview(); renderTable(); renderTimeline(); createChart();
  openReceipts();
});

// apply scholarship reduces amounts
document.getElementById('applyScholar').addEventListener('click', ()=>{
  const pct = Number(document.getElementById('scholarshipInput').value) || 0;
  if(pct < 0 || pct > 100) return alert('Enter 0-100');
  installments.forEach(it=>{
    // base amount before scholarship assumed 15000
    const base = 15000;
    const reduced = Math.round(base * (1 - pct/100));
    it.amount = reduced;
  });
  renderOverview(); renderTable(); renderTimeline(); createChart();
});

// delegate pdf link clicks in table (for existing receipts)
tableBody.addEventListener('click', e=>{
  const pdfBtn = e.target.closest('.pdf-link');
  if(!pdfBtn) return;
  // find txn by row index
  const row = pdfBtn.closest('tr'); const idx = Array.from(tableBody.rows).indexOf(row);
  const inst = installments[idx];
  if(inst && inst.txn) generateReceiptPDF(inst.txn, inst.paidOn, inst.amount);
});

// reminder toggle feedback
document.getElementById('reminderToggle').addEventListener('change', (e)=>{
  if(e.target.checked) alert('✅ Reminders ON');
  else alert('🔕 Reminders OFF');
});

// initial render calls
renderOverview();
renderTimeline();
renderTable();
createChart();
