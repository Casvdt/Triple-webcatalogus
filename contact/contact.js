const signupForm = document.querySelector(".signup-form");
const emailInput = document.querySelector(".email");
const tekstInput = document.querySelector(".tekst");
const errorMessage = document.createElement("p");
const successMessage = document.createElement("p");
errorMessage.classList.add("error-message");
successMessage.classList.add("success-message");
errorMessage.textContent = "Empty input field!";
successMessage.textContent = "Email has been sent!";
signupForm.appendChild(errorMessage);
signupForm.appendChild(successMessage);
errorMessage.style.display = "none";
successMessage.style.display = "none";

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    const tekst = tekstInput.value.trim();

    if (!email || !tekst) {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
    } else {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";

        console.log("Submitting email:", email);
        console.log("Submitting tekst:", tekst);

        emailInput.value = "";
        tekstInput.value = "";
    }
});