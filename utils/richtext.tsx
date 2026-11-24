import C253_StoriesIconLink from "@components/C253_StoriesContainer/C253_StoriesIconLink/C253_StoriesIconLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "../components/Image/Image";

export default function richTextify(richText) {
  return documentToReactComponents(richText, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div
            style={{
              maxWidth: `${node.data.target.fields.file.details.image.width}px`,
            }}
            className="rich-text-img"
          >
            <Image
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title}
              width={node.data.target.fields.file.details.image.width}
              height={node.data.target.fields.file.details.image.height}
            />
          </div>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node) => {
        const { title, file } = node.data.target.fields;
        const { url } = file;
        return (
          <Link href={url} passHref>
            <a target="_blank" rel="noopener">
              {title}
            </a>
          </Link>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, text) => {
        const { slug } = node.data.target.fields;
        return (
          <Link href={`/${slug}`} passHref>
            <a>{text}</a>
          </Link>
        );
      },
      [INLINES.HYPERLINK]: (node, renderedValues) => {
        return (
          <Link href={node.data.uri} passHref>
            <a target="_blank" rel="noopener">
              {renderedValues}
            </a>
          </Link>
        );
      },
    },
  });
}
