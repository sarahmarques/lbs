import { ImageWrapperType } from "./imageWrapper";

export interface BSRArticleType {
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
    articleDescription: string;
    articlePublishedDate: string;
    articleImage: ImageWrapperType;
    articleTitle: string;
    authorsList: {
      fields: {
        articleAuthorName: string;
      };
    }[];
    slug: string;
    vimeoVideoId: string;
    youTubeVideoId: string;
    soundcloudPodcastId: string;
    shortDescription: string;
  };
}
