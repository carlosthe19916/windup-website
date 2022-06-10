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
      <div>
        <div id="top" tabIndex="-1"></div>
        <a className="light skip-to-content" href="#main">
          skip to main content
        </a>
        <div className="flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title || `Title`} />
          <main id="main" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
