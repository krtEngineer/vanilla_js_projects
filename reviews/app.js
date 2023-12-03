//get reviewer details form HTML document
let reviewerPhoto = document.querySelector("#reviewer-img");
let reviewerName = document.querySelector("#reviewer-name");
let reviewerPosition = document.querySelector("#reviewer-position");

//get button details
let btns = document.querySelectorAll(".ctrl-btn");
let reviewText = document.querySelector(".review-text");
let randomBtn = document.querySelector(".random-btn");

//reviewer data lists
let photos = [
  "./images/person-img.jpg",
  "./images/person-img-1.jpg",
  "./images/person-img-2.jpg",
];

let names = ["Kushagra Tiwari", "Harry Dissouza", "Umalion Sinister"];

let positions = [
  "Software Developer",
  "Solutions Architect",
  "Engineering Manager",
];

let reviews = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            omnis! Eius soluta delectus esse laboriosam? Consequatur eos omnis
            accusantium quisquam nihil eum praesentium odio, sit quasi dolorum
            nulla consequuntur iure!`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            provident quam officiis optio quisquam illum cumque distinctio velit
            recusandae aut earum minima, vel sequi architecto excepturi laborum,
            est ullam? Repellat, expedita eos?`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            minima.`,
];

let reviewer = {
  photo: photos[0],
  name: names[0],
  position: positions[0],
  review: reviews[0],
};

let buttons = {
  next: "next-btn",
  previous: "prev-btn",
};

//add event listeners
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btnName = e.currentTarget.classList[0];
    let newIndex = getNewIndex(btnName);
    setReviewer(newIndex);
  });
});

function getNewIndex(button) {
  let currIndex = getCurrIndex(reviewerName.textContent);
  return getIndexInRange(button, currIndex);
}

function getIndexInRange(button, currIndex) {
  let nextIndex = button === buttons.next ? currIndex + 1 : currIndex - 1;
  if (nextIndex < 0) {
    return (nextIndex + names.length) % names.length;
  } else if (nextIndex >= names.length) {
    return nextIndex % names.length;
  } else {
    return nextIndex;
  }
}

function getCurrIndex(name) {
  return names.indexOf(name);
}

function setReviewerInDoc() {
  reviewerPhoto.src = reviewer.photo;
  reviewerName.textContent = reviewer.name;
  reviewerPosition.textContent = reviewer.position;
  reviewText.children[0].textContent = reviewer.review;
}

function setReviewerObj(newIndex) {
  reviewer.photo = photos[newIndex];
  reviewer.name = names[newIndex];
  reviewer.position = positions[newIndex];
  reviewer.review = reviews[newIndex];
}

function setReviewer(newIndex) {
  setReviewerObj(newIndex);
  setReviewerInDoc();
}

function getRandomIndex() {
  return Math.floor(Math.random() * names.length);
}

randomBtn.addEventListener("click", function (e) {
  let newIndex = getRandomIndex();
  setReviewer(newIndex);
});
