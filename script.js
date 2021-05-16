const closeModal = document.querySelector(".closeModalIcon");
const modal = document.querySelector(".modal");
const bamboo = document.getElementById("bambooEdition");
const mahogany = document.getElementById("bambooEdition");
const black = document.getElementById("blackEdition");
const backProject = document.querySelector(".project-btn");
const selectbtn = document.querySelectorAll(".selectbtn");

closeModal.addEventListener("click", () => {
  modal.classList.add("display");
});

backProject.addEventListener("click", () => {
  modal.classList.remove("display");
});
