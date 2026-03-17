// Select form and message
const form = document.querySelector(".contact__f");
const msg = document.querySelector(".form__msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".contact-f__input");
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const message = document.querySelector(".contact-f__textarea").value.trim();

    // Empty validation
    if (name === "" || email === "" || message === "") {
        msg.textContent = "Please fill all fields!";
        msg.style.color = "red";
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        msg.textContent = "Enter valid email!";
        msg.style.color = "red";
        return;
    }

   
    form.reset();
});