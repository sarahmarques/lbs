import { Author } from "@customTypes/Author";
import { createContext, ReactNode, useContext } from "react";

export interface BSRContentPageContextProps {
  authorsHeading?: string;
  authorsList?: Author[];
}

interface BSRContentPageProviderProps {
  children: ReactNode;
  details: BSRContentPageContextProps;
}

export const BSRContentPageContext = createContext<BSRContentPageContextProps>(
  {}
);

export const BSRContentPageProvider = ({
  children,
  details,
}: BSRContentPageProviderProps) => {
  const { authorsHeading, authorsList } = details;

  return (
    <BSRContentPageContext.Provider
      value={{
        authorsHeading,
        authorsList,
      }}
    >
      {children}
    </BSRContentPageContext.Provider>
  );
};

export const mockBSRContentPagesContext = {
  authorsHeading: "Authors - Template",
  authorsList: [
    {
      fields: {
        articleAuthorName: "Aharon Cohen-Mohliver",
        articleAuthorProfileLink: {
          fields: {
            url: "#",
          },
        },
        articleAuthorDescription:
          "Assistant Professor of Strategy and Entrepreneurship",
        articleAuthorFreeHtmlSection: {
          fields: {
            content: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "He teaches on the following programmes:",
                      marks: [],
                      data: {},
                    },
                  ],
                },
                {
                  nodeType: "unordered-list",
                  data: {},
                  content: [
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=BCBF6DE6E92D48BDAD85759D27DED1A8&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "MBA",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=4844B50B7C15415DAF12BBAE88637D8A&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "PhD",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "",
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          },
        },
        articleAuthorViewArticlesCtaText: "View articles",
      },
    },
    {
      fields: {
        articleAuthorName: "Julian Birkinshaw",
        articleAuthorImage: {
          fields: {
            image: {
              fields: {
                file: {
                  url: "//images.ctfassets.net/hxo16fanegqh/2uRrVevAem9xUeyeiqBAJT/cb60a5e7e2e145741c0ee0bb30b73f49/birkinshaw-large.webp",
                },
              },
            },
            altText: "Julian Birkinshaw",
          },
        },
        articleAuthorFreeHtmlSection: {
          fields: {
            content: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "He teaches on the following programmes:",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [
                                {
                                  type: "bold",
                                },
                              ],
                              value: "MBA",
                              nodeType: "text",
                            },
                          ],
                          nodeType: "paragraph",
                        },
                      ],
                      nodeType: "list-item",
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: "",
                              nodeType: "text",
                            },
                            {
                              data: {
                                uri: "/",
                              },
                              content: [
                                {
                                  data: {},
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  value:
                                    "Developing Strategy for Value Creation",
                                  nodeType: "text",
                                },
                              ],
                              nodeType: "hyperlink",
                            },
                            {
                              data: {},
                              marks: [],
                              value: "",
                              nodeType: "text",
                            },
                          ],
                          nodeType: "paragraph",
                        },
                      ],
                      nodeType: "list-item",
                    },
                  ],
                  nodeType: "unordered-list",
                },
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value: "",
                      nodeType: "text",
                    },
                  ],
                  nodeType: "paragraph",
                },
              ],
              nodeType: "document",
            },
          },
        },
        articleAuthorViewArticlesCtaText: "View articles",
        articleAuthorFacultyProfile: {
          fields: {
            slug: "faculty-and-research/faculty-profiles/b/birkinshaw-j",
            profilePositionTitle:
              "Vice-Dean; Professor of Strategy and Entrepreneurship; Academic Director, Institute of Entrepreneurship and Private Capital",
          },
        },
      },
    },
    {
      fields: {
        articleAuthorName: "Costas Markides",
        articleAuthorDescription:
          "Professor of Strategy and Entrepreneurship; Robert P Bauman Chair in Strategic Leadership; Executive Education Faculty Director",
        articleAuthorFreeHtmlSection: {
          fields: {
            content: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "He teaches on the following programmes:",
                      marks: [],
                      data: {},
                    },
                  ],
                },
                {
                  nodeType: "unordered-list",
                  data: {},
                  content: [
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=BCBF6DE6E92D48BDAD85759D27DED1A8&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "MBA",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "",
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          },
        },
        articleAuthorViewArticlesCtaText: "View articles",
      },
    },
    {
      fields: {
        articleAuthorName: "Selin Kesebir",
        articleAuthorDescription:
          "Assistant Professor of Organisational Behaviour",
        articleAuthorFreeHtmlSection: {
          fields: {
            content: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "She teaches on the following programmes:",
                      marks: [],
                      data: {},
                    },
                  ],
                },
                {
                  nodeType: "unordered-list",
                  data: {},
                  content: [
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=B399C05B1BFB4C6DBF0799B3DF009975&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "Executive MBA",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "EMBA Global",
                              marks: [
                                {
                                  type: "bold",
                                },
                              ],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=BCBF6DE6E92D48BDAD85759D27DED1A8&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "MBA",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=02347F89689749B1A6A6C3E6AD225046&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "Leading Teams for Emerging Leaders",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                    {
                      nodeType: "list-item",
                      data: {},
                      content: [
                        {
                          nodeType: "paragraph",
                          data: {},
                          content: [
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                            {
                              nodeType: "hyperlink",
                              data: {
                                uri: "http://webm.uat.london.edu/sitecore/shell/Controls/Rich%20Text%20Editor/~/link.aspx?_id=4844B50B7C15415DAF12BBAE88637D8A&_z=z",
                              },
                              content: [
                                {
                                  nodeType: "text",
                                  value: "PhD",
                                  marks: [
                                    {
                                      type: "bold",
                                    },
                                  ],
                                  data: {},
                                },
                              ],
                            },
                            {
                              nodeType: "text",
                              value: "",
                              marks: [],
                              data: {},
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "",
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          },
        },
        articleAuthorViewArticlesCtaText: "View articles",
      },
    },
  ],
};

export const useBSRContentPages = () => useContext(BSRContentPageContext);
