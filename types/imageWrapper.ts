import { ContentfulImage } from "./ContentfulImage";

export type ImageWrapperType = {
  fields: {
    altText?: string;
    image: ContentfulImage;
  };
};
