import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 p-4 w-full bg-opacity-30 bg-white md:flex md:items-center md:justify-between md:p-6">
      <span className="flex justify-center text-sm text-gray-800 sm:text-center ">
        <strong>methical</strong>&nbsp; by Goldy Mariz Lunesa via &nbsp;
        <a
          href="https://gmlunesa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-purple-500 hover:text-purple-500 hover:decoration-purple-600"
        >
          @gmlunesa
        </a>
      </span>
      <ul className="flex flex-wrap justify-center items-center mt-3 text-sm text-gray-700 sm:mt-0">
        <li>
          <a
            href="https://gmlunesa.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:underline md:mr-6 "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gmlunesa/methical-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://gmlunesa.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            Blog
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
