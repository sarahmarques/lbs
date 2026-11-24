import { Fragment, ReactNode } from "react";

export const formatAddress = (
  str: string,
  separator: string = "/"
): ReactNode => {
  const addressLines = str.split(separator).map((str) => str.trim());
  return (
    <Fragment>
      {addressLines.map((addressLine, index) => (
        <Fragment key={index}>
          {addressLine}
          {index < addressLine.length - 1 && <br />}
        </Fragment>
      ))}
    </Fragment>
  );
};
