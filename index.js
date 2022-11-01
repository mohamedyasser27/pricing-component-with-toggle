let togglePeriod = document.querySelector(".toggle");
let togglePeriodBtn = document.querySelector(".toggleBtn");
let year = Array.from(document.querySelectorAll(".year"));
let month = Array.from(document.querySelectorAll(".month"));

togglePeriod.addEventListener("click", function (event) {
  togglePeriodBtn.classList.toggle("annual");
  year.forEach((ele) => {
    ele.classList.toggle("invisible");
  });
  month.forEach((ele) => {
    ele.classList.toggle("invisible");
  });
});
