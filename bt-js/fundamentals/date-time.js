let val;

const today = new Date();
let birthday = new Date("5-8-1990");
birthday = new Date("May 8 1990");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(0);
birthday.setDate(19);
birthday.setFullYear(1990);

console.log(birthday);
