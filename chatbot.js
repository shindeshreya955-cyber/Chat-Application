const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatBody = document.getElementById('chatBody');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');

chatbotToggle.onclick = () => {
  chatbotContainer.style.display =
    chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
};

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

document.querySelectorAll('.option-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.getAttribute('data-msg');
    handleBotResponse(msg);
  });
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  appendMessage(text, 'user');
  userInput.value = '';
  setTimeout(() => handleBotResponse(text.toLowerCase()), 500);
}

function appendMessage(message, sender) {
  const div = document.createElement('div');
  div.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  div.textContent = message;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleBotResponse(input) {
  let response = "Sorry, I didn’t understand that. 🤔";

  if (input.includes('fee')) response = "💰 Total Fee: ₹60,000 | Pending: ₹10,000 | Due: 15 Nov 2025.";
  else if (input.includes('scholarship')) response = "🎓 Merit & Caste-based scholarships available. Check the Scholarship Section.";
  else if (input.includes('achievements')) response = "🏆 Visit the Achievements page for certificates and awards.";
  else if (input.includes('contact')) response = "📞 Contact: 0217-2250300 | Email: info@nkocet.edu.in";
  else if (input.includes('hostel')) response = "🏠 Hostel fees ₹35,000/year. Rooms available for Boys & Girls separately.";

  appendMessage(response, 'bot');
}
