const buttonElement1 = document.getElementById("home-item");
const buttonElement2 = document.getElementById("skills-item");
const buttonElement3 = document.getElementById("contact-item");
buttonElement1.addEventListener("click", function () {
  buttonElement1.classList.add("click");
  buttonElement2.classList.remove("click");
  buttonElement3.classList.remove("click");
});

buttonElement2.addEventListener("click", function () {
  buttonElement2.classList.add("click");
  buttonElement1.classList.remove("click");
  buttonElement3.classList.remove("click");
});

buttonElement3.addEventListener("click", function () {
  buttonElement3.classList.add("click");
  buttonElement2.classList.remove("click");
  buttonElement1.classList.remove("click");
});
