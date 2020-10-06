const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post) {
  // Resolve - is what we call when we are done with what we are doing.
  // Reject - if we have an error we want to throw
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      // just an example to show reject below
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// When we get a promise response we handle it with .then(function);
// In order to catch the error we need to add on .catch(function)
createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
