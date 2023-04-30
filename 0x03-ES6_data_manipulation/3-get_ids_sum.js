const getStudentIdsSum = (studentSum) =>
// const Initial = 0;
  (studentSum.reduce((acc, cur) => acc + cur.id, 0));

export default getStudentIdsSum;
