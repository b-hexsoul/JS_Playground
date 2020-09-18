// DOM - Document Object Model
const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
  {
    title: "Dream trip",
    body: "I would like to go to Japan",
  },
];

const filters = {
  searchText: "",
};

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  //clearing an element
  document.querySelector("#notes").innerHTML = "";

  //filtering the notes
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement("p");
    noteEl.textContent = note.title;
    document.querySelector("#notes").appendChild(noteEl);
  });
};

renderNotes(notes, filters);
// IMPORTANT - using input text field and grab that text value **filtering notes based on text
// using the "input" event allows us to access in realtime
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#create-note").addEventListener("click", function (e) {
  e.target.textContent = "The button was clicked";
});

document.querySelector("#remove-all").addEventListener("click", function (e) {
  document.querySelectorAll(".note").forEach(function (note) {
    note.remove();
  });
});

// Query and remove
// const p = document.querySelector("p");
// console.log(p);
// p.remove();

// Query all and remove
// const ps = document.querySelectorAll("p");
// ps.forEach(function (p) {
//   p.textContent = "******";
//   // console.log(p.textContent);
//   // p.remove();
// });

// Adding a new element
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph from JavaScript";
// document.querySelector("body").appendChild(newParagraph);
