import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ArrowRightCircle } from "react-feather";
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

      const link_url_with_prefix = process.env.GATSBY_PATH_PREFIX
        ? process.env.GATSBY_PATH_PREFIX + link_url
        : link_url;

      return (
        <>
          {helloBarYaml === null || DateTime.fromISO(end_date) < now ? (
            <></>
          ) : (
            <div
              className={`p-2 flex gap-6 items-center justify-between md:justify-center bg-${background_color}-200`}
            >
              <span className={`text-${background_color}-800`}>
                <WidowControl text={title} />
              </span>
              <div className="hidden md:block !px-2 !py-1 !font-normal order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href={link_url_with_prefix}
                  className={`flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-${background_color}-600 hover:bg-${background_color}-50 bg-white`}
                >
                  {link_text}
                </a>
              </div>
              <IconBox
                className="md:hidden"
                url={link_url_with_prefix}
                icon={<ArrowRightCircle alt="Read more" />}
                titleText={link_text}
              />
            </div>
          )}
        </>
      );
    }}
  />
);

export default HelloBar;
