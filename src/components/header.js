import React, { useReducer } from "react";
import { Link } from "gatsby";
import { ReactComponent as Logo } from "../images/windup-logo.svg";
import { ReactComponent as LogoDark } from "../images/windup-logo-color.svg";
import HelloBar from "./hello-bar";

export const Header = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useReducer(
    (prev) => !prev,
    false
  );

  const MenuItems = [
    // {
    //   path: "/windup-documentation/",
    //   title: "Docs",
    //   openNewTab: true,
    // },
    {
      path: "/blog/getting-started/",
      title: "Get started",
    },
    {
      path: "/blog/",
      title: "Blog",
    },
    {
      path: "/downloads/",
      title: "Downloads",
    },
  ];

  return (
    <>
      <HelloBar />
      <nav className="bg-slate-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link className="" to="/">
                  <Logo className="h-16 w-28 dark:hidden pb-2" alt="Logo" />
                  <LogoDark
                    className="h-16 w-28 hidden dark:block pb-2"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {MenuItems.map((menu, index) =>
                    menu.openNewTab ? (
                      <a
                        key={index}
                        href={menu.path}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium border-transparent flex-1 whitespace-nowrap border-b-2"
                      >
                        {menu.title}
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={menu.path}
                        className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium border-transparent flex-1 whitespace-nowrap border-b-2"
                      >
                        {menu.title}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              {/* <div className="ml-4 flex items-center md:ml-6">
                <ColorModeToggle />
              </div> */}
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <div className="inline-flex p-1">
                <ColorModeToggle />
              </div> */}
              <div>
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {MenuItems.map((menu, index) => (
                <Link
                  to={menu.path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
