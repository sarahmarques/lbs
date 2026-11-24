export default function formatCoveoMetadata(field) {
  if (field) {
    let newField = field.trim();

    // Check if it's contains a ; | or , and split accordingly
    if (newField.includes(";")) {
      newField = newField.split(";");
    } else if (newField.includes("|")) {
      newField = newField.split("|");
    } else if (newField.includes(",")) {
      newField = newField.split(",");
    }

    // If value has been split, ensure there are no extra spaces in each value
    // Rejoin the array ; separatedd
    if (typeof newField !== "string") {
      newField = newField.map((item) => item.trim()).join(";");
    }

    return newField;
  } else {
    return "";
  }
}

export const formatPublicationAuthors = (authors) => {
  return authors
    ?.map(({ fields }) => {
      if (fields.publicationAuthorFullName) {
        return `${fields.publicationAuthorFullName.fields?.facultyProfileData?.fields.profileFirstname} ${fields.publicationAuthorFullName.fields?.facultyProfileData?.fields.profileSurname}`;
      }

      return null;
    })
    .join("; ");
};
