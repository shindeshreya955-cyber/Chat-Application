const studentForm = document.getElementById('studentForm');
const profilesDiv = document.getElementById('profiles');

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const email = document.getElementById('email').value.trim();
  const department = document.getElementById('department').value.trim();
  const year = document.getElementById('year').value;

  // Create profile card
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.innerHTML = `
    <h3>🎓 ${name}</h3>
    <p><strong>Roll No:</strong> ${roll}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Department:</strong> ${department}</p>
    <p><strong>Year:</strong> ${year}</p>
  `;

  profilesDiv.appendChild(card);

  // Reset form
  studentForm.reset();
});

const form = document.getElementById('myForm'); // your form ID
const genderSelect = document.getElementById('Gender');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    const selectedGender = genderSelect.value;

    if (selectedGender === "") {
        alert("Please select your gender.");
    } else {
        console.log("Selected Gender:", selectedGender);
        alert("You selected: " + selectedGender);
        // You can use this value to save in profile or display elsewhere
    }
});

 // Create profile card
  const card = document.createElement('div');
  card.className = 'profile-card';
  card.innerHTML = `
    <img src="${imageURL}" alt="${name}">
    <h3>${name}</h3>
    <p><strong>Roll No:</strong> ${roll}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Department:</strong> ${department}</p>
    <p><strong>Year:</strong> ${year}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  profilesDiv.appendChild(card);

  // Reset form
  studentForm.reset();
});