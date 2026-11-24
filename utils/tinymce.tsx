import Link from "next/link";
import { useEffect, useState } from "react";
import parse, { domToReact, Element } from "html-react-parser";

export default function RichTextify({ data }) {
  const [markup, setMarkup] = useState<string>("");
  const { richText, content } = data;
  // let dom;

  useEffect(() => {
    const dom = new DOMParser().parseFromString(richText, "text/html");

    // combine reference and markup data
    content &&
      content?.forEach((ref) => {
        const { fields, sys } = ref.data.target;

        [...dom.querySelectorAll(`[data-id="${sys.id}"]`)].forEach(
          (el: any) => {
            if (el.tagName === "IMG") {
              el.src = fields.file.url;
              el.alt = fields.title;
            }

            if (el.tagName === "A") {
              el.href = fields?.slug;
            }
          }
        );
      });

    setMarkup(dom.body.innerHTML);
  }, []);

  // return react components from markup string
  return (
    <>
      {parse(markup, {
        replace: (domNode) => {
          const { name, attribs, children } = domNode as Element;
          if (name === "a" && attribs.href !== "#") {
            return (
              <Link href={attribs.href || "/"}>
                <a className={attribs.class} {...attribs}>
                  {domToReact(children)}
                </a>
              </Link>
            ); // use next/link for links
          }
          if (name === "img") {
            attribs.lazy = "lazy"; // force lazy load on richtext images
            return domNode;
          }
        },
      })}
    </>
  );
}
