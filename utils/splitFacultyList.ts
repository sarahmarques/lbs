export const splitFacultyList = (facultyList: string) => {
  return facultyList
    .split(",")
    .map((profileLbsNo) => parseInt(profileLbsNo, 10) || null)
    .filter(Boolean);
};
