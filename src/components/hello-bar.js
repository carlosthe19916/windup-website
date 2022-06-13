import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ArrowRightCircle, SpeakerphoneIcon, XIcon } from "react-feather";
import { DateTime } from "luxon";
import WidowControl from "./widow-control";
import IconBox from "./iconbox";

const now = DateTime.now();

const HelloBar = () => (
  <StaticQuery
    query={graphql`
      {
        helloBarYaml(display: { eq: true }) {
          background_color
          end_date
          link_text
          link_url
          title
        }
      }
    `}
    render={({ helloBarYaml }) => {
      const { background_color, end_date, link_text, link_url, title } =
        helloBarYaml;

      return (
        <>
          {helloBarYaml === null || DateTime.fromISO(end_date) < now ? (
            <></>
          ) : (
            <div>
              <div
                className={`p-2 flex gap-6 items-center justify-between md:justify-center bg-${background_color}-300`}
              >
                <span className={`text-${background_color}-800`}>
                  <WidowControl text={title} />
                </span>
                <div className="hidden md:block !px-2 !py-1 !font-normal order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <a
                    href={link_url}
                    className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-${background_color}-600 hover:bg-${background_color}-50 bg-white`}
                  >
                    {link_text}
                  </a>
                </div>
                <IconBox
                  className="md:hidden"
                  url={link_url}
                  icon={<ArrowRightCircle alt="Read more" />}
                  titleText={link_text}
                />
              </div>

              {/* <div className="bg-indigo-600">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <p className="ml-3 font-medium text-white truncate">
                        <span className="md:hidden">Short title</span>
                        <span className="hidden md:inline">Title</span>
                      </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                      <a
                        href="/"
                        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                      >
                        link title
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          )}
        </>
      );
    }}
  />
);

export default HelloBar;
