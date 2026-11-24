import { createContext, ReactNode, useContext } from "react";

export interface SubjectAreaDetailContextProps {
  subjectAreaName?: string;
}

interface SubjectAreaDetailProviderProps {
  children: ReactNode;
  details: SubjectAreaDetailContextProps;
}

export const SubjectAreaDetailContext =
  createContext<SubjectAreaDetailContextProps>({});

export const SubjectAreaDetailProvider = ({
  children,
  details,
}: SubjectAreaDetailProviderProps) => {
  const { subjectAreaName } = details;

  return (
    <SubjectAreaDetailContext.Provider
      value={{
        subjectAreaName,
      }}
    >
      {children}
    </SubjectAreaDetailContext.Provider>
  );
};

export const mockSubjectAreaDetailsContext = {
  subjectAreaName: "Economics",
};

export const useSubjectAreaDetails = () => useContext(SubjectAreaDetailContext);
