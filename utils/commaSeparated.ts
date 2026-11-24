export const commaSeparated = (
  str: string,
  separator: string = "|"
): string => {
  return str
    .split(separator)
    .map((str) => str.trim())
    .filter(Boolean)
    .join(", ");
};
