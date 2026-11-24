import { orderBy } from "lodash";

export const combineImportData = (
  programmeDetailsCollection,
  programmeImportDataCollection
) => {
  const programmeTypeCodes = programmeDetailsCollection.map(
    (programme) => programme.programmeTypeCode
  );

  const orderedProgrammeImportDataCollection = orderBy(
    programmeImportDataCollection,
    ["programmeStartDate"],
    ["asc"]
  );

  const latestProgrammeImportDataCollection = programmeTypeCodes
    .map((programmeTypeCode) => {
      return orderedProgrammeImportDataCollection.find(
        (o) => o.importDataProgrammeTypeCode === programmeTypeCode
      );
    })
    .filter(Boolean);

  const programmeDetailsWithImportData = latestProgrammeImportDataCollection
    .map((programmeImportData) => {
      const programmeDetails = programmeDetailsCollection.find(
        (programmeDetails) =>
          programmeDetails.programmeTypeCode ===
          programmeImportData.importDataProgrammeTypeCode
      );
      if (!programmeDetails) return null;

      return { ...programmeDetails, programmeImportData };
    })
    .filter(Boolean);

  return programmeDetailsWithImportData;
};
