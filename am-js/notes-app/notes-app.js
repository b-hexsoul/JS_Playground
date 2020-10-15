// DOM - Document Object Model
let notes = getSavedNotes();

const filters = {
  searchText: "",
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
  notes.push({
    id: id,
    title: '',
    body: ''
  })
  saveNotes(notes);
  location.assign(`./edit.html#${id}`)
});

// Using select dropdown
document.querySelector("#filter-by").addEventListener("change", function (e) {
  //Set value="" within the option in html.
  console.log(e.target.value);
});

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters)
  };
})

// if provided no arguments then it is current date in time. 
// Unix Epoch - January 1st 1970 00:00:00
// 0 
const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)
const date1 = new Date('January 19, 1990')
const date2 = new Date('October 2, 1986')

const timestamp1 = date1.getTime();
const timestamp2 = date2.getTime();

timestamp1 < timestamp2 ? console.log(timestamp1.toString()) : console.log(timestamp2.toString());



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
