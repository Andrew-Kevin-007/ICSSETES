import usePageTitle from "../hooks/usePageTitle";

const Guidelines = () => {
  usePageTitle("Guidelines");
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4 my-8">
        <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight">
          Guidelines for Paper Submission
        </h1>
        <h4 className="text-tw-prose-headings font-extrabold text-1x2 mb-4 leading-tight">
          International Conference on Sustainable Solutions in Engineering Technologies and Earth 
          Science (ICSSETES-26) <br></br> Organized by I.T.S Engineering College, Greater Noida (Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow)
        </h4>
        <p className="text-justify mb-5 mt-5">
        Authors are invited to submit original, unpublished, and high-quality research papers presenting innovative 
        ideas, developments, and findings in the fields of <b>Sustainable Engineering Technologies and Earth Science</b>. 
        All submissions must adhere to the following guidelines:
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>1. Paper Format</b><br></br>
          • Manuscripts must be prepared in the<b> IEEE two-column format</b> using <b>A4 size paper</b>.<br></br>
          • The paper length should not exceed <b>6 pages</b>, including figures, tables, and references.<br></br>
          • Additional pages may be permitted with nominal charges (if applicable).<br></br>
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>2. File Type</b><br></br>
          • Papers must be submitted in <b>PDF format</b> only.<br></br>
          • The submitted file should be <b>IEEE Xplore compatible</b> and free from security restrictions 
          or formatting errors.<br></br>
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>3. Template</b><br></br>
         Authors are required to use the official IEEE conference paper template only. The IEEE paper template 
         in <b>Microsoft Word format</b> can be downloaded from the link given below.         
        </p>
        <div>
            <a
              href="/TEMPLATE_ICSSETES_Paper_ID.docx" target="_blank"
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
            >
              {" "}
              Download Conference Template
            </a>
          </div>
          <p className="text-justify mt-5 mb-5">
          <b>4. Plagiarism Policy </b><br></br>
          • All manuscripts will be screened for plagiarism using Turnitin software.<br></br>
          • If <b>more than 10% </b>similarity is detected (including<b> web or AI-generated content</b>), 
             the paper will be <b>rejected</b>, and the author(s) will be informed.<br></br>
          • Authors must ensure proper citation of all referenced materials.<br></br>
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>5. Submission Process </b><br></br>
          • Papers must be submitted electronically through the conference management system (Microsoft cmt). 
          The authors will need to register their email with Microsoft CMT before submitting there paper.
          Authors are requested to submit their papers using the link provided below.<br></br> <br></br>
          <a
            href="https://cmt3.research.microsoft.com/ICSSETES2026/Submission/Index"
            className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
          >
            Submit a Paper
          </a>
          <br></br>
          • Each paper should include the <b>title, author(s) name(s), affiliations, and corresponding author’s email ID</b>.<br></br>
          • Authors must select the appropriate <b>conference track </b>relevant to their paper.<br></br>
          • For the <b>double-blind review process</b>, author names and affiliations must not appear in the initial manuscript 
          submission.<br></br>
         </p>
        <p className="text-justify mt-5 mb-5">
          <b>6. Review Process </b><br></br>
          All submitted papers will undergo a <b>double-blind peer-review </b>by the Technical Program Committee 
          and domain experts. <br></br>
          The review will be based on:<br></br>
          • Originality and technical depth<br></br>
          • IRelevance to conference themes<br></br>
          • Clarity of presentation and research contribution<br></br>
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>7. Acceptance and Publication </b><br></br>
          • Authors of accepted papers must <b>revise and resubmit </b>their manuscripts according to reviewer comments.<br></br>
          • At least one author must register and present the paper during the conference.<br></br>
          • Accepted and presented papers will be <b>submitted to IEEE Xplore Digital Library </b>for
             publication (subject to IEEE approval and compliance).<br></br>
        </p>
          <p className="text-justify mt-5 mb-5">
            <b>7. Acceptance and Publication </b><br></br>
          • Authors of accepted papers must <b>revise and resubmit </b>their manuscripts according to reviewer comments.<br></br>
          • At least one author must register and present the paper during the conference.<br></br>
          • Accepted and presented papers will be <b>submitted to IEEE Xplore Digital Library </b>for
             publication (subject to IEEE approval and compliance).<br></br> </p>
                          
             
          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-lg mt-8 mb-4 leading-relaxed">
            Important Note
          </h2>
          <ol className="list-decimal pl-6 mb-3">
            <li className="mt-2 mb-2 pl-1">
             Papers not conforming to the IEEE format or plagiarism policy will be <b>rejected without review</b>.
            </li>
            <li className="mt-2 mb-2 pl-1">
              Transfer of <b>e-copyright and presenting paper</b> in conference is mandatory.
            </li>
            <li className="mt-2 mb-2 pl-1">
              For any submission-related queries, please contact: 📧 icssetes.its@gmail.com
            </li>
          </ol>
        
      </div>
    </div>
  );
};
export default Guidelines;
