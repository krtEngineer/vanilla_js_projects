const url = `https://api.github.com/users/hkirat/followers?per_page=100`;

const fetchFollowers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchFollowers;
