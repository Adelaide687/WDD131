//  arrays.js Adeliade Plass

// example 1
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
console.log(stepsHtml);

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
let gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);

// example 3
gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
console.log(gpa);

// example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
let shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
shortWords = words.filter((word) => word.length < 6);
console.log(shortWords);

// example 5
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);
