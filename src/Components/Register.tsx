import usePageTitle from "../hooks/usePageTitle";

const Register = () => {
  usePageTitle("Register");
  return (
    <div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="prose mx-4 my-8 w-[700px]">
          <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mt-0 mb-2 leading-tight border-l-4 border-red-600 pl-4 pr-4">
            Registration Guidlines
          </h1>
          <p className="text-justify mb-5 mt-5">
            All authors of <b>accepted papers </b>are required to complete registration to ensure inclusion of their papers 
            in the conference proceedings and submission to the IEEE Xplore Digital Library (subject to approval).<br></br><br></br>
            Each accepted paper must be <b>registered by at least one author</b> before the deadline.
            </p>
          
          <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          <h2 className=" heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Registration Fee
          </h2>
          <img
                  src="registraion fee.png"
                  className="h-full w-full object-cover rounded-lg "
                  alt="registraion fee"
                />
                <br></br>    
         <br></br>
         {/*<table className="table-auto border border-black mx-auto mt-6 text-left rounded-lg shadow-md">
  <thead className="bg-yellow-300">
    <tr className="border-b border-black">
      <th className="p-3">Category</th>
      <th className="p-3 text-center">Indian Participants (INR)</th>
      <th className="p-3 text-center">International Participants (USD)</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-b border-black hover:bg-yellow-50">
      <td className="p-3 font-medium bg-gray-400">Student (UG/PG) Author</td>
      <td className="p-3 text-center bg-red-400">11,000</td>
      <td className="p-3 text-center  bg-orange-300">400</td>
    </tr>
    <tr className="border-b border-black hover:bg-yellow-50">
      <td className="p-3 font-medium bg-gray-400">Research Scholar / Ph.D. Author</td>
      <td className="p-3 text-center bg-red-400">11,500</td>
      <td className="p-3 text-center bg-orange-300">400</td>
    </tr>
    <tr className="border-b border-black hover:bg-yellow-50">
      <td className="p-3 font-medium bg-gray-400">Faculty / Academic Author</td>
      <td className="p-3 text-center bg-red-400">12,000</td>
      <td className="p-3 text-center  bg-orange-300">400</td>
    </tr>
    <tr className="border-b border-black hover:bg-yellow-50">
      <td className="p-3 font-medium bg-gray-400">Industry Professional</td>
      <td className="p-3 text-center bg-red-400">15,000</td>
      <td className="p-3 text-center bg-orange-300">400</td>
    </tr>
    <tr className="hover:bg-yellow-50">
      <td className="p-3 font-medium bg-gray-400">Listener / Attendee (without paper)</td>
      <td className="p-3 text-center bg-red-400">5000</td>
      <td className="p-3 text-center bg-orange-300">200</td>
    </tr>
    </tbody>
    </table>*/} 


          <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Registration Process
          </h2>
        <p className="text-justify mt-5 mb-5">
          <b>1. Paper Acceptance Notification </b><br></br>
          • Authors will receive an official acceptance email after peer review.
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>2. Fee Payment </b><br></br>
          • Registration fees must be paid through <b>online bank transfer / NEFT / UPI (details below)</b>.<br></br>
         •  Proof of payment (screenshot or receipt) must be uploaded during registration.
        <br></br><br></br>
          <b>Bank Account Details</b></p> 
                    <table className="table-auto ">
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Account Number</td>
                  <td className="p-3">88953030000253</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Account Name</td>
                  <td className="p-3">ITS Engineering College</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">IFSC Code</td>
                  <td className="p-3">CNRB0002807</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">MICR Code</td>
                  <td className="p-3">110015155</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Swift Code</td>
                  <td className="p-3">CNRBINBBDDS BIC</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Bank Name</td>
                  <td className="p-3">Canara Bank</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Account Type</td>
                  <td className="p-3">Current Account - General</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold bg-gray-100">Bank Address</td>
                  <td className="p-3">Noida, Greater Noida</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold bg-gray-100">GST No.</td>
                  <td className="p-3">09AAATD0730CIZD</td>
                </tr>
              </tbody>
            </table>
            <p className="text-justify mt-5 mb-5">
            
          <b>3. Registration Form Submission</b><br></br>
          • Fill out the<b> online registration form</b> available at:
          <div>
            <a
              className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
              href="https://forms.gle/Wg7qqgPaSinViciU9"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          • Upload the following documents:<br></br>
          1. Proof of payment<br></br>
          2. Final camera-ready paper (PDF)<br></br>
          3. Author affiliation and contact details<br></br>
        </p>
        <p className="text-justify mt-5 mb-5">
          <b>4. Confirmation </b><br></br>
          • A confirmation email and receipt will be issued once registration is verified.
        </p>
 <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Presentation Guidelines
          </h2>
         <p className="text-justify mt-5 mb-5">
          • Each registered paper must be <b>presented</b> by one of the authors.<br></br>
          • Presentation slots and guidelines will be communicated in advance.<br></br>
      
        </p>
        <h2 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-bold text-xl mb-4 leading-relaxed">
            Important Notes
          </h2>
         <p className="text-justify mt-5 mb-5">
          • <b>Each registration covers one paper only.</b> Authors with multiple papers must register separately for
           each.<br></br>
          • <b>Non-registered papers will not be included </b>in the conference proceedings or IEEE Xplore submission.<br></br>
          • Registration fees are <b>non-refundable,</b> except in special cases approved by the organizing committee.
        </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
