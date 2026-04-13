const academicForm = document.getElementById('academicForm');
const cardContainer = document.getElementById('academicCardContainer');

academicForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('studentName').value.trim();
  const department = document.getElementById('department').value.trim();
  const semester = document.getElementById('semester').value;
  const cgpa = document.getElementById('cgpa').value;

  // Create academic card
  const card = document.createElement('div');
  card.className = 'academic-card';
  card.innerHTML = `
    <h3>🎓 ${name}</h3>
    <p><strong>Department:</strong> ${department}</p>
    <p><strong>Semester:</strong> ${semester}</p>
    <p><strong>CGPA:</strong> ${cgpa}</p>
  `;

  cardContainer.appendChild(card);

  // Reset form
  academicForm.reset();
});
