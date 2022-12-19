let burger_btn = document.querySelector("#burger");
let menu = document.querySelector("#menu");
function menuSelect() {
  menu.classList.toggle("active");
  if (burger_btn.classList.contains("fa-bars"))
    burger_btn.classList.replace("fa-bars", "fa-times");
  else burger_btn.classList.replace("fa-times", "fa-bars");
  console.log("hello clicked");
}
