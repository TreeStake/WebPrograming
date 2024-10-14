import {getAllMovies, postMovie, editMovie, deleteMovie, searchFilms} from "./api.js"

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
  <button type="button" class="delete""></button>
</li>`;

let currentFilms = []

const refetchMovies = async () => {
  const allMovies = await getAllMovies();
  currentFilms = allMovies;

  renderItemsList(currentFilms)
}

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

findButton.addEventListener("click", async () => {
  if(findInput.value){
    const foundFilms = await searchFilms(findInput.value)
    console.log(foundFilms)
    renderItemsList(foundFilms);
  } 
  else{
    refetchMovies();
  };
});

cancelFindButton.addEventListener("click", () => {
  refetchMovies()

  findInput.value = "";
});

let isSorted = false;

sortButton.addEventListener("click", async () => {
  if(isSorted){
    isSorted = false
    const foundFilms = await searchFilms(findInput.value)
    renderItemsList(foundFilms);
  }
  else{
    const sortedFilms = await searchFilms(findInput.value, 'reviwes')
    isSorted = true
    renderItemsList(sortedFilms)
  }
});

countButton.addEventListener("click", () => {
  const total = currentFilms.reduce((acc, {duration}) => acc += duration, 0)
  resultParagraph.textContent = total
});

let parentId = 0;

filmsContainer.addEventListener("click", (event) => {
  if(event.target.classList.contains("edit")){
    parentId = event.target.closest("li").id
    modalEdit.classList.add("show-modal")
  }else if(event.target.classList.contains("delete")){
    parentId = event.target.closest("li").id
    const updatedFilms = currentFilms.filter(movie => movie.id !== Number(parentId));
    renderItemsList(updatedFilms)
    deleteMovie(parentId)
  }
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
  const newReviews = Number(formEdit.querySelector(".review-input").value);

  for (const film of currentFilms){
    if (film.id == parentId){
      film.title = newName;
      film.duration = newDuration;
      film.imdbReviews = newReviews;
      editMovie(film.id, {id: film.id, title: newName, duration: newDuration, reviews: newReviews})
      break
    }
  }
  
  modalEdit.classList.remove("show-modal");
  formEdit.reset()

  renderItemsList(currentFilms);
});

const newCard = ({id, name, duration, reviews}) => {
  currentFilms.push({id, title: name, duration, imdbReviews: reviews})
  postMovie({id, title: name, duration, imdbReviews: reviews})
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

formAdd.addEventListener("submit", async (event) => {
  event.preventDefault()

  const newName = formAdd.querySelector(".film-name-input").value;
  const newDuration = Number(formAdd.querySelector(".duration-input").value);
  const newReviews = Number(formAdd.querySelector(".review-input").value);

  const notInMovies = async () => {
    const allFilms = await getAllMovies()
    for (let element of allFilms){
      const isDuplicate = element.title.toLowerCase().trim() === newName.toLowerCase().trim()
      if (isDuplicate){
        return true
      }
    }
    return false
  }

  if (!await notInMovies()){
    newCard({id: nextId, name: newName, duration: newDuration, reviews: newReviews})
    nextId += 1

    modalAdd.classList.remove("show-modal")
    formAdd.reset()
  }else{
    window.alert("You can`t add dublicate")
  }
})

refetchMovies()