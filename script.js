const lis = document.querySelectorAll("li");
const searcher = document.querySelector("input");

function checkContains() {
  for (let i = 0; i < lis.length; i++) {
    let littleLis = lis[i].textContent.toUpperCase();
    let inputValue = searcher.value.toUpperCase();
    if (!littleLis.includes(inputValue)) {
      lis[i].classList.add("hide");
    } else {
      lis[i].classList.remove("hide");
    }
  }
}

searcher.addEventListener("keyup", checkContains);
