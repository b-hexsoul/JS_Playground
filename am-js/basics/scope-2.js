// Global
// Local
// Local
// Local

let name = "Andrew";

// Local variable shadowing
if (true) {
  let name = "Mike";
  if (true) {
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
