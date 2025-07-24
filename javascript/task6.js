document.getElementById("Form").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const contact = document.getElementById("Contact").value.trim();
  const email = document.getElementById("Emailid").value.trim();
  const location = document.getElementById("loc").value.trim();

  const fnameErr = document.getElementById("fnameerror");
  const lnameErr = document.getElementById("lnameerror");
  const contactErr = document.getElementById("conerror");
  const emailErr = document.getElementById("emailerror");
  const locErr = document.getElementById("locerror");

  fnameErr.textContent = "";
  lnameErr.textContent = "";
  contactErr.textContent = "";
  emailErr.textContent = "";
  locErr.textContent = "";

  let isValid = true;


  if (!/^[A-Za-z]{2,}$/.test(fname)) {
    fnameErr.textContent = "First name must be at least 2 alphabets.";
    isValid = false;
  }


  if (!/^[A-Za-z]{2,}$/.test(lname)) {
    lnameErr.textContent = "Last name must be at least 2 alphabets.";
    isValid = false;
  }

  if (!/^[0-9]{10}$/.test(contact)) {
    contactErr.textContent = "Enter a valid 10-digit number.";
    isValid = false;
  }

  
  const emailPattern = /^[^@ ]+@[^@ ]+\.[^@ ]+$/;
  if (!emailPattern.test(email)) {
    emailErr.textContent = "Enter a valid email address.";
    isValid = false;
  }


  if (location.length < 2) {
    locErr.textContent = "Location cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("Form").reset();
  }
});
