let btns = document.querySelectorAll(".btn");
let menuItems = document.querySelectorAll(".item");

let categories = {
  all: "all",
  breakfast: "breakfast",
  lunch: "lunch",
  shakes: "shakes",
};

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btnTxt = e.currentTarget.textContent;
    if (btnTxt === categories.all) {
      //show all items
      menuItems.forEach(function (item) {
        if (item.classList.contains("hide")) {
          item.classList.remove("hide");
        }
      });
    } else {
      //show category items
      menuItems.forEach(function (item) {
        item.classList.add("hide");
        if (item.classList[1] === btnTxt) {
          item.classList.remove("hide");
        }
      });
    }
  });
});
