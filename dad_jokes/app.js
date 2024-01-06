const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "krt",
      },
    });
    if (!response.ok) {
      throw new Error("Response is not OK.");
    }
    const data = await response.json();
    result.textContent = data.joke;
  } catch (err) {
    console.log(err.message);
    result.textContent = "There was an error... ";
  }
};
