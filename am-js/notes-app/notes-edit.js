'use strict'

const noteTitleEl = document.getElementById('note-title')
const noteBodyEl = document.getElementById('note-body')
const removeBtn = document.getElementById('removeBtn')
const saveBtn = document.getElementById('saveBtn');
const editedEl = document.getElementById('lastEdited');

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);

if (!note) {
  location.assign('./index.html')
}

noteTitleEl.value = note.title;
noteBodyEl.value = note.body;
editedEl.textContent = generateLastEdited(note.updatedAt);

noteTitleEl.addEventListener('input', function () {
  note.title = noteTitleEl.value
  note.updatedAt = moment().valueOf();
  editedEl.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
})

noteBodyEl.addEventListener('input', function () {
  note.body = noteBodyEl.value
  note.updatedAt = moment().valueOf();
  editedEl.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
})

removeBtn.addEventListener('click', function () {
  removeNote(note.id)
  saveNotes(notes);
  location.assign('./index.html')
})

saveBtn.addEventListener('click', function () {
  saveNotes(notes);
  location.assign('./index.html')
})

// If there are duplicate tabs open and local storage is updated on one. 
window.addEventListener('storage', function(e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    note = notes.find(note => note.id === noteId);

    if (!note) {
      location.assign('./index.html')
    }
    
    noteTitleEl.value = note.title;
    noteBodyEl.value = note.body;
    editedEl.textContent = generateLastEdited(note.updatedAt);
  }
})