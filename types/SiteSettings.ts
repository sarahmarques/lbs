import { Asset } from "./Asset";
import { RichTextContent } from "contentful";

export interface SiteSettings {
  title: string;
  robotsConfig: string;
  defaultSeoImage: Asset;
  twitterHandle: string;
  siteName: string;
  searchResultsPagesCollection?: {
    items: SearchResultsPage[];
  };
  genericApiError: string;
  scholarshipFundingUrl: string;
  globalSocialShareCollection: any;
  brandIconTitleText: string;
  embagGlobalHeaderCollection?: {
    items: EMBAGLogoItems[];
  };
  privacyAndPolicyTextItems?: {
    privacyTextData: {
      json: RichTextContent;
    };
    stayInformedText: {
      json: RichTextContent;
    };
    stayInformRadioYes: {
      json: RichTextContent;
    };
    stayInformRadioNo: {
      json: RichTextContent;
    };
    emailOptOutText: {
      json: RichTextContent;
    };
  };
  programmeCtaPagesCollection?: {
    items: ProgrammeCTAPage[];
  };
}
export interface SearchResultsPage {
  type: string;
  queryParams: string;
  url: {
    slug: string;
  };
}
export interface ProgrammeCTAPage {
  type: string;
  queryParams: string;
  url: {
    slug: string;
  };
}

export interface EMBAGLogoItems {
  link: string;
  logo: {
    title: string;
    url: string;
  };
}

export interface GlobalSocialShareItems {
  darkIcon: {
    url: Asset;
  };
  lightIcon: {
    url: Asset;
  };
  shareLink: string;
}
