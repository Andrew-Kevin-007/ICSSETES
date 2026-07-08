//import { Link } from "react-router-dom";
import Counter from "./Counter"
const Body = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-2 md:mx-auto">
        <div className="lg:col-span-2 lg:mr-10 col-span-full">
          <h2 className="font-bold text-lg text-center lg:text-2xl lg:text-start my-3">
            About ICSSETES
          </h2>
          <p className="text-justify">
            ICSSETES is a prestigious international IEEE conference that brings
            together top researchers, scientists, engineers, and scholars from
            around the world to share their latest research findings and
            experiences in computing, communication and networking.
            Featuring keynote speeches, technical sessions, and workshops, the
            conference covers a wide range of topics such as cloud computing,
            AI, wireless communication systems, IoT, and cybersecurity.
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10" />
          <h2 className="font-bold text-lg text-center lg:text-2xl lg:text-start my-3">
            About College
          </h2>
          <p className="text-justify">
            I.T.S Engineering College, located in Greater Noida, is a
            distinguished institution for Engineering and Management, founded by
            leading professionals committed to delivering high-quality,
            industry-focused education at an affordable cost. With a rich
            history spanning around three decades, the ITS Education Group has
            emerged as a key player in higher education in North India,
            operating nine institutes with more than 20,000 students and a
            dedicated staff of over 1,250. The group excels in various
            disciplines, including Information Technology, Engineering,
            Management, Dental, Pharmacy, and Physiotherapy. Established in 2006
            under the visionary leadership of Chairman Dr. R.P. Chadha, ITS
            Engineering College holds NBA accreditation, showcasing its
            dedication to providing top-notch education. Approved by AICTE and
            affiliated with AKTU-Lucknow, the college offers diverse programs,
            such as B. Tech in Civil, Computer Science & Engineering (CSE),
            CSE-Artificial Intelligence and Machine Learning, CSE-Data Science,
            Electronics and Communication Engineering, Electronics Engineering
            (VLSI Design and Technology), Electrical and Computer Engineering,
            Mechanical Engineering, as well as an MBA program in Marketing,
            Finance, Human Resource, Operations, International Business and
            Information Technology.
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10" />
          <h2 className="font-bold text-lg text-center lg:text-2xl lg:text-start my-3">
            About Electronics and Communication Engineering
          </h2>
          <p className="text-justify whitespace-pre-wrap">
          The Department of Electronics and Communication Engineering (ECE) at I.T.S Engineering College, Greater
            Noida, was established in 2006 with the vision to produce technically skilled, innovative, and socially
            responsible engineers capable of meeting global technological challenges. The department emphasizes 
            quality education, research, and industry-oriented learning to prepare students for diverse career 
            opportunities.
            <br/>
            <br/>
            The department offers a four-year B.Tech program in Electronics and Communication Engineering, affiliated to Dr. 
            A.P.J. Abdul Kalam Technical University (AKTU), Lucknow (formerly UPTU). The program is accredited by the National
            Board of Accreditation (NBA), New Delhi, highlighting its commitment to academic excellence, outcome-based 
            education, and continuous improvement.
            <br/>
            <br/>
            The department has a team of highly qualified and experienced faculty members, many of whom are postgraduates and 
            doctorates from prestigious institutions such as IITs, NITs, and NSIT. Their expertise spans areas like VLSI design,
            embedded systems, communication networks, signal processing, and automation, ensuring students receive both
              in-depth theoretical knowledge and practical insight.
            <br/>
            <br/>
            To strengthen industry–academia collaboration, the department has established the NI Innovation Centre in 
            partnership with National Instruments (NI). This centre focuses on Virtual Instrumentation and Industrial Automation, enabling students to work on advanced technologies through real-time hardware–software integration and project-based learning.
            <br/>
            <br/>
            Student growth is further enriched through active technical bodies such as the IEEE Student Branch and the 
            student activity club “Envision.” These platforms organize workshops, seminars, webinars, technical quizzes, 
            poster presentations, and project exhibitions, encouraging innovation, leadership, and professional development.
            <br/>
            <br/>
            With modern laboratories, a research-driven environment, and dedicated faculty, the Department of Electronics 
            and Communication Engineering continues to produce graduates who excel in fields like telecommunication, 
            embedded systems, signal processing, automation, and software development, contributing to industry and society
            alike.
            </p> <br/><br/>

          < p className="text-justify whitespace-pre-wrap">
           <b>NOTE:</b> All papers must be submitted electronically through the <b>Microsoft CMT</b> (conference management system).
            <br></br><b>CMT Acknowledgment</b> <br></br>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.            </p>
          

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 opacity-10" />
          <div className="flex-col items-center justify-center text-center rounded-lg px-2 py-7">
            <div>
              <Counter />
              <h1 className = "mt-2 font-bold text-1xl">Visitors</h1>
            </div> 
          </div>
        </div>
        <div id="important" className="lg:col-span-1 col-span-full">
          <div className="w-full lg:w-min-sm">
            {/**<div className="mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm flex justify-between items-center">
              <p className="font-semibold text-lg">Inauguration Brochure</p>
              {/**<Link
                to="/documents/inauguration_schedule.pdf"
                className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 no-underline dark:focus:ring-red-900"
              >
                Download
              </Link> }
            </div> */}
            {/** <div className="relative h-60 p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200"></div> */}
          </div>
          {/**<div className="w-full lg:w-min-sm">
            <div className="mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm">
              <p className="font-semibold text-lg">Important Notices</p>
            </div>
            <div className="p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200">
              <Link to="/registration">
                <div className="flex flex-col space-x-2 items-start -mx-4 -my-5 p-4 bg-orange-100">
                  <div>
                    <div className="flex space-x-2 mt-2">
                      <p className="font-medium text-orange-800">
                        Paper submission link open
                      </p>
                      <div className="flex space-x-2 items-center justify-center">
                        <div className="rounded-full bg-orange-800 font-semibold bg-opacity-20">
                          <p className="px-2 py-0.5 text-xs text-orange-800">
                            Important
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="font-light text-sm mt-1 text-orange-800">
                      1st ICSSETES-25 paper submission link is open till August
                      31, 2025
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="https://AIPxplore.AIP.org/xpl/conhome/10073967/proceeding">
                <div className="flex flex-col space-x-2 items-start -mx-4 -my-4 p-4">
                  <div>
                    <div className="flex space-x-2 mt-2">
                      <p className="font-medium ">1st ICSSETES-25 Proceedings</p>
                    </div>
                    <p className="font-light text-sm mt-1 ">
                      1st ICSSETES-25 Proceedings are available online now on
                      Xplore
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div> */}
          <div className="w-full mx-auto">
            <div className="mt-5 p-4 rounded-t-md bg-gray-200  border-l-4 border-red-600 w-full lg:max-w-sm lg:min-w-lg">
              <p className="font-semibold text-lg">Important Dates</p>
            </div>
            <div className="p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-80 lg:overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200">
              <div>
                <div className="flex space-x-2 items-start ">
                  <div>
                    <p className="font-medium ">Paper Submission Starts</p>
                    <p className="font-light text-sm "></p>
                    <p className="text-sm text-gray-700 ">01/03/2026</p>
                  </div>
                  <div className="rounded-full bg-blue-800 font-semibold bg-opacity-20">
                    <p className="px-2 py-0.5 text-xs text-blue-800">New</p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
              
              <div>
                <div className="flex space-x-2 items-start -mx-4 -my-5 p-4 bg-orange-100">
                  <div>
                    <p className="font-medium text-red-800">
                      Paper Submission Deadline
                    </p>
                    <p className="font-light text-sm text-red-800"></p>
                    <p className="text-sm  text-red-800"><del>30/05/2026</del></p>
                    <p className="text-sm  text-red-800"><del>15/06/2026</del></p>
                    <p className="text-sm  text-blue-800">30/06/2026</p>
                  </div>
                  <div className="flex space-x-2 items-center justify-center">
                    <div className="rounded-full mt-1 bg-orange-800 font-semibold bg-opacity-20">
                      <p className="px-2 py-0.5 text-xs text-orange-800">
                        Update
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
              <div>
                <div className="flex space-x-2 items-start ">
                  <div>
                    <p className="font-medium ">Notification of Acceptance</p>
                    <p className="font-light text-sm ">
                      (within 4 weeks from submission)
                    </p>
                    <p className="text-sm text-gray-700 ">13/07/2026</p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
              <div>
                <div className="flex space-x-2 items-start ">
                  <div>
                    <p className="font-medium ">Registration</p>

                    <p className="text-sm text-gray-700 ">28/07/2026</p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
              <div>
                <div className="flex space-x-2 items-start ">
                  <div>
                    <p className="font-medium ">Camera Ready Paper</p>

                    <p className="text-sm text-gray-700 ">05/08/2026</p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
              <div>
                <div className="flex space-x-2 items-start ">
                  <div>
                    <p className="font-medium ">Conference Date</p>

                    <p className="text-sm text-gray-700 ">
                      24th - 26th August 2026
                    </p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700 " />
              </div>
            </div>
          </div>
          
            
          {/**<div className="w-full lg:w-min-sm">
            <div className="mt-5 p-4 rounded-t-md bg-gray-200 border-l-4 border-red-600 w-full lg:max-w-sm">
              <p className="font-semibold text-lg">Important Downloads</p>
            </div>
            <div className="space-y-3 p-4 rounded-b-md bg-gray-100 w-full lg:max-w-sm lg:max-h-52 lg:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-md scrollbar-track-gray-200">
              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-2 items-start">
                    <div>
                      <p className="font-medium">
                        Final Presntation Schedule ICACITES-2024 (.pdf)
                      </p>
                    </div>
                    <div className="rounded-full bg-blue-600 my-1 bg-opacity-20">
                      <p className="px-2 py-0.2 text-sm text-blue-800">New</p>
                    </div>
                    <div className="rounded-full bg-red-600 bg-opacity-20">
                      <p className="px-2 py-0.5 text-sm text-red-800">
                        Important
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>

              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">
                      Zoom Link for Presentation ICACITES-2024 (.pdf)
                    </p>
                  </div>
                  <div className="rounded-full bg-red-600 bg-opacity-20">
                    <p className="px-2 py-0.5 text-sm text-red-800">
                      Important
                    </p>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>

              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-2 items-start">
                    <div>
                      <p className="font-medium">ICACITES-2024 Brochure (.pdf)</p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>

              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-2 items-start">
                    <div>
                      <p className="font-medium">Paper Format (.docx)</p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>

              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-2 items-start">
                    <div>
                      <p className="font-medium">Paper Format (.pdf)</p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>

              <Link to="https://www.google.com" className="cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex space-x-2 items-start">
                    <div>
                      <p className="font-medium">Sample PPT (.pptx)</p>
                    </div>
                  </div>
                </div>
                <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Body;
