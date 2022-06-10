import * as React from "react";

const AboutPage = () => {
  return (
    <>
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Downloads</h1>
        </div>
      </header>

      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0 not-prose relative  rounded-xl overflow-hidden dark:bg-slate-800/25">
            <div class="relative rounded-xl overflow-auto">
              <h1 className="text-2xl font-bold">Server</h1>
              <table class="border-collapse table-auto w-full text-sm">
                <tbody className="">
                  <tr>
                    <td className="text-2xl">Web Console</td>
                    <td>Local install & OpenShift</td>
                    <td>1961</td>
                  </tr>
                  <tr>
                    <td>Migration Toolkit CLI</td>
                    <td>Command Line Interface</td>
                    <td>1972</td>
                  </tr>
                  <tr>
                    <td>IDE Plugin Repository</td>
                    <td>IDE Plugin Repository</td>
                    <td>1975</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0 not-prose relative  rounded-xl overflow-hidden dark:bg-slate-800/25">
            <div class="relative rounded-xl overflow-auto">
              <h1 className="text-2xl font-bold">Quickstart</h1>
              <table class="border-collapse table-auto w-full text-sm">
                <tbody className="">
                  <tr>
                    <td className="text-2xl">Web Console</td>
                    <td>Local install & OpenShift</td>
                    <td>1961</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
