const getListStudentIds = (studentId) => {
  if (!Array.isArray(studentId)) {
    return [];
  }

  return (
    studentId.map((item) => item.id)
  );
};

export default getListStudentIds;
