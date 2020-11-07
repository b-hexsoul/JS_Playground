let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello$/i; // Must start and end with hello
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times

re = /gre?a?y/i; // Optional character before the ?.  
re = /gre?a?y\?/i; // Escape character.

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be an uppercase G or F
re = /[^GF]ray/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Character before must occur exactly {n} times
re = /Hel{2,4}o/i; // Must occur exactly {n} range times;
re = /Hel{2,}o/i; // Must occur at least {n} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/; // Has to be exactly {n}x three times

// Shorthand Character Classes
re = /\w/; // Word Character - Alphanumeric or _
re = /\w+/; // + looks at one or more 
re = /\W/; // Non-Word Character
re =/\d/; // Match any digit
re =/\d+/; // Match any digit 0 or more times
re = /\D/; // Non-digits
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell\b/i // Word boundary

// Assertions
re = /x(?=y)/; //Match x only if it is followed by y
re = /x(?!y)/; //Match x only if NOT followed by y

// String to match
const str = 'asdf';

// Log results
const result = re.exec(str);
console.log(result)


function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);