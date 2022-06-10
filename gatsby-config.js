const prodPlugins = process.env.NODE_ENV === "production" ? [] : [];
const buildEnv = process.env.GATSBY_BUILD_ENV
  ? process.env.GATSBY_BUILD_ENV
  : process.env.NODE_ENV;

module.exports = {
  pathPrefix: "/windup-website",
  siteMetadata: {
    title: `Windup Community`,
    description: `Windup description`,
    author: `Windup Community`,
    twitterCreator: `windup`,
    siteUrl: `https://windup.github.io/`,
    image: `/images/home-social-media.jpg`,
    postsPerPage: 7,
    socialMedia: [
      {
        platform: `slack`,
        url: `https://kubernetes.slack.com/archives/CR85S82A2`,
        title: `Join us on Slack`,
      },
      {
        platform: `github`,
        url: `https://github.com/konveyor`,
        title: `Check out our GitHub repository`,
      },
      {
        platform: `twitter`,
        url: `https://twitter.com/Konveyor_io`,
        title: `Connect with us on Twitter`,
      },
    ],
  },
  plugins: [
    ...prodPlugins,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-svgr",
    "gatsby-plugin-layout",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => buildEnv,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: "/" }],
            sitemap: null,
            host: null,
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
                disallow: ["/tags/"],
              },
            ],
          },
        },
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve(`./src/templates/page.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              icon: `<svg aria-hidden="true" version="1.1" viewBox="0 0 16 16" ><path fill="currentColor" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: "anchor",
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              className: "table-of-contents",
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2400,
              withWebp: true,
              loading: `lazy`,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false, //messes up when lines wrap
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-awesome-pagination`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `tags`, `content`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          Mdx: {
            title: (node) => node.frontmatter.title,
            slug: (node) => node.fields.slug,
            description: (node) => node.frontmatter.description,
            tags: (node) => node.frontmatter.tags,
            content: (node) => node.rawBody,
            hidefromsearch: (node) => node.frontmatter.hidefromsearch,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.hidefromsearch !== true,
      },
    },
  ],
};
