import { ContentfulImage } from "@customTypes/ContentfulImage";
import { GeneralLink } from "@customTypes/generalLink";
import { Media } from "@customTypes/media";
import { RichTextContent } from "contentful";
import { createContext, ReactNode, useContext } from "react";

export interface FacultyProfileData {
  fields: {
    profileKnownName?: string;
    profileQualification?: string;
    profileProfessionalQualification?: string;
    profileSubjectArea?: string;
    profileInitials?: string;
    profileName?: string;
    profileFirstname?: string;
    profileSurname?: string;
    profileSynopsis?: string;
    profileLbsNo?: number;
    profileEmail?: string;
    profileFax?: string;
    profilePhone?: string;
  };
}

export interface FacultyDetailContextProps {
  facultyProfileData?: FacultyProfileData;
  slug?: string;
  profilePositionTitle?: string;
  profileResearschActivityList?: string[];
  profilePersonalWebPage?: string;
  profileDetailsText?: RichTextContent;
  profileDetailsTextTinyMce?: RichTextContent;
  profileCta?: GeneralLink;
  profileEducation?: string;
  profileQualification?: string;
  profileFormerly?: string;
  profileOtherInterests?: string;
  profileResearchInterests?: string;
  carouselCtaTextLink?: GeneralLink;
  profileTwitterLink?: string;
  profileLinkedInLink?: string;
  profilePhoto?: ContentfulImage;
  profileCvFile?: Media;
  externalDataId?: string;
  featuredInPromotionalComponents?: boolean;
}

interface FacultyDetailProviderProps {
  children: ReactNode;
  details: FacultyDetailContextProps;
}

export const FacultyDetailContext = createContext<FacultyDetailContextProps>(
  {}
);

export const FacultyDetailProvider = ({
  children,
  details,
}: FacultyDetailProviderProps) => {
  const {
    facultyProfileData,
    profilePositionTitle,
    profileResearschActivityList,
    profilePersonalWebPage,
    profileDetailsText,
    profileDetailsTextTinyMce,
    profileCta,
    profileEducation,
    profileFormerly,
    profileOtherInterests,
    profileResearchInterests,
    carouselCtaTextLink,
    profileTwitterLink,
    profileLinkedInLink,
    profilePhoto,
    profileCvFile,
    externalDataId,
    featuredInPromotionalComponents,
  } = details;

  return (
    <FacultyDetailContext.Provider
      value={{
        facultyProfileData,
        profilePositionTitle,
        profileResearschActivityList,
        profilePersonalWebPage,
        profileDetailsText,
        profileDetailsTextTinyMce,
        profileCta,
        profileEducation,
        profileFormerly,
        profileOtherInterests,
        profileResearchInterests,
        carouselCtaTextLink,
        profileTwitterLink,
        profileLinkedInLink,
        profilePhoto,
        profileCvFile,
        externalDataId,
        featuredInPromotionalComponents,
      }}
    >
      {children}
    </FacultyDetailContext.Provider>
  );
};

export const mockFacultyDetailsContext = {
  facultyProfileData: {
    fields: {
      profileKnownName: "Ekaterina",
      profileQualification:
        "PhD (Imperial College London) MSc (Birkbeck, University of London) BSc (Loughborough University)",
      profileSubjectArea: "Management Science and Operations ",
      profileInitials: "E",
      profileName: "Ekaterina Abramova",
      profileSurname: "Abramova",
      profileFirstname: "Ekaterina",
      profileLbsNo: 2972534,
      profileEmail: "eabramova@london.edu",
      profileFax: "+44 (0)20 7000 7001",
      profilePhone: "+44 (0)20 7000 8835",
    },
  },
  profilePositionTitle:
    "Adjunct Assistant Professor of Management Science and Operations",
  profileDetailsText: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "Ekaterina Abramova holds a PhD in Artificial Intelligence and Machine Learning from Imperial College London, an MSc in Financial Engineering from Birkbeck University of London, and a BSc in Chemistry with Forensic Analysis from Loughborough University. Her latest research focuses on the discovery of trading strategies in electricity markets. Ekaterina’s research during her PhD focused on the Reinforcement Learning branch of Machine Learning, with a particular topic of solving nonlinear optimal control problems. Her work has been included in various journals including Multidisciplinary Digital Publishing Institute (MDPI) Energies, European Workshop on Reinforcement Learning (EWRL) and Imperial College Computing Student Workshop (ICCSW). Ekaterina is interested in discovering statistical arbitrage with the help of econometric and machine learning techniques as applied to financial data analysis and forecasting. Her personal interests are in the space of innovation and technology, with particular focus on the blockchain, decentralisation and the transformation of data ownership offered by web3.0.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
    ],
    nodeType: "document",
  },
  profileDetailsTextTinyMce: {
    content: [],
    nodeType: "document",
    richText:
      '<p><span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlByb2ZpbGUlMjBEZXRhaWxzJTIwVGV4dCU1Q3IlNUNuUHJvZmlsZSUyMERldGFpbHMlMjBUZXh0JTVDciU1Q25Qcm9maWxlJTIwRGV0YWlscyUyMFRleHQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVE">Profile Details Text TinyMCE</span></p>\n<p><span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlByb2ZpbGUlMjBEZXRhaWxzJTIwVGV4dCU1Q3IlNUNuUHJvZmlsZSUyMERldGFpbHMlMjBUZXh0JTVDciU1Q25Qcm9maWxlJTIwRGV0YWlscyUyMFRleHQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVE">Profile Details Text TinyMCE</span></p>\n<p><span data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlByb2ZpbGUlMjBEZXRhaWxzJTIwVGV4dCU1Q3IlNUNuUHJvZmlsZSUyMERldGFpbHMlMjBUZXh0JTVDciU1Q25Qcm9maWxlJTIwRGV0YWlscyUyMFRleHQlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVE">Profile Details Text TinyMCE</span></p>',
  },
  profileCvFile: {
    fields: {
      title: "fake CV",
      description: "fake CV description",
      file: {
        url: "//assets.ctfassets.net/hxo16fanegqh/5l3vt5NkmqVCblhvowdOhu/f096ed5b708a8360ed87cfe84a8ff35b/fake_CV.pdf",
        details: { size: 77679 },
        fileName: "fake CV.pdf",
        contentType: "application/pdf",
      },
    },
  },
  externalDataId: "1826",
};

export const useFacultyDetails = () => useContext(FacultyDetailContext);
