import * as React from "react";
import { graphql } from "gatsby";
import { Download, Link, GitHub } from "react-feather";

const AboutPage = ({ data }) => {
  const windupVersion = data.site.siteMetadata.windup.version;

  const downloads = [
    {
      title: "CLI",
      description: "Command Line Interface",
      url: `https://repo1.maven.org/maven2/org/jboss/windup/mta-cli/${windupVersion}/mta-cli-${windupVersion}-offline.zip`,
      sha1: `https://repo1.maven.org/maven2/org/jboss/windup/mta-cli/${windupVersion}/mta-cli-${windupVersion}-offline.zip.sha1`,
    },
    {
      title: "Web Console",
      description: "Local install",
      url: `https://repo1.maven.org/maven2/org/jboss/windup/web/mta-web-distribution/${windupVersion}/mta-web-distribution-${windupVersion}-with-authentication.zip`,
      sha1: `https://repo1.maven.org/maven2/org/jboss/windup/web/mta-web-distribution/${windupVersion}/mta-web-distribution-${windupVersion}-with-authentication.zip.sha1`,
    },
  ];
  const quickstart = `https://github.com/windup/windup-quickstarts/tree/${windupVersion}`;
  const previousReleases = `https://repo1.maven.org/maven2/org/jboss/windup/`;

  return (
    <div className="text-slate-900">
      <section className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">
            Downloads{" "}
            <span className="bg-blue-400 rounded p-2">{windupVersion}</span>
          </h1>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Server</h1>
          <div className="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div className="relative overflow-auto">
              <table className="table-auto w-full">
                <tbody className="">
                  {downloads.map((element, index) => (
                    <tr key={index} className="border">
                      <td className="w-2/5 text-2xl p-2 ">{element.title}</td>
                      <td className="w-2/5 text-1xl">{element.description}</td>
                      <td className="text-sky-700">
                        <div className="flex flex-row space-x-2">
                          <a
                            className="flex hover:text-sky-900"
                            href={element.url}
                          >
                            <Download />
                            &nbsp;ZIP
                          </a>
                          <a
                            href={element.sha1}
                            download
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-sky-900"
                          >
                            (sha1)
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">IDE plugins</h1>
          <div className="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div className="relative overflow-auto">
              <table className="table-auto w-full">
                <tbody className="">
                  {data.site.siteMetadata.windup.idePlugins.map(
                    (element, index) => (
                      <tr key={index} className="border">
                        <td className="w-4/5 text-2xl p-2">{element.title}</td>
                        <td className="text-sky-700">
                          <a
                            className="flex hover:text-sky-900"
                            href={element.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Link />
                            &nbsp;Marketplace
                          </a>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Quickstarts</h1>
          <div className="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div className="relative overflow-auto">
              <table className="table-auto w-full">
                <tbody className="">
                  <tr className="border">
                    <td className="w-4/5 text-2xl p-2">Windup quickstarts</td>
                    <td className="text-sky-700">
                      <a
                        className="flex hover:text-sky-900"
                        href={quickstart}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                        &nbsp;Github
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl">
            For previous releases go{" "}
            <a
              className="text-sky-700"
              href={previousReleases}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </h1>
        </div>
      </section>
    </div>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        windup {
          version
          idePlugins {
            title
            url
          }
        }
      }
    }
  }
`;

export default AboutPage;
