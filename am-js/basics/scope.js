//JavaScript uses Lexical Scoping (Static Scope)
// Global Scope - Defined outside of all code blocks
// Local Scope -

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
}

// varTwo is only defined within the code block above. It is local scope
