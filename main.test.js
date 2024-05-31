const { calculateGradesAndAverage } = require('./main');

describe('calculateGradesAndAverage function', () => {
  test('should calculate grades and average points correctly', () => {
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

    
    expect(result).toEqual(
        {
            name: 'Dennis Doe',
            math: 'B',
            phy: 'B',
            che: 'Sup',
            re: 'A',
            eng: 'C',
            kis: 'A',
            comp: 'A',
            avgPts: 68
          }
);
  });
})