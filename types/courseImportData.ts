import { FacultyProfileDetailProps } from "@components/__templates__/FacultyProfileDetail/FacultyProfileDetail";

export interface CourseImportData {
  externalDataId?: string;
  courseCode?: string;
  courseTitle?: string;
  courseType?: string;
  courseDescription?: string;
  subjectAreaCode?: string;
  subjectAreaName?: string;
  subjectAreaDescription?: string;
  facultyProfileDetailList?: FacultyProfileDetailProps[];
  programmeDetailsPageDeList?: any;
  facultyList?: string;
  programmesList?: string;
}
