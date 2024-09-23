import { movies } from "./movies.js";

const sortButton = document.getElementById("sort-btn");
const countButton = document.getElementById("count-btn");
const findButton = document.getElementById("search-btn");
const cancelFindButton = document.getElementById("cancel-search-btn");
const findInput = document.getElementById("search-input");

const filmsContainer = document.getElementById("films-list");
const resultParagraph = document.querySelector('.result');

const itemTemplate = ({ id, title, duration, imdbReviews }) => `
<li id="${id}" class="film">
  <img
    src="./movie-clapper-open.png"
    alt="film">
  <div class="film-body">
    <h3 class="film-title">${title}</h5>
    <p class="film-time">Minutes: ${duration}</p>
    <p class="film-reviews">Reviews: ${imdbReviews}</p>
  </div>
</li>`;

let currentFilms = []

const renderItemsList = (items) => {
    filmsContainer.innerHTML = "";
  
    for (const item of items) {
      addItemToPage(item);
    }

    currentFilms = items
};

const addItemToPage = ({ id, title, duration, imdbReviews }) => {
    filmsContainer.insertAdjacentHTML(
      "afterbegin",
      itemTemplate({ id, title, duration, imdbReviews })
    );
};

renderItemsList(movies)

findButton.addEventListener("click", () => {
  const foundFilms = movies.filter(
    (film) => film.title.toLowerCase().search(findInput.value.toLowerCase()) !== -1
  );

  renderItemsList(foundFilms);
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(movies);

  findInput.value = "";
});

let isSorted = false;

sortButton.addEventListener("click", () => {
  if(isSorted){
    isSorted = false
    renderItemsList(movies)
  }
  else{
    const sortedFilms = [...movies].sort((a, b) => a.imdbReviews - b.imdbReviews)
    isSorted = true
    renderItemsList(sortedFilms)
  }
});

countButton.addEventListener("click", () => {
  const total = currentFilms.reduce((acc, {duration}) => acc += duration, 0)
  console.log(total)
  resultParagraph.textContent = total
})