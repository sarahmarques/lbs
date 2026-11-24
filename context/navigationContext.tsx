import { createContext, useRef, useState } from "react";

export interface NavigationState {
  setShowSearch: Function;
  setShowDesktop: Function;
  setShowMobile: Function;
  setMainNavSelected: Function;
  setMainNavSelectedIndex: Function;
  setTabSelected: Function;
  setTabSelectedIndex: Function;
  setPrimaryNavSelected: Function;
  setPrimaryNavSelectedIndex: Function;
  setSecondaryNavSelected: Function;
  setSecondaryNavSelectedIndex: Function;
  showSearch: boolean;
  showDesktop: boolean;
  showMobile: boolean;
  mainNavSelected: boolean;
  mainNavSelectedIndex: number | null;
  tabSelected: boolean;
  tabSelectedIndex: number | null;
  primaryNavSelected: boolean;
  primaryNavSelectedIndex: number | null;
  secondaryNavSelected: boolean;
  secondaryNavSelectedIndex: number | null;
  handleEnter: Function;
  handleLeave: Function;
  handleReset: Function;
  navHeight: number;
  setNavHeight: Function;
}

export const initialState = {
  showSearch: false,
  setShowSearch: () => {},
  showDesktop: false,
  setShowDesktop: () => {},
  showMobile: false,
  setShowMobile: () => {},
  mainNavSelected: false,
  setMainNavSelected: () => {},
  mainNavSelectedIndex: null,
  setMainNavSelectedIndex: () => {},
  tabSelected: false,
  setTabSelected: () => {},
  tabSelectedIndex: null,
  setTabSelectedIndex: () => {},
  primaryNavSelected: false,
  setPrimaryNavSelected: () => {},
  primaryNavSelectedIndex: null,
  setPrimaryNavSelectedIndex: () => {},
  secondaryNavSelected: false,
  setSecondaryNavSelected: () => {},
  secondaryNavSelectedIndex: null,
  setSecondaryNavSelectedIndex: () => {},
  handleEnter: () => {},
  handleLeave: () => {},
  handleReset: () => {},
  navHeight: 350,
  setNavHeight: () => {},
};

export const NavigationStateContext =
  createContext<NavigationState>(initialState);

export const NavigationStateProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(initialState.showSearch);
  const [showDesktop, setShowDesktop] = useState(initialState.showDesktop);
  const [showMobile, setShowMobile] = useState(initialState.showMobile);
  const [mainNavSelected, setMainNavSelected] = useState(
    initialState.mainNavSelected
  );
  const [mainNavSelectedIndex, setMainNavSelectedIndex] = useState<
    number | null
  >(initialState.mainNavSelectedIndex);
  const [tabSelected, setTabSelected] = useState(initialState.tabSelected);
  const [tabSelectedIndex, setTabSelectedIndex] = useState<number | null>(
    initialState.tabSelectedIndex
  );
  const [primaryNavSelected, setPrimaryNavSelected] = useState(
    initialState.primaryNavSelected
  );
  const [primaryNavSelectedIndex, setPrimaryNavSelectedIndex] = useState<
    number | null
  >(initialState.primaryNavSelectedIndex);
  const [secondaryNavSelected, setSecondaryNavSelected] = useState(
    initialState.secondaryNavSelected
  );
  const [secondaryNavSelectedIndex, setSecondaryNavSelectedIndex] = useState<
    number | null
  >(initialState.secondaryNavSelectedIndex);
  const [navHeight, setNavHeight] = useState(initialState.navHeight);

  const hideTimer = useRef<null | ReturnType<typeof setTimeout>>(null);

  const handleEnter = (index: number) => {
    hideTimer.current && clearTimeout(hideTimer.current);

    if (tabSelectedIndex === null) {
      setTabSelectedIndex(0);
      setTabSelected(true);
    }

    setShowDesktop(true);
    setMainNavSelected(true);
    setMainNavSelectedIndex(index);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => {
      setShowDesktop(false);
      setMainNavSelected(false);
      setMainNavSelectedIndex(null);
      setNavHeight(initialState.navHeight);
    }, 600);
  };

  const handleReset = () => {
    setShowSearch(false);
    setShowDesktop(false);
    setShowMobile(false);
    setMainNavSelected(false);
    setMainNavSelectedIndex(null);
    setTabSelected(false);
    setTabSelectedIndex(null);
    setPrimaryNavSelected(false);
    setPrimaryNavSelectedIndex(null);
    setSecondaryNavSelected(false);
    setSecondaryNavSelectedIndex(null);
  };

  return (
    <NavigationStateContext.Provider
      value={{
        showSearch,
        setShowSearch,
        showDesktop,
        setShowDesktop,
        showMobile,
        setShowMobile,
        mainNavSelected,
        setMainNavSelected,
        mainNavSelectedIndex,
        setMainNavSelectedIndex,
        tabSelected,
        setTabSelected,
        tabSelectedIndex,
        setTabSelectedIndex,
        primaryNavSelected,
        setPrimaryNavSelected,
        primaryNavSelectedIndex,
        setPrimaryNavSelectedIndex,
        secondaryNavSelected,
        setSecondaryNavSelected,
        secondaryNavSelectedIndex,
        setSecondaryNavSelectedIndex,
        handleEnter,
        handleLeave,
        handleReset,
        navHeight,
        setNavHeight,
      }}
    >
      {children}
    </NavigationStateContext.Provider>
  );
};

export const mockNavigationStatesContext = {};
