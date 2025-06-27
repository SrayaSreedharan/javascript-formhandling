document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('studentForm');
  const error = document.getElementById('error');
  const tableBody = document.getElementById('studentTableBody');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!name || !email || !age) {
      error.textContent = "All fields are required.";
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      error.textContent = "Enter a valid email.";
      return;
    }
    if (age < 5 || age > 100) {
      error.textContent = "Age must be between 5 and 100.";
      return;
    }
    error.textContent = '';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${age}</td>
    `;

    tableBody.appendChild(row);
    form.reset();
  });
});
