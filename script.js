const closeModal = document.querySelector(".closeModalIcon");
const modal = document.querySelector(".modal");
const backProject = document.querySelector(".project-btn");
const selectbtn = document.querySelectorAll(".selectbtn");
const bookmarkIcon = document.querySelector(".bookmark-icon");
const checkboxToggle = document.querySelectorAll(".checkbox");
const pledgeEnter = document.querySelectorAll(".pledgeEnter");
const pledgeClick = document.querySelectorAll(".pledgeClick");

closeModal.addEventListener("click", () => {
  modal.classList.add("display");
});

backProject.addEventListener("click", () => {
  modal.classList.remove("display");
});

selectbtn.forEach((selectbtn) => {
  selectbtn.addEventListener("click", () => {
    modal.classList.remove("display");
  });
});
