import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-red-800 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="h-8 mr-3">
                <img src="/ICSSETES.jpg" alt="ICSSETES-26 logo" className="h-9" />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
               ICSSETES-26
              </span>
            </Link>
            <p className="my-4 max-w-xs text-white">
            International Conference on Sustainable Solutions in Engineering Technologies and Earth Science-ICSSETES-26 
            </p>
            {/**<div className="w-fit bg-gray-50 flex justify-center items-center pl-1 pr-2 rounded-md">
              <img
                src=""
                alt="Publication  Logo"
                className="w-[130px] h-[60px] object-cover"
              />
            </div>
            */}
          </div>
          {/**<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Important
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Dates</a>
                </li>

                <li>
                  <a className="hover:underline">Downloads</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Resources
              </h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a className="hover:underline">Register</a>
                </li>
                <li>
                  <a className="hover:underline">Guidelines</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white underline">
                Latest
              </h2>
              <ul className="text-gray-200 font-mediums">
                <li className="mb-4">
                  <a className="hover:underline">Speakers</a>
                </li>
                <li>
                  <a className="hover:underline">Committee</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr className="my-3 border-red-400 sm:mx-auto dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-100">
            <span className="mt-2 py-3 inline-block">
              Department Of Electronics and Communication Engineering, ITSEC
            </span>
            {/*<p className="py-1 block">
              Developed by
              <a href="#"> ABHISHEK PATEL </a>
              
            </p>*/}
          </span>
          <div className="flex mt-4 space-x-6 text-2xl text-white sm:justify-center sm:mt-0">
            <a
              href="https://x.com/abhishek_p91?t=pedAQx-jG6yuX9f-gGRKtg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="cursor-pointer grow-on-hover hover:text-sky-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                </g>
              </svg>
            </a>
            <a href="tel:+91-9120366803" aria-label="icac3n phone">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="cursor-pointer  grow-on-hover hover:text-emerald-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"></path>
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-patel-49354a258/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="cursor-pointer grow-on-hover hover:text-indigo-700"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.135 1.445-2.135 2.939v5.667H9.358V9h3.408v1.561h.048c.476-.9 1.637-1.85 3.368-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286h-.002zm-14.68-.002H5.007V9H8.51v11.45H5.767zm1.37-13.057c-1.097 0-1.983-.889-1.983-1.985s.886-1.984 1.983-1.984c1.096 0 1.984.888 1.984 1.984s-.888 1.985-1.984 1.985H7.136z"></path>
                </g>
            </svg>

            </a>
            <a href="mailto:icssetes2026.its@gmail.com" aria-label="ICSSETES mail">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="cursor-pointer  grow-on-hover hover:text-amber-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
