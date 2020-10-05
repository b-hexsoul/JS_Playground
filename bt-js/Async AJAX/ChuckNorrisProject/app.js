// Done by myself before tutorial!!

// let inputEl = document.getElementById("number");
// let jokesUl = document.querySelector(".jokes");

// document.querySelector(".get-jokes").addEventListener("click", getJokes);

// let url = "https://api.icndb.com/jokes/random/";

// function getJokes(e) {
//   e.preventDefault();
//   let newURL = url + inputEl.value;
//   console.log(url);

//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", newURL, true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       let jokes = JSON.parse(this.responseText);
//       let output = "";
//       jokes.value.forEach(function (joke) {
//         output += `<li>${joke.joke}</li>`;
//       });
//       jokesUl.innerHTML = output;
//     }
//   };

//   xhr.send();
// }

document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}, true`);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = "";

      if (response.type === "success") {
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
