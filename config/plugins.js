module.exports = ({ env }) => ({
  // graphql: {
  //   config: {
  //     endpoint: "/graphql",
  //     shadowCRUD: true,
  //     playgroundAlways: false,
  //     depthLimit: 7,
  //     amountLimit: 100,
  //     apolloServer: {
  //       tracing: false,
  //     },
  //   },
  // },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::page.page"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::page.page": ["MyField"],
      },
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {
        // ...
      },
    },
  },
});
