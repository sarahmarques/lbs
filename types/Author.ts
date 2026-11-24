import { FacultyProfileDetailProps } from "@components/__templates__/FacultyProfileDetail/FacultyProfileDetail";
import { GeneralLink } from "./generalLink";
import { ImageWrapperType } from "./imageWrapper";

export interface Author {
  sys: {
    id: string;
  };
  fields: {
    articleAuthorDescription?: string;
    articleAuthorFreeHtmlSection?: any;
    articleAuthorName: string;
    articleAuthorTitleDisplayLength?: number;
    articleAuthorViewArticlesCtaText?: string;
    articleAuthorProfileLink?: GeneralLink;
    articleAuthorImage?: ImageWrapperType;
    articleAuthorFacultyProfile?: {
      fields: FacultyProfileDetailProps;
    };
  };
}
