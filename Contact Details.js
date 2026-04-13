const saveBtn = document.getElementById('saveContactBtn');

saveBtn.addEventListener('click', () => {
  // Collect all input values
  const studentPhone = document.getElementById('studentPhone').value;
  const studentEmail = document.getElementById('studentEmail').value;
  const altPhone = document.getElementById('altPhone').value;
  const fatherName = document.getElementById('fatherName').value;
  const fatherPhone = document.getElementById('fatherPhone').value;
  const motherName = document.getElementById('motherName').value;
  const motherPhone = document.getElementById('motherPhone').value;
  const guardianEmail = document.getElementById('guardianEmail').value;
  const emergencyContact = document.getElementById('emergencyContact').value;
  const currentAddress = document.getElementById('currentAddress').value;
  const permanentAddress = document.getElementById('permanentAddress').value;
  const cityState = document.getElementById('cityState').value;
  const smsAlerts = document.getElementById('smsAlerts').checked;
  const emailAlerts = document.getElementById('emailAlerts').checked;
  const preferredContact = document.getElementById('preferredContact').value;
  const linkedin = document.getElementById('linkedin').value;
  const altEmail = document.getElementById('altEmail').value;

  // Simple validation example
  if(!studentPhone || !studentEmail) {
    alert('Please fill out your phone and email!');
    return;
  }

  // Mock save action
  alert('✅ Contact details saved successfully!');
});


