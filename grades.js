/**
 * ASSIGNMENT 1
 * Create a grades object that stores a set of student grades in an object.
 * Provide a function for adding a grade and a function for displaying the 
 * student’s grade average.
 */

var Grades = function() {
  // stores the student grades
  this.grades = [];
  this.addGrade = addGrade;
  this.calculateGPA = calculateGPA;
  this.clearGrades = clearGrades;
}

// clears the `report card`
var clearGrades = function(){
  this.grades.length = 0;
}

// adds a subject and grade
var addGrade = function(subject, grade) {
  // checks if subject already exists,
  // if so replace the grade
  for (var i = 0; i < this.grades.length; i++){
    if (this.grades[i].subject === subject){
      this.grades[i].grade = grade;
      
      return;
    }
  }
  
  this.grades.push({
    'subject': subject,
    'grade': grade
  });
}

// returns a GPA
var calculateGPA = function() {
  var len = this.grades.length,
      total = 0;
  
  if (len === 0) {
    return 'No grades added';
  }
  
  for (var i = 0; i < len; i++) {
    // convert grade to number value
    var gradeValue = convertGrade(this.grades[i].grade);
    
    total = total + gradeValue;    
  }
  
  var raw = total/len;
  var gpa = raw.toFixed(2) + ' GPA';
  
  return gpa;
}

var convertGrade = function(letter){
  // legend
  var grades = {
    'A': 4,
    'B': 3,
    'C': 2,
    'D': 1,
    'F': 0
  }
  
  return grades[letter];
}

var hGrades = new Grades();

console.log(hGrades.addGrade('math', 'A'));
console.log(hGrades.addGrade('english', 'A'));
console.log(hGrades.addGrade('english', 'B'));
console.log(hGrades.addGrade('history', 'C'));
console.log(hGrades.addGrade('chemistry', 'D'));
console.log(hGrades.grades);
console.log(hGrades.calculateGPA());
console.log(hGrades.clearGrades());
console.log(hGrades.grades);
