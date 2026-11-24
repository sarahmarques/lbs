export type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      title: string;
      fileName: string;
      contentType: string;
    };
  };
};
