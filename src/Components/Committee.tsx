import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const Committee = () => {
  usePageTitle("Committee");
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4 my-8">
        <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight">
          Committee
        </h1>
        <p className="mt-5 mb-8">
          Explore the teams behind ICSSETES-26:
        </p>
        <ul className="space-y-4">
          <li>
            <Link
              to="/committee/organizing-committee"
              className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 no-underline"
            >
              Organizing Committee
            </Link>
          </li>
          <li>
            <Link
              to="/committee/technical-program-committee"
              className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 no-underline"
            >
              Technical Program Committee
            </Link>
          </li>
          <li>
            <Link
              to="/committee/advisory-board"
              className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 no-underline"
            >
              Advisory Board
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Committee;
