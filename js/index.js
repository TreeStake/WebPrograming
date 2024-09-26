import { movies } from "./movies.js";

const sortButton = document.getElementById("sort-btn");
const countButton = document.getElementById("count-btn");
const findButton = document.getElementById("search-btn");
const cancelFindButton = document.getElementById("cancel-search-btn");
const findInput = document.getElementById("search-input");
const modalEdit = document.querySelector(".js-edit");
const modalAdd = document.querySelector(".js-add")
const formEdit = document.querySelector(".js-edit-form");
const formAdd = document.querySelector(".js-add-form")
const addButton = document.querySelector(".add-card")

const filmsContainer = document.getElementById("films-list");
const resultParagraph = document.querySelector('.result');

const itemTemplate = ({ id, title, duration, imdbReviews }) => `
<li id="${id}" class="film">
  <img
    src="./images/movie-clapper-open.png"
    alt="film">
  <div class="film-body">
    <h3 class="film-title">${title}</h5>
    <p class="film-time">Minutes: ${duration}</p>
    <p class="film-reviews">Reviews: ${imdbReviews}</p>
  </div>
  <button type="button" class="edit""></button>
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

let beforeFind = []

findButton.addEventListener("click", () => {
  if(findInput.value){
    const foundFilms = currentFilms.filter(
      (film) => film.title.toLowerCase().search(findInput.value.toLowerCase().trim()) !== -1
    );
    beforeFind = [...currentFilms]
    renderItemsList(foundFilms);
  } 
  else{
    renderItemsList(beforeFind);
  };
  
});

cancelFindButton.addEventListener("click", () => {
  renderItemsList(movies)

  findInput.value = "";
});

let isSorted = false;
let beforeSortArray = [...currentFilms]

sortButton.addEventListener("click", () => {
  if(isSorted){
    isSorted = false
    renderItemsList(beforeSortArray)
  }
  else{
    const sortedFilms = [...currentFilms].sort((a, b) => a.imdbReviews - b.imdbReviews)
    isSorted = true
    beforeSortArray = [...currentFilms]
    renderItemsList(sortedFilms)
  }
});

countButton.addEventListener("click", () => {
  const total = currentFilms.reduce((acc, {duration}) => acc += duration, 0)
  console.log(total)
  resultParagraph.textContent = total
});

let parentId = 0;

filmsContainer.addEventListener("click", (event) => {
  if(!event.target.classList.contains("edit")){
    return
  }
  parentId = event.target.closest("li").id
  modalEdit.classList.add("show-modal")
})

modalEdit.addEventListener("click", (event) => {
  if(event.target === event.currentTarget){
    modalEdit.classList.remove("show-modal")
    formEdit.reset()
  }
});

formEdit.addEventListener("submit", (event) => {
  event.preventDefault();

  const newName = formEdit.querySelector(".film-name-input").value;
  const newDuration = Number(formEdit.querySelector(".duration-input").value);
  const newReviews = formEdit.querySelector(".review-input").value;

  for (const film of currentFilms){
    console.log(film)
    if (film.id == parentId){
      film.title = newName;
      film.duration = newDuration;
      film.imdbReviews = newReviews;
      break
    }
  }
  
  modalEdit.classList.remove("show-modal");
  formEdit.reset()

  renderItemsList(currentFilms);
});

const newCard = ({id, name, duration, reviews}) => {
  currentFilms.push({id, title: name, duration, imdbReviews: reviews})
  movies.push({id, title: name, duration, imdbReviews: reviews})
  renderItemsList(currentFilms)
};

addButton.addEventListener("click", () => {
  modalAdd.classList.add("show-modal")
});

modalAdd.addEventListener("click", (event) => {
  if(event.target === event.currentTarget){
    modalAdd.classList.remove("show-modal")
    formAdd.reset()
  }
});

let nextId = 11

formAdd.addEventListener("submit", (event) => {
  event.preventDefault()

  const newName = formAdd.querySelector(".film-name-input").value;
  const newDuration = Number(formAdd.querySelector(".duration-input").value);
  const newReviews = formAdd.querySelector(".review-input").value;

  newCard({id: nextId, name: newName, duration: newDuration, reviews: newReviews})
  nextId += 1

  modalAdd.classList.remove("show-modal")
  formAdd.reset()
})