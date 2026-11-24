import { ProgrammeProvider } from "@components/__templates__/ProgrammeDetailsPage/ProgrammeDetailsProvider";
import { SettingsProvider } from "@utilities/context/settings";
import formatCoveoMetadata, {
  formatPublicationAuthors,
} from "@utilities/formatCoveoMetadata";
import { request } from "@utilities/graphql/request";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Components from "../components/__Components__/Components";
import { fetchEntries, getPageProps } from "../utils/cms/ContentfulService";
import { GetProgrammeImportData } from "./api/getProgrammeImportData";
import { GetSettings } from "./api/getSettings";

const HOMEPAGE_SLUG = "home";

export default function Page({
  globalContent,
  pageContent,
  settings,
  programmeData,
  preview,
}) {
  let coveoMetadata;

  coveoMetadata = {
    templateName: pageContent?.component,
  };

  switch (pageContent?.component) {
    case "publicationDetail":
      coveoMetadata = {
        ...coveoMetadata,
        fields: {
          publicationAuthors: formatPublicationAuthors(
            pageContent?.publicationAuthors
          ),
          publicationSubjectAreasList: formatCoveoMetadata(
            pageContent?.publicationSubjectAreasList
          ),
          publicationYear: pageContent?.publicationYear,
          publicationResearchCenterNameList: formatCoveoMetadata(
            pageContent?.publicationResearchCenterNameList
          ),
        },
      };
      break;
  }

  function getSubNavLinks(entries) {
    if (entries) {
      let anchorHeadings = [];
      for (let key in entries) {
        if (Array.isArray(entries[key])) {
          anchorHeadings = anchorHeadings.concat(
            entries[key]
              .filter((entry) => {
                if (
                  entry?.sys?.contentType?.sys?.id === "anchorHeading" ||
                  entry?.sys?.contentType?.sys?.id === "tabbedContent"
                ) {
                  return entry.fields;
                }
              })
              .map((entry) => entry.fields)
          );
        } else if (entries[key] && typeof entries[key] === "object") {
          anchorHeadings = anchorHeadings.concat(getSubNavLinks(entries[key]));
        }
      }
      return anchorHeadings;
    }
    return [];
  }

  return (
    <>
      <SettingsProvider
        settings={{ currentPageId: pageContent.uid, ...settings }}
      >
        <ProgrammeProvider data={{ ...programmeData }}>
          <Layout
            subNavLinks={getSubNavLinks(pageContent)}
            globalContent={globalContent}
            pageMeta={pageContent.basePageTemplate?.fields}
            slug={`${process.env.NEXT_PUBLIC_URL}/${pageContent.slug}`}
            title={pageContent.basePageTemplate?.fields?.pageTitle}
            headerImage={
              pageContent?.headerBanner?.fields?.desktopImage?.fields?.image
                ?.fields?.file?.url
            }
            coveoMetadata={coveoMetadata}
            tags={
              pageContent?.basePageTemplate?.fields?.taxonomyAttributes || []
            }
          >
            {Components(pageContent, globalContent, globalContent)}
          </Layout>
        </ProgrammeProvider>
      </SettingsProvider>

      {!!preview && (
        <div className="preview-mode">
          Preview Mode Enabled
          <Link prefetch={false} href="/api/preview/exit">
            Exit Preview
          </Link>
        </div>
      )}
    </>
  );
}

const getCriticalConfig = async (critical) => {
  return await Promise.all(
    critical[0].fields.contentTypesConfig.flatMap(async (config) => {
      var entries = await fetchEntries({
        content_type: config.fields.contentType,
        order: "-sys.createdAt",
        limit: config.fields.numberOfEntries,
      });

      return !!entries?.length
        ? entries.map((entry: any) => entry.fields.slug)
        : [];
    })
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const pages = await fetchEntries({
    content_type: "content",
  });

  // T1 - EE Landing Pages
  const EELandingPages = await fetchEntries({
    content_type: "eeLandingPage",
  });

  // T3 - Content 2019 Page
  const Content2019Pages = await fetchEntries({
    content_type: "content2019Page",
  });

  // T4 - Story Pages
  const StoryPages = await fetchEntries({
    content_type: "storyPage",
  });

  // T6 - News Detail
  const NewsDetailPages = await fetchEntries({
    content_type: "newsDetail",
  });

  const EventsDetailPages = await fetchEntries({
    content_type: "eventsDetail",
  });

  // T7 - BSR Content Page
  const BSRContentPages = await fetchEntries({
    content_type: "bsrContentPage",
  });

  // T11 - Publication Details Pages
  const PublicationDetailPages = await fetchEntries({
    content_type: "publicationDetail",
  });

  // T17 - Student Profile Detail
  const StudentProfileDetailPages = await fetchEntries({
    content_type: "studentProfileDetail",
  });

  // T30 - Faculty Profile Detail Pages
  const FacultyProfileDetailPages = await fetchEntries({
    content_type: "facultyProfileDetail",
  });

  // T22 - Contributor Profile Detail Pages
  const ContributorProfileDetailPages = await fetchEntries({
    content_type: "contributorProfileDetail",
  });

  //  - EMBAG Template Pages
  const EMBAGTemplatePages = await fetchEntries({
    content_type: "embagTemplate",
  });

  const InteractSSO = await fetchEntries({
    content_type: "interactSso",
  });

  //  - Programme Details Pages
  const programmeDetailsPages = await fetchEntries({
    content_type: "programmeDetails",
  });

  const allPages = ([] as any[]).concat(
    EELandingPages,
    FacultyProfileDetailPages,
    ContributorProfileDetailPages,
    NewsDetailPages,
    InteractSSO,
    pages,
    PublicationDetailPages,
    StoryPages,
    BSRContentPages,
    StudentProfileDetailPages,
    EventsDetailPages,
    Content2019Pages,
    EMBAGTemplatePages,
    programmeDetailsPages
  );

  // Critical pages
  let criticalPaths: Array<string> = [];
  let criticalConfigPaths: Array<string> = [];
  const critical = await fetchEntries({
    content_type: "criticalRenderings",
  });

  if (!critical) return { fallback: "blocking" };

  if (critical[0]) {
    criticalConfigPaths = await getCriticalConfig(critical);
    criticalPaths =
      critical[0].fields?.pages?.map((path) => {
        return path.fields.slug;
      }) || [];

    criticalPaths = criticalPaths.concat(criticalConfigPaths).flat();
  }

  let paths = allPages
    ?.map((page) => {
      const slugArray = page.fields.slug.split("/");
      if (page.fields.slug === "404" || page.fields.slug === "home") {
        return null;
      }
      if (!criticalPaths.includes(page.fields.slug)) {
        return null;
      }

      return { params: { slug: slugArray } };
    })
    .filter((here) => here);

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params, preview }) {
  const { slug } = params;
  let is404 = false;
  let props: any;
  const globals = require("./globals.json");

  const {
    programmeSettingsCollection,
    siteSettingsCollection,
    publicationSettingsCollection,
    courseTypeSettingCollection,
  } = await request(GetSettings);
  const programmeSettings = programmeSettingsCollection.items[0];
  const siteSettings = siteSettingsCollection.items[0];
  const publicationSettings = publicationSettingsCollection.items[0];
  const courseTypeSettings =
    courseTypeSettingCollection.items[0].linkedFrom.courseTypeSettingsCollection
      .items[0].coursesCollection.items;

  const settings = {
    programmeSettings,
    siteSettings,
    publicationSettings,
    courseTypeSettings: {
      courses: courseTypeSettings,
    },
  };

  let programmeData = {};

  try {
    props = await getPageProps({
      slug: !!slug ? slug.join("/") : HOMEPAGE_SLUG,
      contentType: [
        "bsrContentPage",
        "content",
        "content2019Page",
        "contributorProfileDetail",
        "eeLandingPage",
        "interactSso",
        "eventsDetail",
        "facultyProfileDetail",
        "newsDetail",
        "publicationDetail",
        "storyPage",
        "studentProfileDetail",
        "embagTemplate",
        "programmeDetails",
      ],
      globals: [],
      include: 5,
      allTags: globals?.tags || null,
      preview,
    });

    props.globalContent = {
      ...props.globalContent,
      ...globals,
    };

    // If this is a programme page
    const programmeType = props.pageContent.programmeTypeCode;
    if (programmeType) {
      const { programmeImportDataCollection } = await request(
        GetProgrammeImportData,
        {
          variables: { programmeType },
        }
      );

      programmeData = programmeImportDataCollection.items[0];
    }
  } catch (e) {
    is404 = true;
  }

  return {
    props: {
      ...props,
      settings,
      programmeData,
      ...(!!preview && { preview: true }),
    },
    notFound: is404,
  };
}
