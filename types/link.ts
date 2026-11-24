export type Link = {
  fields: {
    linkText: string;
    url: string;
    internalLink: {
      fields: {
        slug: string;
        title: string;
      };
    };
    openInNewTab: boolean;
  };
};
