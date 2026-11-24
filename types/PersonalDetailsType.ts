export interface PersonalDetailsType {
  title: string;
  firstName: string;
  lastName: string;
  gender: MultipleOption;
  nationality: MultipleOption;
  nationalityState: MultipleOption;
  emailAddress: string;
  telephoneNumber: string;
  homeAddress: Address;
  facebookAccount: string;
  twitterhandle: string;
  skypeId: string;
  linkedInProfile: string;
  jobTitle: string;
  companyName: string;
  yearsRelevantExperience: number;
  yearsManagerialExperience: number;
  employmentAddress: Address;
  companyTurnover: string;
  numberOfEmployees: number;
  industry: MultipleOption;
  university: string;
  highestDegreee: string;
  GmatScore: number;
  greVerbalScore: number;
  greVerbalPercentile: number;
  greQuantitativeScore: number;
  greQuantitativePercentile: number;
  awaScore: number;
  awaPercentileScore: number;
  CareerAspirations: MultipleOption;
  intendedYearOfStudy: MultipleOption;
  preferredStudyFormat: MultipleOption;
  preferredStudyLocation: MultipleOption;
}

export interface MultipleOption {
  id: string;
  value: string;
}

export interface Address {
  address1: string;
  address2: string;
  city: string;
  countyOrState: string;
  postCodeOrZipCode: string;
  country: string;
}
