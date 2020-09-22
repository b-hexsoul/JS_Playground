// Window is the global object
// Chrome and Node.js use the same engine, V8. It implements ECMAScript and WebAssembly

// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
// alert("Hello World");

// Prompt - takes an input
// const input = prompt("Give me something to say");
// alert(input);

// Confirm
// if (confirm("Are you sure")) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

let val;

// Outer height and width;
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width;
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll Points - where you are in terms of scrolling
val = window.scrollY; // scrolling down and getting animations to trigger...

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
// can extract these values and put them in the script!
val = window.location.search;

// // Redirect
// window.location.href = "http://google.com";
// // Reload
// window.location.reload();

// History Object - browsing history
// window.history.length;

// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;

/*


*/
console.log(val);
