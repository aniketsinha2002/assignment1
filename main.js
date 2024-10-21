document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("demo-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
      const inputs = this.querySelectorAll("input");
      const successMessage = this.querySelector(".success-message");
      const errorMessageDivs = this.querySelectorAll(".error-message");
      errorMessageDivs.forEach((div) => (div.style.display = "none"));
      inputs.forEach((input) => {
        input.classList.remove("input-error");
      });

      inputs.forEach((input) => {
        if (!input.checkValidity()) {
          input.classList.add("input-error");
          isValid = false;
          input.nextElementSibling.style.display = "block";
        }
      });

      if (isValid) {
        successMessage.style.display = "block";
        this.reset();
      } else {
        successMessage.style.display = "none";
      }
    });
});
