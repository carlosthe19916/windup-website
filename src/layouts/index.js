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
      <div className="font-body text-base-700 flex flex-col min-h-full">
        <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        <main id="main" className="w-full mx-auto mb-auto h-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
