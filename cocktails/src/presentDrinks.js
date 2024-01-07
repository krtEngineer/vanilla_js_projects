import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
