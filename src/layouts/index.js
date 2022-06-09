import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="min-h-full">
        <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        {children}
        <Footer />
      </div>
    </>
  );
}
