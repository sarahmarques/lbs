import { createContext } from "react";

interface SubNavLinksProps {
  referenceTitle?: string;
  pageTitle: string;
  menuTitle?: string;
  anchorKey?: string;
  mainTitle?: string;
  description?: string;
  title?: string;
  blueBackground?: boolean;
  tabs?: { [key: string]: any }[];
}
[];

export const SubNavLinkContext = createContext<SubNavLinksProps[]>([
  {
    pageTitle: "",
    menuTitle: "",
    anchorKey: "",
    mainTitle: "",
  },
]);

export const SubNavLinkProvider = ({ children, subNavLinks }) => {
  return (
    <SubNavLinkContext.Provider value={subNavLinks}>
      {children}
    </SubNavLinkContext.Provider>
  );
};
