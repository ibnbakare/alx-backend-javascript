const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((inStudent) => {
    const grades = newGrades.find(
      (grade) => grade.studentId === inStudent.id,
    );
    const grade = grades ? grades.grade : 'N/A';
    return { ...inStudent, grade };
  });

export default updateStudentGradeByCity;
