export interface CourseTypeSetting {
  courseTypeTitle?: string;
  courseTypeDescription?: string;
  courseTypeCode?: string;
  accordionText?: string;
  courseProgrammeHeaderText?: string;
  courseFacultyHeaderText?: string;
}

export interface CourseTypeSettings {
  courses: CourseTypeSetting[];
}
