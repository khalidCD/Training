
document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("form");



    
    const customerID = document.getElementById("customer-id");
    const password = document.getElementById("password");

  
    const customerError = document.querySelector(".cust-id-error");
    const passwordError = document.querySelector(".cust-pass-error");

  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      let isValid = true;

      customerError.style.display = "none";
      passwordError.style.display = "none";

      if (customerID.value.trim() === "") {
        customerError.textContent = "Enter the valid Cust_ID";
        customerError.style.display = "block";
        isValid = false;
      }
      const passValue = password.value.trim();
      if (passValue === "") {
        passwordError.textContent = "Enter the valid Password";
        passwordError.style.display = "block";
        isValid = false;
      } else if (passValue.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordError.style.display = "block";
        isValid = false;
      }

      if (isValid) {
       
        localStorage.setItem("cam", customerID.value.trim());
       
        window.location.href = "home.html";
      }
    });
  }
);
