import CareerStagesDE from "./careerStagesDE";
import CareerStagesEE from "./careerStagesEE";
import { ProgrammeImportData } from "./programmeImportData";
import { ProgrammeType } from "./ProgrammeType";
import { Tag } from "./Tag";
import { TinyMceRichText } from "@customTypes/TinyMceRichText";

export interface ProgrammeDetails {
  slug: string;
  type: ProgrammeType;
  hideFromProgrammeFinder?: boolean;
  hideFromProgrammeCalendar?: boolean;
  programmeDescription?: string;
  programmeTitle?: string;
  programmeAlumniStatus?: string;
  programmeTypeCode?: string;
  programmeApplyOnlineParameterValue?: string;
  programmeType?: ProgrammeType;
  programmeBrochureExternal?: string;
  programmeApplyNowExternalLink?: string;
  programmeDetailsExternalLink?: string;
  isNew?: boolean;
  programmeContent?: string;
  entryRequirements?: string;
  keyDifferentiators?: string;
  averageWorkExperienceInClass?: string;
  classProfile?: string;
  programmeFeature?: string;
  programmeReason?: string;
  keyTakeAway: string;
  whoAttends?: string;
  testimonialQuote?: string;
  testimonialName?: string;
  programmeDeliveryText?: string;
  seniority?: string;
  programmeLocationInfo?: string;
  equirySendToEmail?: string;
  programmeCareerStagesDeList?: CareerStagesDE[];
  programmeCareerStagesEeList?: CareerStagesEE[];
  itemUrl?: string;
  itemId?: string;
  programmeImportData?: ProgrammeImportData;
  contentfulMetadata?: {
    tags: Tag[];
  };
}
