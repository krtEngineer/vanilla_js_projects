const container = document.querySelector(".container");

const displayFollowers = (followers) => {
  const newFollowers = followers
    .map((follower) => {
      const { avatar_url, login, html_url } = follower;
      return `<article class="card">
            <img src="${avatar_url}" alt="person" />
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">view profile</a>
          </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default displayFollowers;
