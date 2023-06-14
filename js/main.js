const div = document.querySelector(".posters");

const promise = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");

promise
  .then((response) => response.json())
  .then(({ Search }) => {
    for (let i = 0; i < Search.length; i++) {
      div.innerHTML += `<div class="container">
      <img
        src="${Search[i].Poster}"
        alt=""
      />
      <h5>${Search[i].Title}</h5>
      <span>${Search[i].Year}</span>
    </div>`;
    }
  });
