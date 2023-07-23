const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const state = document.getElementById('state').value;
  const country = document.getElementById("country").value;
  
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }


  const newRow = table.insertRow(); 
  const firstNameCol = newRow.insertCell(); 
  const lastNameCol = newRow.insertCell();
  const addressCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell();
  const genderCol = newRow.insertCell(); 
  const foodCol = newRow.insertCell(); 
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();

  firstNameCol.textContent = firstName;
  lastNameCol.textContent = lastName;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent = state;
  countryCol.textContent = country;

  form.reset();


});
