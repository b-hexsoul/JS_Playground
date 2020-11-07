'use strict'

// DOM - Document Object Model
let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: 'byEdited',
};

renderNotes(notes, filters);

// IMPORTANT - using input text field and grab that text value **filtering notes based on text
// using the "input" event allows us to access in realtime
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#create-note").addEventListener("click", function (e) {
  let id = uuidv4()
  const timeStamp = moment().valueOf();
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp,  
  })
  saveNotes(notes);
  location.assign(`./edit.html#${id}`)
});

// Using select dropdown
document.querySelector("#filter-by").addEventListener("change", function (e) {
  //Set value="" within the option in html.
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters)
  };
})




/*





*/
// // Submit is the only event listener used with forms
// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   //first cancel default behavior of form - which is full browser refresh
//   e.preventDefault();
//   // accessing e.target gets us to the DOM element for the form - allows us to access the fields we set in the form
//   console.log(e.target.elements.firstName.value);
//   // once we do something with the value we can reset the form as below
//   e.target.elements.firstName.value = "";
// });

// // Using checkbox
// document.querySelector("#for-fun").addEventListener("change", function (e) {
//   // when using checkbox, e.target.checked returns a boolean value
//   console.log(e.target.checked);
// });
