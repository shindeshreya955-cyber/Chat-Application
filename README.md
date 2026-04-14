# Chat-Application
Built a platform with real-time chat and a chatbot to help students access information like fees,caste details,and hostel queries easily.



🚀** NKOCET Smart Assistant**

NKOCET Smart Assistant is a web-based chatbot system designed for college students to get instant information about fees, scholarships, hostel, exams, and more.

It simplifies communication between students and administration using a structured chatbot interface.





❗ **The Problem**
College students often face issues like:

📄 Information scattered across notice boards, WhatsApp, and office visits
⏳ Delays in getting answers to simple queries
🔁 Repeated questions to staff
📞 Dependency on manual communication





💡 **The Solution**
NKOCET Smart Assistant solves this by:

1. Providing instant chatbot-based responses
2. Organizing FAQs like fees, hostel, exams in one place
3. Allowing students to submit queries via form
4. Storing queries in database for admin review
5. Giving a clean and interactive UI




✨ **Features**

| Feature         | Description                                 |
| --------------- | ------------------------------------------- |
| 💬 Chatbot UI   | Interactive chatbot with predefined options |
| 🧾 Query Form   | Students can submit detailed queries        |
| 🏨 Hostel Info  | Boys & Girls hostel details with UI         |
| 💰 Fee Details  | Structured fee and payment info             |
| 📊 Progress UI  | Fee progress bar and charts                 |
| 📩 Contact Form | Direct communication with college           |
| 🎨 Modern UI    | Blue + Gold animated theme                  |
| 📱 Responsive   | Works on mobile and desktop                 |






🛠️ **Tech Stack**
| Layer    | Technology                         |
| -------- | ---------------------------------- |
| Frontend | HTML, CSS, JavaScript              |
| Styling  | Custom CSS (Animations, Gradients) |
| Backend  | PHP (XAMPP)                        |
| Database | MySQL                              |
| Server   | Apache (XAMPP)                     |





📁 ** Project Structure**
nkocet-chatbot/
│
├── index.html                # Landing page
├── chatbot.html              # Chatbot UI
├── contact.html              # Contact form
├── hostel.html               # Hostel info
│
├── css/
│   ├── style.css
│   ├── chatbot.css
│   └── hostel.css
│
├── js/
│   ├── chatbot.js
│   ├── contact.js
│   └── animations.js
│
├── backend/
│   ├── db.php                # Database connection
│   ├── submit_query.php      # Save student queries
│   └── fetch_response.php    # Chatbot responses
│
├── database/
│   └── nkocet.sql            # MySQL tables
│
└── assets/
    ├── images/
    └── icons/







⚙️ **Setup (XAMPP)**

**1. Install XAMPP**
Start Apache and MySQL

**2. Move Project**
C:\xampp\htdocs\nkocet-chatbot

**3. Create Database**
Go to **phpMyAdmin** → Create DB:
      -nkocet_db


**4. Create Table**
CREATE TABLE queries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  subject VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





🌐** Pages**

| Page            | Description       |
| --------------- | ----------------- |
| `/index.html`   | Landing Page      |
| `/chatbot.html` | Chatbot Assistant |
| `/contact.html` | Contact Form      |
| `/hostel.html`  | Hostel Details    |






📊 **Database Schema**
queries
- id
- name
- email
- subject
- message
- created_at




🚀 **Future Improvements**:
    🔐 Admin login panel
    🤖 AI-based chatbot (Gemini/OpenAI)
    📱 WhatsApp integration
    📊 Dashboard analytics
    📍 Live notifications



    
👩‍💻 **Team**
Built by students of NKOCET 🎓


📜** License**
This project is for academic use.


❤️ **Final Line**
NKOCET Smart Assistant — Making student support faster, smarter, and easier
   
