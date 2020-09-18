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

document.querySelector("#create-note").addEventListener("click", function (e) {
  console.log(e);
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
