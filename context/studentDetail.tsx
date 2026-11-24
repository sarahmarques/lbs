import { ContentfulImage } from "@customTypes/ContentfulImage";
import { GeneralLink } from "@customTypes/generalLink";
import { Industry } from "@customTypes/Industry";
import { Media } from "@customTypes/media";
import { Nationality } from "@customTypes/Nationality";
import { ProgrammeDetails } from "@customTypes/programmeDetails";
import { Scholarship } from "@customTypes/Scholarship";
import { RichTextContent } from "contentful";
import { createContext, ReactNode, useContext } from "react";

interface StudentDetailsContextProps {
  carouselCTATextLink?: GeneralLink;
  profileCVFile?: Media;
  profileDescription?: string;
  profileEmail?: string;
  profileFirstname?: string;
  profileIndustry?: string;
  profileIsAmbassador?: Boolean;
  profileIsScholar?: Boolean;
  profileJobPostProgramme?: string;
  profileJobPreProgramme?: string;
  profileLinkedInLink?: string;
  profileNationality?: string;
  profilePersonalWebPage?: string;
  profilePhone?: string;
  profilePhoto?: ContentfulImage;
  profileProgramme?: ProgrammeDetails;
  profileSurname?: string;
  profileText?: RichTextContent;
  profileTextTinyMce?: RichTextContent;
  profileTwitterLink?: string;
  scholarshipTitle?: string;
}

interface StudentDetailsAssignment
  extends Omit<
    StudentDetailsContextProps,
    | "profileIndustry"
    | "profileNationality"
    | "profileProgramme"
    | "scholarshipTitle"
  > {
  profileIndustry: Industry;
  profileNationality: Nationality;
  profileProgramme: { fields: ProgrammeDetails };
  scholarshipTitle: Scholarship;
}

interface StudentDetailsProviderProps {
  children: ReactNode;
  details: StudentDetailsAssignment;
}

export const StudentDetailsContext = createContext<StudentDetailsContextProps>(
  {}
);

export const StudentDetailsProvider = ({
  children,
  details,
}: StudentDetailsProviderProps) => {
  const {
    carouselCTATextLink,
    profileCVFile,
    profileDescription,
    profileEmail,
    profileFirstname,
    profileIndustry,
    profileIsAmbassador,
    profileIsScholar,
    profileJobPostProgramme,
    profileJobPreProgramme,
    profileLinkedInLink,
    profileNationality,
    profilePersonalWebPage,
    profilePhone,
    profilePhoto,
    profileProgramme,
    profileSurname,
    profileText,
    profileTextTinyMce,
    profileTwitterLink,
    scholarshipTitle,
  } = details;

  return (
    <StudentDetailsContext.Provider
      value={{
        carouselCTATextLink,
        profileCVFile,
        profileDescription,
        profileEmail,
        profileFirstname,
        profileIndustry: profileIndustry?.fields.industry,
        profileIsAmbassador,
        profileIsScholar,
        profileJobPostProgramme,
        profileJobPreProgramme,
        profileLinkedInLink,
        profileNationality: profileNationality?.fields?.nationality,
        profilePersonalWebPage,
        profilePhone,
        profilePhoto,
        profileProgramme: profileProgramme?.fields,
        profileSurname,
        profileText,
        profileTextTinyMce,
        profileTwitterLink,
        scholarshipTitle: scholarshipTitle?.fields?.scholarshipTitle,
      }}
    >
      {children}
    </StudentDetailsContext.Provider>
  );
};

export const useStudentDetails = () => useContext(StudentDetailsContext);

export const studentDetailContextMock = {
  profileCVFile: {
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
  profilePhoto: {
    fields: {
      title: "Anna Armani",
      description: "",
      file: {
        url: "//images.ctfassets.net/hxo16fanegqh/6j7o6cE8Srv0JgcS1HrUJc/5e394c66738ae70e1a30acd29766c057/1520232789571.jpg",
        details: { size: 82036, image: { width: 803, height: 536 } },
        fileName: "1520232789571.jpg",
        contentType: "image/jpeg",
      },
    },
  },
  profileFirstname: "Anna",
  profileSurname: "Armani",
  profileNationality: "Russian British",
  profileProgramme: {
    slug: "masters-in-financial-analysis",
    type: "DE",
    programmeTitle: "Masters in Financial Analysis",
  },
  profileDescription:
    "Fusce quis tincidunt dolor. Aenean placerat augue sit amet nulla pretium, sed facilisis quam tempus. Aenean id lobortis elit, at auctor ipsum. Nulla facilisi. Nam quis lacus fermentum, faucibus leo sed, varius augue. Donec sed nisl id tellus aliquam egestas et a ex.",
  profileJobPreProgramme: "Veterinary Nurse",
  profileJobPostProgramme: "Horse Surgeon",
  profileText: {
    data: {},
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: "bold" }],
            value: "Education:",
            nodeType: "text",
          },
          { data: {}, marks: [], value: " BSc Economics", nodeType: "text" },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: "bold" }],
            value: "Finance sector:",
            nodeType: "text",
          },
          { data: {}, marks: [], value: " Oil and gas", nodeType: "text" },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: "bold" }],
            value: "Previous or current role: ",
            nodeType: "text",
          },
          {
            data: {},
            marks: [],
            value: "Commercial Principal, Genel Energy",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: "bold" }],
            value: "About me:",
            nodeType: "text",
          },
          {
            data: {},
            marks: [],
            value:
              " Anna started her career in the London Energy team at Credit Suisse in the Investment Banking Division, where she was involved in numerous M&A transactions across the entire energy sector. After developing a particular interest in oil and gas, Anna joined Genel Energy, where she is currently working as a commercial principal. In her role, Anna is responsible for assessing M&A opportunities globally, providing detailed analysis and strategic recommendations to the executive committee and the board of directors.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "Anna joined the Masters in Finance programme at LBS to build on the fundamentals of corporate finance, valuations and accounting that she acquired throughout her work experience, and to widen her finance knowledge through its numerous electives.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "Outside the office and LBS, Anna is passionate about charity: she previously successfully organised two cross-border charity art auctions in the UK and Russia, raising £82,000, and she is now looking forward to continuing her charity journey at LBS as part of the Art & Business and Volunteers Clubs.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "Anna is also a keen sportswoman: she has been playing competitive tennis since the age of six, representing Charterhouse School as part of the Boys' First tennis team, and later UCL as the captain of the First Ladies’ tennis team.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              "In addition to being a student ambassador, Anna is also a Women’s Merit Scholarship recipient.",
            nodeType: "text",
          },
        ],
        nodeType: "paragraph",
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [{ type: "bold" }],
            value: "Contact:",
            nodeType: "text",
          },
          { data: {}, marks: [], value: " ", nodeType: "text" },
          {
            data: { uri: "mailto:annaa.mifpt2023@london.edu" },
            content: [
              {
                data: {},
                marks: [],
                value: "annaa.mifpt2023@london.edu",
                nodeType: "text",
              },
            ],
            nodeType: "hyperlink",
          },
          { data: {}, marks: [], value: "", nodeType: "text" },
        ],
        nodeType: "paragraph",
      },
    ],
    nodeType: "document",
  },
  profileTextTinyMce: {
    content: [],
    nodeType: "document",
    richText:
      '<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">TINY.&nbsp; !!!!! Education:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;BA Physics, University of Oxford, UK; graduated in 2016</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Pre-MBA industry:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Healthcare</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Pre-MBA role:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Global Project &amp; Strategy Manager &ndash; Dental, Bupa</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Clubs:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Out in Business Club (ExCo), Healthcare Club, Entrepreneurship Club</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">About me:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Alistair graduated in Physics from the University of Oxford and then pursued a career in business strategy. After a year in the automotive industry, he joined CIL, a strategy consultancy. At CIL, he focused on M&amp;A strategy and contributed to the newly formed analytics practice. After two years in consulting, he started his pre-MBA role at Bupa. Here, he led a small strategic team that advised leadership of Bupa&rsquo;s global dental businesses across diverse business functions. Alistair decided to pursue an MBA to broaden his business acumen and connect with a diverse range of people, with the long-term ambition of improving people&rsquo;s lives on a huge scale. After some deliberation, he chose LBS as it is the best school in Europe for academic rigour and diversity and offered the best post-MBA opportunities in London. At LBS, Alistair is a community representative for his stream. In this capacity, he supports his stream of 84 people through social event planning and wellbeing support.</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element"><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Three topics I can be approached about:</span></strong></span></span><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">&nbsp;Choosing schools; LGBTQ+ inclusion; life at LBS.</span></span></span></div>\n<div class="css-ss00rg" data-slate-node="element" data-slate-fragment="JTVCJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkVkdWNhdGlvbiUzQSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJib2xkJTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMnRleHQlMjIlM0ElMjIlQzIlQTBCQSUyMFBoeXNpY3MlMkMlMjBVbml2ZXJzaXR5JTIwb2YlMjBPeGZvcmQlMkMlMjBVSyUzQiUyMGdyYWR1YXRlZCUyMGluJTIwMjAxNiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyUHJlLU1CQSUyMGluZHVzdHJ5JTNBJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmJvbGQlMjIlM0F0cnVlJTdEJTJDJTdCJTIydGV4dCUyMiUzQSUyMiVDMiVBMEhlYWx0aGNhcmUlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlByZS1NQkElMjByb2xlJTNBJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmJvbGQlMjIlM0F0cnVlJTdEJTJDJTdCJTIydGV4dCUyMiUzQSUyMiVDMiVBMEdsb2JhbCUyMFByb2plY3QlMjAlMjYlMjBTdHJhdGVneSUyME1hbmFnZXIlMjAlRTIlODAlOTMlMjBEZW50YWwlMkMlMjBCdXBhJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCU1RCUyQyUyMmlzVm9pZCUyMiUzQWZhbHNlJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJwYXJhZ3JhcGglMjIlMkMlMjJjaGlsZHJlbiUyMiUzQSU1QiU3QiUyMnRleHQlMjIlM0ElMjJDbHVicyUzQSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlMkMlMjJib2xkJTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMnRleHQlMjIlM0ElMjIlQzIlQTBPdXQlMjBpbiUyMEJ1c2luZXNzJTIwQ2x1YiUyMChFeENvKSUyQyUyMEhlYWx0aGNhcmUlMjBDbHViJTJDJTIwRW50cmVwcmVuZXVyc2hpcCUyMENsdWIlMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMkFib3V0JTIwbWUlM0ElMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTJDJTIyYm9sZCUyMiUzQXRydWUlN0QlMkMlN0IlMjJ0ZXh0JTIyJTNBJTIyJUMyJUEwQWxpc3RhaXIlMjBncmFkdWF0ZWQlMjBpbiUyMFBoeXNpY3MlMjBmcm9tJTIwdGhlJTIwVW5pdmVyc2l0eSUyMG9mJTIwT3hmb3JkJTIwYW5kJTIwdGhlbiUyMHB1cnN1ZWQlMjBhJTIwY2FyZWVyJTIwaW4lMjBidXNpbmVzcyUyMHN0cmF0ZWd5LiUyMEFmdGVyJTIwYSUyMHllYXIlMjBpbiUyMHRoZSUyMGF1dG9tb3RpdmUlMjBpbmR1c3RyeSUyQyUyMGhlJTIwam9pbmVkJTIwQ0lMJTJDJTIwYSUyMHN0cmF0ZWd5JTIwY29uc3VsdGFuY3kuJTIwQXQlMjBDSUwlMkMlMjBoZSUyMGZvY3VzZWQlMjBvbiUyME0lMjZBJTIwc3RyYXRlZ3klMjBhbmQlMjBjb250cmlidXRlZCUyMHRvJTIwdGhlJTIwbmV3bHklMjBmb3JtZWQlMjBhbmFseXRpY3MlMjBwcmFjdGljZS4lMjBBZnRlciUyMHR3byUyMHllYXJzJTIwaW4lMjBjb25zdWx0aW5nJTJDJTIwaGUlMjBzdGFydGVkJTIwaGlzJTIwcHJlLU1CQSUyMHJvbGUlMjBhdCUyMEJ1cGEuJTIwSGVyZSUyQyUyMGhlJTIwbGVkJTIwYSUyMHNtYWxsJTIwc3RyYXRlZ2ljJTIwdGVhbSUyMHRoYXQlMjBhZHZpc2VkJTIwbGVhZGVyc2hpcCUyMG9mJTIwQnVwYSVFMiU4MCU5OXMlMjBnbG9iYWwlMjBkZW50YWwlMjBidXNpbmVzc2VzJTIwYWNyb3NzJTIwZGl2ZXJzZSUyMGJ1c2luZXNzJTIwZnVuY3Rpb25zLiU1Q24lNUNuQWxpc3RhaXIlMjBkZWNpZGVkJTIwdG8lMjBwdXJzdWUlMjBhbiUyME1CQSUyMHRvJTIwYnJvYWRlbiUyMGhpcyUyMGJ1c2luZXNzJTIwYWN1bWVuJTIwYW5kJTIwY29ubmVjdCUyMHdpdGglMjBhJTIwZGl2ZXJzZSUyMHJhbmdlJTIwb2YlMjBwZW9wbGUlMkMlMjB3aXRoJTIwdGhlJTIwbG9uZy10ZXJtJTIwYW1iaXRpb24lMjBvZiUyMGltcHJvdmluZyUyMHBlb3BsZSVFMiU4MCU5OXMlMjBsaXZlcyUyMG9uJTIwYSUyMGh1Z2UlMjBzY2FsZS4lMjBBZnRlciUyMHNvbWUlMjBkZWxpYmVyYXRpb24lMkMlMjBoZSUyMGNob3NlJTIwTEJTJTIwYXMlMjBpdCUyMGlzJTIwdGhlJTIwYmVzdCUyMHNjaG9vbCUyMGluJTIwRXVyb3BlJTIwZm9yJTIwYWNhZGVtaWMlMjByaWdvdXIlMjBhbmQlMjBkaXZlcnNpdHklMjBhbmQlMjBvZmZlcmVkJTIwdGhlJTIwYmVzdCUyMHBvc3QtTUJBJTIwb3Bwb3J0dW5pdGllcyUyMGluJTIwTG9uZG9uLiU1Q25BdCUyMExCUyUyQyUyMEFsaXN0YWlyJTIwaXMlMjBhJTIwY29tbXVuaXR5JTIwcmVwcmVzZW50YXRpdmUlMjBmb3IlMjBoaXMlMjBzdHJlYW0uJTIwSW4lMjB0aGlzJTIwY2FwYWNpdHklMkMlMjBoZSUyMHN1cHBvcnRzJTIwaGlzJTIwc3RyZWFtJTIwb2YlMjA4NCUyMHBlb3BsZSUyMHRocm91Z2glMjBzb2NpYWwlMjBldmVudCUyMHBsYW5uaW5nJTIwYW5kJTIwd2VsbGJlaW5nJTIwc3VwcG9ydC4lMjIlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTVEJTJDJTIyaXNWb2lkJTIyJTNBZmFsc2UlMkMlMjJkYXRhJTIyJTNBJTdCJTdEJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnBhcmFncmFwaCUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMlRocmVlJTIwdG9waWNzJTIwSSUyMGNhbiUyMGJlJTIwYXBwcm9hY2hlZCUyMGFib3V0JTNBJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmJvbGQlMjIlM0F0cnVlJTdEJTJDJTdCJTIydGV4dCUyMiUzQSUyMiVDMiVBMENob29zaW5nJTIwc2Nob29scyUzQiUyMExHQlRRJTJCJTIwaW5jbHVzaW9uJTNCJTIwbGlmZSUyMGF0JTIwTEJTLiUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIycGFyYWdyYXBoJTIyJTJDJTIyY2hpbGRyZW4lMjIlM0ElNUIlN0IlMjJ0ZXh0JTIyJTNBJTIyRW1haWwlMjBhZGRyZXNzJTNBJUMyJUEwJTIyJTJDJTIyZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmJvbGQlMjIlM0F0cnVlJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmh5cGVybGluayUyMiUyQyUyMmNoaWxkcmVuJTIyJTNBJTVCJTdCJTIydGV4dCUyMiUzQSUyMmFhZGFtcy5tYmEyMDI0JTQwbG9uZG9uLmVkdSUyMiUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlMjJ1cmklMjIlM0ElMjJtYWlsdG8lM0FhYWRhbXMubWJhMjAyNCU0MGxvbmRvbi5lZHUlMjIlN0QlN0QlNUQlMkMlMjJpc1ZvaWQlMjIlM0FmYWxzZSUyQyUyMmRhdGElMjIlM0ElN0IlN0QlN0QlNUQ="><span data-slate-node="text"><span data-slate-leaf="true"><strong class="css-35ezg3" data-slate-leaf="true"><span data-slate-string="true">Email address:&nbsp;</span></strong></span></span><span class="css-1wt9k1k"><a class="css-1hue4qz" href="mailto:aadams.mba2024@london.edu" rel="noopener noreferrer" data-test-id="cf-ui-text-link" aria-describedby="tooltip_3653"><span data-slate-node="text"><span data-slate-leaf="true"><span data-slate-string="true">aadams.mba2024@london.edu</span></span></span></a></span></div>',
  },
  profileIndustry: "Healthcare",
  scholarshipTitle: "Masters in Finance Alumni Scholarship",
  profileIsAmbassador: false,
  profileIsScholar: true,
  profileEmail: "annaa.mifpt2023@london.edu",
  profilePhone: "020 7242 2233",
  profileLinkedInLink: "https://uk.linkedin.com/in/anna-armani-8b207147",
  profileTwitterLink: "https://twitter.com/BBC",
  profilePersonalWebPage: "https://google.com",
};
