// Get required elements
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const optionButtons = document.querySelectorAll(".chat-option");

// Predefined question-answer pairs
const responses = {
  "Fee Details 💰":
    "💰 <strong>NKOCET Fee Details:</strong><br> • Computer Science / IT: ₹1,15,000 per year<br> • Mechanical / Civil / Electrical: ₹1,05,000 per year<br> • Payment Mode: Online via ERP Portal or at the college office.<br> • Late Fees: ₹100 per day after the due date.",
  
  "Scholarship Information 🎓":
    "🎓 <strong>Scholarship Information:</strong><br> • <b>Government Scholarships:</b> EBC, SC/ST, Minority, and State Merit.<br> • Apply online via <a href='https://mahadbt.maharashtra.gov.in' target='_blank'>MahaDBT Portal</a>.<br> • Documents Required: Income Certificate, Bonafide Certificate, Marksheet, Aadhaar, Bank Passbook.<br> • Last Date: Usually in November each year.",
  
  "Hostel Accommodation 🏠":
    "🏠 <strong>Hostel Accommodation:</strong><br> • Separate Boys & Girls hostels with 24/7 security.<br> • Mess and Wi-Fi facilities available.<br> • Hostel Fees: ₹25,000 per year (including mess).<br> • Contact Warden Office for availability or queries.",
  
  "Exam Form Deadlines 🧾":
    "🧾 <strong>Exam Form Deadlines:</strong><br> • Mid-Sem Exam Form: August<br> • Final Exam Form: March<br> • Apply via College ERP Portal before the deadline.<br> • Late submission charges apply after the due date.",
  
  "Contact Administration 📞":
    "📞 <strong>Contact Administration:</strong><br> • Office Hours: 10:00 AM – 4:30 PM (Mon–Sat)<br> • Email: <a href='mailto:info@nkocet.ac.in'>info@nkocet.ac.in</a><br> • Phone: +91 217 231 5632<br> • Address: Nagesh Karajgi Orchid College Of Engineering And Technology, Solapur"
};

// Function to add messages to the chat window
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "bot" ? "bot-message" : "user-message");
  msg.innerHTML = text; // allows HTML (like <br> or <a>)
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to simulate typing delay
function botReply(userText) {
  const reply = responses[userText] || "🤖 Sorry, I don’t have that information yet. Please contact the admin office for assistance.";
  
  // Typing simulation
  const typing = document.createElement("div");
  typing.classList.add("bot-message", "typing");
  typing.textContent = "Assistant is typing...";
  chatWindow.appendChild(typing);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  setTimeout(() => {
    typing.remove();
    addMessage(reply, "bot");
  }, 1200);
}

// Handle Send Button
sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    addMessage(text, "user");
    userInput.value = "";
    botReply(text);
  }
});

// Handle Quick Option Buttons
optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const question = btn.dataset.reply;
    addMessage(question, "user");
    botReply(question);
  });
});

// Handle Enter Key Press
userInput.addEv
