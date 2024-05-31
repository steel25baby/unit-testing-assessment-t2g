// Function to calculate grades and average points
function calculateGradesAndAverage(student) {

  function calculateGrade(score, gradingTable) {
  if (score >= gradingTable.A) {
  return 'A';
  } else if (score >= gradingTable.B) {
  return 'B';
  } else if (score >= gradingTable.C) {
  return 'C';
  } else if (score >= gradingTable.pass) {
  return 'pass';
  } else {
  return 'Sup';
  }
  }
  
  
  function calculateAveragePoints(scores) {
  const sum = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / 7);
  }
  
  
  const mathGradingTable = { A: 70, B: 60, C: 50, pass: 40 };
  const reGradingTable = { A: 80, B: 70, C: 60, pass: 50 };
  const englishGradingTable = { A: 75, B: 65, C: 55, pass: 45 };
  
  
  const grades = {
  name: student.name,
  math: calculateGrade(student.math, mathGradingTable),
  phy: calculateGrade(student.phy, mathGradingTable),
  che: calculateGrade(student.che, mathGradingTable),
  re: calculateGrade(student.re, reGradingTable),
  eng: calculateGrade(student.eng, englishGradingTable),
  kis: calculateGrade(student.kis, englishGradingTable),
  comp: calculateGrade(student.comp, englishGradingTable),
  };
  
  
  grades.avgPts = calculateAveragePoints({
  math: student.math,
  phy: student.phy,
  che: student.che,
  re: student.re,
  eng: student.eng,
  kis: student.kis,
  comp: student.comp,
  });
  
  return grades;
  }
  const student = {
    name: "Dennis Doe",
    math: 67,
    eng: 56,
    kis: 78,
    phy: 67,
    che: 38,
    re: 89,
    comp: 82,
    };
    
    const result = calculateGradesAndAverage(student);
    console.log(result);

    module.exports ={calculateGradesAndAverage};