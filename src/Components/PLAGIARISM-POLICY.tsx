import usePageTitle from "../hooks/usePageTitle";

const PLAGIARISM_POLICY = () => {
  usePageTitle("Plagiarism Policy");
  const height200px = {
    height:300
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose mx-4 my-8 w-[700px]">
          <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight border-l-4 border-red-600 pl-4 pr-4">
          PLAGIARISM POLICY
          </h1>
          <p className="text-justify mt-5 mb-5 "> Plagiarism is copying someone else's previous ideas, processes, results, or words without
             giving credit to the original author and source. It is a serious academic misconduct that
              undermines the principles of integrity, honesty, and intellectual rigor in scholarly 
              endeavours. Someone commits plagiarism when they intentionally or knowingly replicate 
              the work of others, or when they reproduce content without giving proper credit.</p>
          <p className="text-justify mt-5 mb-5 "> 
             If plagiarism is detected by any member of the editorial board, reviewer, or editor at any 
             stage of the article processing—whether before or after acceptance, during editing, or at 
             the page-proof stage—the author(s) will be immediately notified. They will be required to
              revise the manuscript appropriately or provide proper citations for the original sources. 
              <b> If more than 10% </b>of the paper is found to be plagiarized, from either <b>web or 
              AI-generated content</b>, the manuscript will be rejected, and the same will be 
              communicated to the author(s). The Turnitin software is utilized to evaluate the 
              similarity index and determine the plagiarism percentage for both web and AI sources.
           </p>
           <p className="text-justify mt-5 mb-5 "> 
           In case a manuscript is found to be plagiarized after publication, the Editor-in-Chief will 
           conduct preliminary investigation, may be with the help of a suitable committee constituted 
           for the purpose. If the manuscript is found to be plagiarized beyond the acceptable limits, 
           the journal will contact the author’s Institute / College / University and Funding Agency,
           if any.
          </p>
          <p className="text-justify mt-5 mb-5 ">
          <b>The following types of plagiarism are considered by us:</b>
          <br></br>
          <b>1. Full Plagiarism: </b>Previously published content without any changes to the text, 
          idea and grammar is considered as full plagiarism. It involves presenting exact text from a 
          source as one’s own.
          <br></br>
          <b>2. Partial Plagiarism: </b>If content is a mixture from multiple different sources, where
           the author has extensively rephrased text, then it is known as partial plagiarism.
           <br></br>
          <b>3. Self-Plagiarism: </b>Self-Plagiarism: When an author reuses complete or portions of their 
          pre-published research, then it is known as self-plagiarism. Complete self-plagiarism is a case 
          when an author republishes their own previously published work in a new journal
          </p>
          <p className="text-justify mt-5 mb-5 ">
          <b>AI-Generated Research Content:</b></p>
          <p className="text-justify mt-5 mb-5 ">
          Plagiarism involves the dishonest practice of utilizing another person's work or thoughts
           without acknowledging the source. Although AI writing programs can produce text that is 
           indistinguishable from that written by humans, they lack the capability to independently 
           carry out research, develop unique concepts, or derive significant insights. Depending 
           exclusively on AI for research paper creation brings up issues regarding the genuineness 
           and inventiveness of the material, rendering it unfit for submission in reputable scholarly 
           publications. <b>Hence, we strictly xero tolerance for AI based plagiarism.</b>
          </p>
          <br></br><br></br>
          <div>
            <a
              href="/PLAGIARISM-POLICY2.pdf" target="_blank"
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
export default PLAGIARISM_POLICY;
