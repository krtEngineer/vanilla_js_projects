const numbers = [...document.querySelectorAll(".number")];

const updateCount = (item) => {
  const value = parseInt(item.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      item.textContent = `${value}+`;
      clearInterval(increaseCount);
    }
    item.textContent = `${initialValue}+`;
  }, 1);
};

numbers.forEach((item) => {
  updateCount(item);
});
