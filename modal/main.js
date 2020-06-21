const toggleButton = document.getElementById("toggle-button");
const menuBar = document.getElementById("menu-bar");
const signUpButton = document.getElementById("signup-button");
const modalWrapper = document.getElementById("modal-wrapper");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

document.body.addEventListener("click", (e) => {
  if (!menuBar.contains(e.target) && !toggleButton.contains(e.target)) {
    document.body.classList.remove("show-nav");
  }
  if (e.target != signUpButton && !modalWrapper.classList.contains("hidden")) {
    modalWrapper.classList.add("hidden");
  }
});

signUpButton.addEventListener("click", () => {
  modalWrapper.classList.toggle("hidden");
});
