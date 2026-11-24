export const splitLookup = {
  cream: { background: "#e9e4d9", color: "#2f3038" },
  teal: { background: "#8fc5c4", color: "#2f3038" },
  white: { background: "#fff", color: "#2f3038" },
  yellow: { background: "#ffd781", color: "#2f3038" },
  black: { background: "#181818", color: "#fff" },
  red: { background: "#E1231A", color: "#fff" },
  accentblack: { background: "#2F2F2F", color: "#fff" },
};

export const isTextBlack = (backgroundColour) => {
  switch (backgroundColour) {
    case "black":
      return false;
    case "accentblack":
      return false;
    case "red":
      return false;
    case "teal":
      return true;
    case "cream":
      return true;
    case "white":
      return true;
    case "yellow":
      return true;
  }
};
