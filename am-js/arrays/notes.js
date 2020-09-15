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
];
// // Searching Arrays
// // array.indexOf will return index of first matching value, will return -1 if not there.
// console.log(months.indexOf("Jan"));

// Objects are only equal if they are stored at the exact same location in memory...if they are the exact same object..
// array.findIndex()

const index = notes.findIndex(function (note, index) {
  console.log(note);
  return note.title === "Habits to work on";
});

console.log(index);
