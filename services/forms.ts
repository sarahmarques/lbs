// FORMS API SERVICE

const baseUrl = process.env.FORMS_API_BASE_URL; // TODO - move to env var when we have real API

let token;
let LBSNumber;
let correlationId;

export const makeRequest = async (
  currentUrl,
  requestBody,
  endpoint,
  method,
  body?
) => {
  const response = await fetch(`${currentUrl}${requestBody}${endpoint}`, {
    method: method,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      LBSNumber: LBSNumber,
      "x-lbs-correlation-id": correlationId,
      "x-mock-response-code": "200", // TODO - remove this when we have the real API
    },
    body: JSON.stringify(body),
  });

  if (response.headers["x-lbs-correlation-id"] && !correlationId) {
    correlationId = response.headers["x-lbs-correlation-id"];
  }

  if (response.ok) {
    return response.headers.get("content-type")?.includes("application/json")
      ? await response.json()
      : await response.text();
  }

  return Promise.reject(response);
};

export const setUser = (newToken, lbsNumber) => {
  token = newToken;
  LBSNumber = lbsNumber;
};

// USER API
export const setSubmitCV = async (formData) => {
  return makeRequest(baseUrl, "/v1/", "submit-cv", "POST", { formData });
};
export const getPreferredDates = async () => {
  return makeRequest(baseUrl, "/v1/", "reservations/preferred-dates", "GET");
};

export const getReasonForReservation = async () => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "programme-place-reservations/reasons",
    "GET"
  );
};
export const getSavedPages = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile/saved-pages", "GET");
};

export const savePage = async (crm_campaign, pageId) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `userprofile/saved-pages?campaignCode=${crm_campaign}`,
    "POST",
    { pageId }
  );
};

export const getApplications = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile/applications", "GET");
};

export const getPersonalDetails = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile", "GET");
};

export const setPersonalDetails = async (details) => {
  return makeRequest(baseUrl, "/v1/", "userprofile", "PUT", details);
};

export const getProfileContactPreferences = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile/contact-preferences", "GET");
};

export const setProfileContactPreferences = async (details) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "userprofile/contact-preferences",
    "PUT",
    details
  );
};

export const setReserveAPlace = async (crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `reserve-a-place?campaignCode=${crm_campaign}`,
    "POST"
  );
};

export const setContactUsForm = async (crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `contact-us-enquiries?campaignCode=${crm_campaign}`,
    "POST"
  );
};

export const setConsultantForm = async (crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `contact-us-consultant-enquiries?campaignCode=${crm_campaign}`,
    "POST"
  );
};

export const getProfileEmailSubscriptions = async () => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "userprofile/profile-email-subscriptions",
    "GET"
  );
};

export const setProfileEmailSubscriptions = async (details) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "userprofile/profile-email-subscriptions",
    "PUT",
    details
  );
};

export const activateAccount = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile/activate-account", "PUT");
};

export const deactivateAccount = async () => {
  return makeRequest(baseUrl, "/v1/", "userprofile/deactivate-account", "PUT");
};

export const getInteractWebsiteLoginCredentials = async () => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "userprofile/interact-website-login-credentials",
    "GET"
  );
};

// PERSONAL DETAILS API
export const getTitles = async () => {
  return makeRequest(baseUrl, "/data/v1/", "titles", "GET");
};

export const getSubjects = async () => {
  return makeRequest(baseUrl, "/v1/", "contact-us-enquiries/categories", "GET");
};

// categoryId is hardcoded due to isn't ready API
export const getTopics = async () => {
  return makeRequest(
    baseUrl,
    "/v1/",
    "contact-us-enquiries/categories/100000001",
    "GET"
  );
};

export const getNations = async () => {
  return makeRequest(baseUrl, "/v1/", "personal-details/nations", "GET");
};

export const getNationStates = async (state) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `personal-details/nations/${state}/states`,
    "GET"
  );
};

export const getGenders = async () => {
  return makeRequest(baseUrl, "/data/v1/", "genders", "GET");
};

export const getIndustries = async () => {
  return makeRequest(baseUrl, "/data/v1/", "industries", "GET");
};

export const getCareerAspirations = async () => {
  return makeRequest(baseUrl, "/data/v1/", "career-aspirations", "GET");
};

export const getPreferredStudyFormat = async () => {
  return makeRequest(baseUrl, "/data/v1/", "preferred-study-formats", "GET");
};
export const getPreferredStudyLocation = async () => {
  return makeRequest(
    baseUrl,
    "/data/v1/",
    "personal-details/preferred-study-locations",
    "GET"
  );
};

// programme-enquiry
export const setProgrammeEnquiry = async (formData, crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `programme-enquiries?campaignCode=${crm_campaign}`,
    "POST",
    formData
  );
};

export const setUserProgrammeEnquiry = async (formData, crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `userprofile/programme-enquiries?campaignCode=${crm_campaign}`,
    "POST",
    formData
  );
};

//Subscribe
export const subscribeThink = async (params, crm_campaign) => {
  return makeRequest(
    baseUrl,
    "/v1/",
    `newsletter-subscriptions/think/?campaignCode=${crm_campaign}`,
    "PUT",
    params
  );
};
