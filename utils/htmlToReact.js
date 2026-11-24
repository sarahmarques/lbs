import React from "react";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";
import ScriptTag from "react-script-tag";
import Link from "./link";

const convertChildren = (children, index) =>
  children.map((childNode) => convertNodeToElement(childNode, index));

export default function htmlToReact(html) {
  if (!html) {
    return null;
  }

  return ReactHtmlParser(html, {
    transform: (node, index) => {
      if (node.type === "script") {
        if (node.children.length) {
          return (
            <ScriptTag key={index} {...node.attribs}>
              {convertChildren(node.children, index)}
            </ScriptTag>
          );
        } else {
          return <ScriptTag key={index} {...node.attribs} />;
        }
      } else if (node.type === "tag" && node.name === "a") {
        const href = node.attribs.href;
        const props = Object.create(node.attribs);
        delete props.href;
        // use Link only if there are no custom attributes like style, class, and what's not that might break react
        if (Object.keys(props).length === 0) {
          return (
            <Link key={index} href={href} {...props}>
              {convertChildren(node.children, index)}
            </Link>
          );
        }
      }
    },
  });
}
