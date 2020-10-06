document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJson);

document.getElementById("button3").addEventListener("click", getExternal);

// GET Text
function getText() {
  fetch("test.txt")
    // Fetch response returns promises, when you get a response from a promise you need to use .then()
    .then((res) => res.text())
    // Need to call another .then() because of the promise above
    .then((data) => (document.getElementById("output").innerHTML = data))
    // If there is an error do .catch
    .catch((err) => console.log(err));
}

// GET JSON
function getJson() {
  fetch("posts.json")
    // Fetch response returns promises, when you get a response from a promise you need to use .then()
    .then((res) => res.json())
    // Need to call another .then() because of the promise above
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}: ${post.body}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    // If there is an error do .catch
    .catch((err) => console.log(err));
}

// GET External
function getExternal() {
  fetch("https://api.github.com/users")
    // Fetch response returns promises, when you get a response from a promise you need to use .then()
    .then((res) => res.json())
    //Handle errors
    .then(handleErrors(res))
    // Need to call another .then() because of the promise above
    .then((user) => {
      let output = "";
      user.forEach((user) => {
        output += `<li>${user.login}: ${user.id}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    // If there is an error do .catch
    .catch((err) => console.log(err));
}

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
