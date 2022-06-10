import * as React from "react";

import WidowControl from "../components/widow-control";
import Seo from "../components/seo";
import { ReactComponent as HomeBanner } from "../images/konveyor.svg";

const IndexPage = () => {
  const benefits = [
    {
      title: "Automated source code analysis",
      description:
        "You can select which type of transformations you would like to analyze for. You can decide to exclude certain packages and set some advanced options if needed. Windup will start decompiling your application binaries, and analyze the code against your desired migration paths, and create a powerful set of reports.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Understand application dependencies and shared code",
      description:
        "When dealing with large application portfolios, it is critical to understand code dependencies, but also code that is shared between multiple applications. MTA automatically detects and visualizes these dependencies for you.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
    },
    {
      title: "Understand migration challenges and support effort estimation",
      description:
        "It allows you to browse the source code for identified migration tasks, and gives inline hints with suggestions and recommendations. That not only saves teams a lot of time you would otherwise spend on analysis, but also minimizes the risk.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Support for popular IDEs",
      description:
        "Once you’re starting the actual transformation, you will want to switch to your favorite IDE. We provide a range of IDE plugins such as CodeReady Studio / Eclipse, CodeReady Workspace / Eclipse Che, and a Visual Studio Code Extension. The plugins come with all the reporting capabilities of the Web Console, plus additional features such as a task list, support for automatic code changes, and a guided rules editor to easily create new rules based on newly identified migration challenges, so these can be shared with the rest of the team or contributed upstream.",
      image: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Seo />

      <section className="bg-slate-700 text-white light overflow-hidden border-b border-base-300 dark:border-slate-800 relative before:absolute before:bg-hero-waves before:pointer-events-none before:hidden lg:before:flex before:text-transparent before:w-full before:h-full before:bg-left-bottom before:bg-repeat-x">
        <div className="page-wrapper flex flex-col lg:flex-row gap-8 items-center py-8 md:py-16 lg:pt-24 lg:pb-24">
          <div className="max-w-[55ch] lg:w-2/5">
            <h1 className="font-headings font-bold text-3xl md:text-4xl lg:text-5xl text-base-200">
              <WidowControl text="Modernize and migrate applications" />
            </h1>
            <p className="mb-4 text-lg lg:text-xl text-base-600 lg:leading-relaxed max-w-[50ch] md:max-w-none text-base-200 my-6 lg:my-8">
              Windup is an assembly of tools that support large-scale Java
              application modernization and migration projects across a broad
              range of transformations and use cases. It accelerates application
              code analysis, supports effort estimation, accelerates code
              migration, and helps you move applications to the cloud and
              containers.
            </p>
          </div>
          <div className="w-full lg:w-3/5">
            <HomeBanner
              alt="Use Konveyor tools to assess and rehost, replatform, or refactor existing applications"
              className="banner"
            />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-800 z-0 py-12 md:pt-10 md:pb-24 lg:pt-10 relative dark:after:opacity-60 after:z-[-1] after:text-transparent after:bg-wave-pattern after:rotate-180 after:bg-no-repeat after:w-full after:absolute after:h-full after:top-0 after:bg-left-top after:scale-x-[-1]">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-slate-600 dark:text-slate-100 font-semibold tracking-wide uppercase">
                features and benefits
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                An automated scalable migration tool
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-slate-500 text-white dark:bg-slate-400">
                        {benefit.image}
                      </div>
                      <p className="ml-16 text-lg font-bold leading-6 font-medium text-gray-900 dark:text-gray-400">
                        {benefit.title}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-100">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
