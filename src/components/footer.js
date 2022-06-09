import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 shadow p-4 md:p-6 md:flex md:items-center md:justify-between">
      <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-center">
        © 2022 Windup
      </span>
      <ul className="text-gray-500 dark:text-gray-400 flex flex-wrap items-center mt-3 text-sm sm:mt-0">
        <li>
          <a
            href="https://github.com/windup/windup/blob/master/LICENSE.txt"
            className="mr-4 hover:underline md:mr-6"
          >
            License
          </a>
        </li>
      </ul>
    </footer>
  );
};
