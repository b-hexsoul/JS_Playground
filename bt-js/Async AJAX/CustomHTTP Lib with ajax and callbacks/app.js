// Instantiate easyHTTP
const http = new easyHTTP();

// Get posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, response) {
//   // need to test for the error
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// POST request
// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};
// // Create Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
