export const isGeneralLink = (link: unknown): link is GeneralLink =>
  (link as GeneralLink)?.sys?.contentType?.sys?.id === "generalLink";

export type GeneralLink = {
  fields: {
    url: string;
    linkText: string;
    openInNewTab: boolean;
    helpText?: string;
    contentReference?: {
      fields: {
        slug: string;
      };
    };
    assets?: LinkAsset;
  };
  sys: {
    contentType: {
      sys: {
        id: string;
      };
    };
  };
};

export type LinkAsset = {
  fields: {
    file: {
      url: string;
      details: {
        size: number;
      };
      contentType: string;
    };
  };
};
