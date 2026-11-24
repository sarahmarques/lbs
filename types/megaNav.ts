import { GeneralLink } from "./generalLink";
import { ImageWrapperType } from "./imageWrapper";

export enum NavLinkType {
  NavLinkList = "navLinkList",
  NavLinkPanel = "navLinkPanel",
  NavGroupHeading = "navGroupHeading",
  GeneralLink = "generalLink",
}

export interface ContentType {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
}

export interface NavPromoItem extends ContentType {
  fields: {
    image: ImageWrapperType;
    link: GeneralLink;
  };
}

export interface NavLinkPanel extends ContentType {
  fields: {
    ownLink: GeneralLink;
    column1: (GeneralLink | NavGroupHeading)[];
    column2: (GeneralLink | NavGroupHeading)[];
    column3: (GeneralLink | NavGroupHeading)[];
    promoItems: NavPromoItem[];
    promoCTAs: GeneralLink[];
    description: string;
  };
}

export interface NavGroupHeading extends ContentType {
  fields: {
    label: string;
    link: GeneralLink;
  };
}

export const isLinkList = (link: unknown): link is NavLinkList =>
  (link as NavLinkList)?.sys?.contentType?.sys?.id === NavLinkType.NavLinkList;

export interface NavLinkList extends ContentType {
  fields: {
    ownLink: GeneralLink;
    linkList: (GeneralLink | NavLinkList | NavGroupHeading | NavLinkPanel)[];
    promoItems: NavPromoItem[];
    promoCTAs: GeneralLink[];
    description: string;
  };
}
