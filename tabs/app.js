const tabBtns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const sectionParts = [tabBtns, contents];
let dataId = "history";

tabBtns.forEach(function (tabBtn) {
  tabBtn.addEventListener("click", function (e) {
    e.preventDefault();
    setDataId(tabBtn);
    changeSection();
  });
});

function setDataId(tabBtn) {
  dataId = getCurrDataId(tabBtn);
}

function getCurrDataId(div) {
  return div.attributes[1].nodeValue;
}

function changeSection() {
  sectionParts.forEach(function (sectionPart) {
    changeSectionPart(sectionPart);
  });
}

function changeSectionPart(sectionPart) {
  sectionPart.forEach(function (sectionPartChild) {
    activateDiv(sectionPartChild);
  });
}

function activateDiv(div) {
  if (!isDivClicked(div)) {
    if (isDivActive(div)) {
      div.classList.remove("active");
    }
  } else {
    if (!isDivActive(div)) {
      div.classList.add("active");
    }
  }
}

function isDivActive(div) {
  return div.classList.contains("active");
}

function isDivClicked(div) {
  return dataId === getCurrDataId(div);
}
