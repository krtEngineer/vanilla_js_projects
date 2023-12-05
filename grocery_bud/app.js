let groceryItems = document.querySelector(".grocery-list");
let deleteBtns = document.querySelectorAll(".delete-btn");
let clearBtn = document.querySelector(".clear-btn").children[0];
let groceryInput = document.querySelector("#grocery_name");
let submitBtn = document.querySelector(".submitBtn");
let updateBtns = document.querySelectorAll(".edit-btn");

groceryInput.value = "";
groceryItems.replaceChildren();
toggleClrBtn();

let selectedGroceryItem;

deleteBtns.forEach(function (deleteBtn) {
  deleteBtn.addEventListener("click", deleteEventListener);
});

clearBtn.addEventListener("click", function (e) {
  groceryItems.replaceChildren();
  toggleClrBtn();
});

submitBtn.addEventListener("click", function (e) {
  let itemTitle = groceryInput.value;
  const id = new Date().getTime().toString();
  if (itemTitle !== "") {
    let itemHTML = ` 
          <h5>${itemTitle}</h5>
          <!-- grocery links -->
          <div class="grocery-links">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="123">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
    let newGroceryItem = document.createElement("div");
    newGroceryItem.classList.add("grocery-item");
    newGroceryItem.innerHTML = itemHTML;
    let newDeleteBtn = newGroceryItem.querySelector(".delete-btn");
    newDeleteBtn.addEventListener("click", deleteEventListener);

    let newUpdateBtn = newGroceryItem.querySelector(".edit-btn");
    newUpdateBtn.addEventListener("click", editEventListener);

    if (submitBtn.textContent === "submit") {
      groceryItems.appendChild(newGroceryItem);
    } else if (submitBtn.textContent === "update") {
      groceryItems.replaceChild(newGroceryItem, selectedGroceryItem);
      submitBtn.textContent = "submit";
    }
    groceryInput.value = "";
    toggleClrBtn();
  }
});

function deleteEventListener(e) {
  let groceryItem = e.currentTarget.parentElement.parentElement;
  groceryItems.removeChild(groceryItem);
  if (
    selectedGroceryItem.children[0].textContent ===
    groceryItem.children[0].textContent
  ) {
    groceryInput.value = "";
    submitBtn.textContent = "submit";
  }
  toggleClrBtn();
}

function editEventListener(e) {
  let groceryItem = e.currentTarget.parentElement.parentElement;
  groceryInput.value = groceryItem.children[0].textContent;
  submitBtn.textContent = "update";
  selectedGroceryItem = groceryItem;
  toggleClrBtn();
}

groceryInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    submitBtn.click();
  }
});

function toggleClrBtn() {
  if (groceryItems.childNodes.length === 0) {
    clearBtn.style.display = "none";
  } else {
    clearBtn.style.display = "flex";
  }
}
