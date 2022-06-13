import React from "react";

export const Footer = () => {
  return (
    <footer>
      <section className="bg-gray-100 shadow p-4 md:p-6 md:items-center md:justify-between md:flex">
        <span className="text-gray-500 text-sm sm:text-center">
          © 2022 Windup
        </span>
        <ul className="text-gray-500 flex flex-wrap items-center mt-3 text-sm sm:mt-0">
          <li>
            <a
              href="https://github.com/windup/windup/blob/master/LICENSE.txt"
              className="mr-4 hover:underline md:mr-6"
            >
              License
            </a>
          </li>
        </ul>
      </section>      
    </footer>
  );
};
