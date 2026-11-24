import React from "react";
import marked from "marked";
import htmlToReact from "./htmlToReact";

export const Markdowned = ({ markdown }) => {
  return <>{htmlToReact(marked(markdown))}</>;
};

export function markdownify(markdown) {
  if (!markdown) {
    return null;
  }
  return htmlToReact(marked(markdown));
}

export default Markdowned;
