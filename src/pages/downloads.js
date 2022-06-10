import * as React from "react";
import { graphql } from "gatsby";
import { Download, Link } from "react-feather";

const AboutPage = ({ data }) => {
  return (
    <div>
      <section class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Downloads{" "}
            <span className="bg-slate-300 rounded p-2">{data.site.siteMetadata.product.latestVersion}</span>
          </h1>
        </div>
      </section>

      <section>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Server</h1>
          <div class="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div class="relative overflow-auto">
              <table class="table-auto w-full">
                <tbody className="">
                  {data.site.siteMetadata.product.downloads.map(
                    (element, index) => (
                      <tr key={index} className="border">
                        <td className="text-2xl p-2">{element.title}</td>
                        <td className="text-1xl">{element.description}</td>
                        <td>
                          <a className="flex" href={element.downloadURL}>
                            <Download />
                            &nbsp;Download
                          </a>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">IDE plugins</h1>
          <div class="px-4 py-6 sm:px-0 not-prose relative overflow-hidden ">
            <div class="relative overflow-auto">
              <table class="table-auto w-full">
                <tbody className="">
                  {data.site.siteMetadata.product.idePlugins.map(
                    (element, index) => (
                      <tr key={index} className="border">
                        <td className="text-2xl p-2">{element.title}</td>
                        <td>
                          <a className="flex" href={element.linkURL}>
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
        </div>
      </section>
    </div>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        product {
          latestVersion
          downloads {
            downloadURL
            title
            description
          }
          idePlugins {
            linkURL
            title
          }
        }
      }
    }
  }
`;

export default AboutPage;
