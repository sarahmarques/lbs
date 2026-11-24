import { ContentfulImage } from "./ContentfulImage";

export interface EventDetail {
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  metadata: {
    tags: string[];
  };
  fields: {
    eventTopImage: ContentfulImage;
    eventShortDescription: string;
    eventLongDescription: string;
    eventStarts: string;
    eventTitle: string;
    eventOrganisedByList: string[];
    slug: string;
  };
}
