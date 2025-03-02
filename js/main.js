function Lost(username, phone, description) {
  this.username = username;
  this.phone = phone;
  this.description = description;
}

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form fields
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const description = document.getElementById("description").value;

  // Check if all fields are filled out
  if (!name || !phone || !description) {
    alert("Please fill out all the fields.");
    return;
  }

  // Create a new Lost object
  const lostItem = new Lost(name, phone, description);

  // If all fields are filled out, you can proceed with form submission or other logic
  alert("Form submitted successfully!");

  // Get the first name
  const firstName = name.split(" ")[0];

  // Create a new div element
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `Thank you, ${firstName}. Someone will be calling you at ${lostItem.phone} about your ${lostItem.description} within one business day.`;

  // Append the new div to the container
  const container = document.getElementById("container");
  container.appendChild(messageDiv);

  // Clear the input boxes
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("description").value = "";
}
