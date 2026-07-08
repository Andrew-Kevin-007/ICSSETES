import Body from "./Body";
import Intro from "./Intro";
import Swiper from "./FooterSpeaker";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle();
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mx-8">
        <Intro />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10 "></hr>
        <Body />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10"></hr>
        <Swiper />
      </div>
    </div>
  );
};
export default Home;
