module.exports = {
  siteMetadata: {
    title: `Windup Community`,
    description: `Open source community helping others modernize and migrate apps to the hybrid cloud with open source tools. Practitioners also advise how to deconstruct monoliths and adopt containers and Kubernetes via Konveyor Community meetups.`,
    author: `Windup Community`,
    twitterCreator: `windup`,
    siteUrl: `https://windup.github.io/`,
    image: `/images/home-social-media.jpg`,
  },
  plugins: [
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
  ],
};
