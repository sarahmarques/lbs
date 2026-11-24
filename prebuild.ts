import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const fs = require("fs");
import cacheGlobals from "./utils/cms/cacheGlobals";
import buildRobots from "./utils/cms/robots";
import { buildSitemap } from "./utils/cms/sitemap";
import Parser from "./utils/redirects/parser";
const generateRedirectFileFromUserRoles = require("./utils/redirects/generateNetlifyRedirects");

const parser = new Parser();
parser.perform();
cacheGlobals(
  ["siteHeader", "footer", "siteSettings", "subscribeThink"],
  "./pages/globals.json"
);
buildSitemap();
buildRobots();

const filename = "_redirects";
const token = process.env.CONTENTFUL_DELIVERY_API_KEY;
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

const query = `
query ($skip: Int) {
  basePageTemplateCollection (
    where:{permittedRolesCollection_exists:true}
    limit: 50
    skip: $skip
  ) {
    items {
      permittedRolesCollection {
        items {
          name
          auth0Role
        }
      }
      linkedFrom {
        entryCollection {
          items {
            ... on EeLandingPage {
              slug
            }
            ... on NewsDetail {
              slug
            }
            ... on ProgrammeDetails {
              slug
            }
            ... on StoryPage {
              slug
            }
            ... on BsrContentPage {
              slug
            }
            ... on Content2019Page {
              slug
            }
          }
        }
      }
    }
  }
}
`;

// empty the file before creating redirects
fs.writeFileSync("./public/_redirects", "", "utf8", (err) => {
  if (err) throw new Error(err);
});
generateRedirectFileFromUserRoles(endpoint, query, filename, token);
