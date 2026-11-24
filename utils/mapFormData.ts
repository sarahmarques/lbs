const expectedFormStructure = {
  title: {
    id: true,
    value: "",
  },
  firstName: "",
  lastName: "",
  gender: {
    id: true,
    value: "",
  },
  nationality: {
    id: true,
    value: "",
  },
  CV: "",
  nationalityState: {
    id: true,
    value: "",
  },
  emailAddress: "",
  telephoneNumber: "",
  homeAddress: {
    address1: "",
    address2: "",
    city: "",
    countyOrState: "",
    postCodeOrZipCode: "",
    country: "",
  },
  facebookAccount: "",
  twitterhandle: "",
  skypeId: "",
  linkedInProfile: "",
  jobTitle: "",
  companyName: "",
  preferredDates: {
    id: true,
    value: "",
  },
  reasons: {
    id: true,
    value: "",
  },
  yearsRelevantExperience: "",
  yearsManagerialExperience: "",
  employmentAddress: {
    address1: "",
    address2: "",
    city: "",
    countyOrState: "",
    postCodeOrZipCode: "",
    country: "",
  },
  companyTurnover: "",
  numberOfEmployees: "",
  industry: {
    id: true,
    value: "",
  },
  university: "",
  highestDegreee: "",
  GmatScore: "",
  greVerbalScore: "",
  greVerbalPercentile: "",
  greQuantitativeScore: "",
  greQuantitativePercentile: "",
  awaScore: "",
  awaPercentileScore: "",
  careerAspirations: {
    id: true,
    value: "",
  },
  intendedYEarOfStudy: {
    id: true,
    value: "",
  },
  preferredStudyFormat: {
    id: true,
    value: "",
  },
  preferredStudyLocation: {
    id: true,
    value: "",
  },
  objectivesTextLabelText: "",
  password: "",
  confirmPassword: "",
  commentOrEnquiry: "",
  hasAgreedToReceiveEmails: "",
};

function transformAddressObjects(form, expect, isHome = false) {
  const mappingHome = {
    address1: "HomeAddressLine1",
    address2: "HomeAddressLine2",
    city: "HomeCity",
    country: "HomeCountry",
    postCodeOrZipCode: "HomePostCode",
    countyOrState: "HomeStateCounty",
  };

  const mappingWork = {
    address1: "WorkAddressLine1",
    address2: "WorkAddressLine2",
    city: "WorkCity",
    country: "WorkCountry",
    postCodeOrZipCode: "WorkPostCode",
    countyOrState: "WorkStateCounty",
  };

  const newObject = {};
  for (const prop in expect) {
    if (form[mappingHome[prop]] || form[mappingWork[prop]]) {
      newObject[prop] = isHome
        ? form[mappingHome[prop]]
        : form[mappingWork[prop]];
    }
  }
  return newObject;
}

export const mapFormData = (formData, inputProp) => {
  const result = {};

  for (const key in expectedFormStructure) {
    if (
      expectedFormStructure[key] &&
      typeof expectedFormStructure[key] === "object"
    ) {
      if (expectedFormStructure[key].id) {
        if (formData[key]) {
          result[key] = {
            id:
              inputProp[key] &&
              inputProp[key].find((option) => formData[key] === option.value)
                .id,
            value: formData[key],
          };
        }
      } else {
        if (key === "employmentAddress" && formData[key]) {
          result[key] = transformAddressObjects(
            formData,
            expectedFormStructure[key]
          );
        }
        if ("homeAddress" === key) {
          result[key] = transformAddressObjects(
            formData,
            expectedFormStructure[key],
            true
          );
        }
      }
    } else {
      if (formData[key] && formData[key]) {
        result[key] = Number(formData[key])
          ? Number(formData[key])
          : formData[key];
      }
    }
  }
  return result;
};
