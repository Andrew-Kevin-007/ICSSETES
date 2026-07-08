import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page Not Found");
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="my-24 text-center">
        <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
        <p className="mb-6 text-lg">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
