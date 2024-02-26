const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) throw new Error('Cannot load the database');

  const data = fs.readFileSync(path, 'utf8');

  // Split where a new line exists
  const students = data.split('\n')
    // Turn a row into an array by splitting by a ','
    .map((row) => row.split(','))
    // Skip first row
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    // Convert into objects
    .map((row) => ({
      firstName: row[0],
      lastName: row[1],
      age: row[2],
      field: row[3].replace('\r', ''),
    }));
  // Generate CS students
  const CS = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  // Generate SWE students
  const SWE = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  // Print length and convert each into a string
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
  console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
};

module.exports = countStudents;
