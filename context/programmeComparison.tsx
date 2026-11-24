import { ProgrammeType } from "@customTypes/ProgrammeType";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

interface ProgrammeProps {
  programmeTitle: string;
  programmeCode: string;
  programmeType: string;
}

export interface ProgrammeContextProps {
  programmes: ProgrammeProps[];
  addProgramme: Function;
  removeProgramme: Function;
  resetProgrammes: Function;
  type: ProgrammeType;
}

export const ProgrammeContext = createContext<ProgrammeContextProps>({
  programmes: [],
  addProgramme: () => {},
  removeProgramme: () => {},
  resetProgrammes: () => {},
  type: "EE" as ProgrammeType,
});

export const ProgrammeProvider = ({ children }) => {
  const router = useRouter();
  const [programmes, setProgrammes] = useState<ProgrammeProps[]>([]);
  const [type, setType] = useState<ProgrammeType>("EE" as ProgrammeType);

  const addProgramme = (programme: ProgrammeProps) => {
    if (programmes.length < 4) {
      if (programme.programmeType !== type) {
        setProgrammes([programme]);
        setType(programme.programmeType as ProgrammeType);
      } else {
        setProgrammes([...programmes, programme]);
      }
    }
  };

  const removeProgramme = (programme: ProgrammeProps) => {
    setProgrammes(
      programmes.filter((p) => p.programmeCode !== programme.programmeCode)
    );
  };

  const resetProgrammes = () => {
    setProgrammes([]);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", resetProgrammes);

    return () => {
      router.events.off("routeChangeStart", resetProgrammes);
    };
  }, []);

  return (
    <ProgrammeContext.Provider
      value={{
        programmes,
        addProgramme,
        removeProgramme,
        resetProgrammes,
        type,
      }}
    >
      {children}
    </ProgrammeContext.Provider>
  );
};
