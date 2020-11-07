const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 22,
    gender: 'Female',
    lookingfor: 'male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  },
  {
    name: 'George Washington',
    age: 55,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/42.jpg'
  },
  {
    name: 'Brenda Huang',
    age: 33,
    gender: 'female',
    lookingfor: 'male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/85.jpg'
  },
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;


  document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentProfile.name}</li>
      <li class='list-group-item'>Age: ${currentProfile.age}</li>
      <li class='list-group-item'>Gender: ${currentProfile.gender}</li>
      <li class='list-group-item'>Looking for: ${currentProfile.lookingfor}</li>
      <li class='list-group-item'>Location: ${currentProfile.location}</li>
    </ul>
    `;

  document.getElementById('imageDisplay').innerHTML = `<img src='${currentProfile.image}'>`
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false} : {done: true};
    }
  };
}