const getStudentsByLocation = ((studentLocation, city) => (
  (studentLocation.filter((student) => student.location === city))
)
);
export default getStudentsByLocation;
