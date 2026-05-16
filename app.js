// Check the real time and date
function updateDateTime() {
  const date = new Date();
  document.querySelector("#time").innerHTML = date.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

// form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault(); // Stop form from submitting

  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let message = document.getElementById("message").value;

  // Simple validation
  if(name == "" || email == "" || phone == "" || address == "" || message == "") {
    alert("Please fill all fields");
  } else {
    document.getElementById("contactForm").reset();
    alert("Form submitted successfully!");
  }

});
