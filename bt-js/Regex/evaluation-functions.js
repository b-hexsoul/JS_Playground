let re;
re = /hello/
re = /hello/i; // i flag after the regex makes it case insensitive
// re = /hello/g; // Global search - searches for all instances of hello


// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result)

// test() - Returns true or false 
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There'
// const result = str.match(re);
// console.log(result);

// search() - Returns the index of the first match and if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Returns a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);