let main = document.querySelector("main");
let form = document.querySelector("form");
let span = document.querySelector("span");
let input = document.getElementById("email");
let dismiss = document.getElementById("dismiss");
let successMessage = document.querySelector(".success-message");
let error = document.querySelector(".error");


function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    span.innerText = mail;
    main.style.display = "none";
    error.style.display = "none";
    successMessage.style.display = "block";
    input.value = "";
    return
  }
  error.style.display = "block";
  input.style.border = "1px solid hsl(4, 100%, 67%)";
  input.style.color = "hsl(4, 100%, 67%)";
  input.style.backgroundColor = "hsla(4, 100%, 67%, 0.1)";
}

form.onsubmit = (e) => {
    e.preventDefault();
    ValidateEmail(input.value);
}

dismiss.onclick = () => {
  main.style.display = "flex";
  successMessage.style.display = "none";
  error.style.display = "none";
  input.style.border = "revert";
  input.style.color = "initial";
  input.style.backgroundColor = "initial";
  input.focus();
}
