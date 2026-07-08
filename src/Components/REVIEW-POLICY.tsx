import usePageTitle from "../hooks/usePageTitle";

const REVIEW_POLICY = () => {
  usePageTitle("Review Policy");
  const height200px = {
    height:300
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose mx-4 my-8 w-[700px]">
          <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight border-l-4 border-red-600 pl-4 pr-4">
          REVIEW PROCESS
          </h1>
          <p className="text-justify mt-5 mb-5">
              Any manuscript shall not be accepted or published in this conference without prior peer review. There
              will be a review process of manuscripts by three independent reputed reviewers with PhD degree who
              are conversant in the pertinent subject area.
           </p>       
          <p className="text-justify mt-5 mb-5">
              Our blind peer review process follows the following steps and gives status of paper Accepted/ Accepted
              with minor revision / Rejected within stipulated time period.
            </p>
            <p className="text-justify mt-5 mb-5 ">
              <b>Step 1:</b> Author submits his/her manuscript to us by Microsoft cmt portal. First screening of all the
              manuscripts will be done on the basis of Scope/Plagiarism of the manuscript.
              </p>
              <p className="text-justify mt-5 mb-5 ">
              <b>Step 2: </b>In the second screening the manuscript goes to 3 reviewers allotted through conference
              management system (Microsoft cmt). The manuscript allotted to the reviewers as per their area of
              expertise. The review is blind review.
              </p>
              <p className="text-justify mt-5 mb-5 ">
              <b>Step 3:</b> Based on the reviewer comments the decisions are made whose details are given below-
              </p>
              <p className="text-justify ">
              • All 3 reviewers accepted the status of paper will be accepted.
              </p>
              <p className="text-justify ">
              • 2 reviewer accepted and 1 rejected the status of paper will be minor changes.
              </p>
              <p className="text-justify">
              • 1 reviewer accepted and 2 rejected the status of paper will be major changes.
              </p>
              <p className="text-justify ">
              • All 3 reviewer rejected the status of paper will be rejected.
              </p>
              <p className="text-justify mt-5 mb-5 ">
              <b>Step 4:</b> If paper is accepted then Author will deposit fees to given account detail by editor. Author will
              send scan copy of <b>copy right form</b> (format can download by the website) by mail to editor.
              </p>
              <p className="text-justify mt-5 mb-5 ">
              <b>Step 5:</b> Publisher will publish the accepted paper if it is presented in the conference in next coming
            issue and give the information to author.
            </p>
            <br>
          </br>
          <div>
            <a
              href="/REVIEW_PROCESS.pdf" target="_blank"
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
            >
              {" "}
              Download PDF
            </a>
          </div>
          <div style={height200px}>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default REVIEW_POLICY;
