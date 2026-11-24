import { ContentfulImage } from "@customTypes/ContentfulImage";
import { GeneralLink } from "@customTypes/generalLink";
import { RichTextContent } from "contentful";
import { createContext, ReactNode, useContext } from "react";
import { FacultyProfileData } from "./facultyDetails";

export interface ContributorDetailContextProps {
  contributorProfileData?: FacultyProfileData;
  profilePhotoSmall?: ContentfulImage;
  profilePhotoLarge?: ContentfulImage;
  profileCarouselPhoto?: ContentfulImage;
  carouselCtaTextLink?: GeneralLink;
  profileDetailsText?: RichTextContent;
  profileCvFile?: ContentfulImage;
  profileLinkedInLink?: string;
  profileTwitterLink?: string;
  profilePositionTitle?: string;
  profileSurname?: string;
  profileResearschActivityList?: string[];
  profilePersonalWebPage?: string;
  profileFirstname?: string;
  profileCta?: GeneralLink;
  externalDataId?: string;
  featuredInPromotionalComponents?: boolean;
}

interface ContributorDetailProviderProps {
  children: ReactNode;
  details: ContributorDetailContextProps;
}

export const ContributorDetailContext =
  createContext<ContributorDetailContextProps>({});

export const ContributorDetailProvider = ({
  children,
  details,
}: ContributorDetailProviderProps) => {
  const {
    contributorProfileData,
    profilePhotoSmall,
    profilePhotoLarge,
    profileCarouselPhoto,
    carouselCtaTextLink,
    profileDetailsText,
    profileCvFile,
    profileLinkedInLink,
    profileTwitterLink,
    profilePositionTitle,
    profileSurname,
    profileResearschActivityList,
    profilePersonalWebPage,
    profileFirstname,
    profileCta,
    externalDataId,
    featuredInPromotionalComponents,
  } = details;

  return (
    <ContributorDetailContext.Provider
      value={{
        contributorProfileData,
        profilePhotoSmall,
        profilePhotoLarge,
        profileCarouselPhoto,
        carouselCtaTextLink,
        profileDetailsText,
        profileCvFile,
        profileLinkedInLink,
        profileTwitterLink,
        profilePositionTitle,
        profileSurname,
        profileResearschActivityList,
        profilePersonalWebPage,
        profileFirstname,
        profileCta,
        externalDataId,
        featuredInPromotionalComponents,
      }}
    >
      {children}
    </ContributorDetailContext.Provider>
  );
};

export const mockContributorDetailsContext = {};

export const useContributorDetails = () => useContext(ContributorDetailContext);
