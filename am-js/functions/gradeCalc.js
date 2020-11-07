// students score, total possible score
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (studentScore, possibleScore) {
  if (typeof studentScore !== 'number' || typeof possibleScore !== 'number') {
    throw Error('Please input a number');
  }

  let percent = Math.floor((studentScore / possibleScore) * 100);
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  switch (letterGrade) {
    case "A":
      return `Amazing work! You got ${percent}%!`;
    case "B":
      return `Good job, but I know you can do better! You got ${percent}%!`;
    case "C":
      return `Let's see you work harder next time, I know you got it! You got ${percent}%!`;
    case "D":
      return `Maybe the concepts aren't clicking, let's review some more and work hard! You got ${percent}%!`;
    case "F":
      return `What's going on!?! Need help? You got ${percent}%!`;
  }
};

try {
  const result = gradeCalc('abc', 2) 
  console.log(result)
} catch(e) {
  console.log(e.message)
}
