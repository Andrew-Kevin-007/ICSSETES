import usePageTitle from "../hooks/usePageTitle";

const About = () => {
  usePageTitle("About");
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div>
        <div className="prose max-w-screen-lg mx-4">
          <h1 className="heading border-l-4 border-red-600 pl-4 pr-4 text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight">
            About ITS Group of Institute
          </h1>
          <p className="text-justify mb-5 mt-5">
            ITS - The Education Group, with its diversified presence across
            industries - including education, hospitality, medical, pharmacy,
            health care, wellness, legal, philanthropy and CSR - has been in a
            business leadership position for many decades. The company has
            undergone tremendous growth and has scaled up its operations in a
            big way over many years, in line with its global ambitions.
          </p>
          <img src="/ITS_Educational_group.jpg" alt="Image" />
          <p className="mt-5"></p>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="prose max-w-screen-lg mx-4">
          <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4">
            About ITSEC
          </h1>
          <p className="text-justify mt-5 mb-5">
            I.T.S Engineering College, situated in Greater Noida, stands as a
            distinguished institution for Engineering and Management.
            Established by prominent professionals with a commitment to
            delivering high-quality, industry-focused education at an affordable
            cost, the college has a rich history spanning approximately three
            decades. The ITS Education Group, with its roots firmly planted in
            North India, has become a significant player in higher education.
            The group oversees nine institutes with a collective student body
            exceeding 20,000 and a dedicated staff of over 1,250.
          </p>
          {/*<img
            src="https://www.collegebatch.com/static/clg-gallery/its-engineering-college-greater-noida-286203.jpg"
            alt=""
            className="mt-8 mb-8"
          >*/}
          <p className="text-justify mt-5 mb-5">
            Operating with excellence in various disciplines, including
            Information Technology, Engineering, Management, Dental, Pharmacy,
            and Physiotherapy, the ITS Education Group has been a prominent
            force since its inception in 2006 under the visionary leadership of
            Chairman Dr. R.P. Chadha. ITS Engineering College boasts NBA
            accreditation, a testament to its unwavering commitment to providing
            top-notch education. The college, approved by AICTE and affiliated
            with AKTU-Lucknow, offers a diverse range of programs. These include
            B. Tech in Civil Engineering, Mechanical Engineering, Computer Science & Engineering (CSE), CSE with
            specializations in Artificial Intelligence and Machine Learning, and
            Data Science. Additionally, the college provides programs in
            Electronics and Communication Engineering (ECE) ,Electronics Engineering
            (VLSI Design and Technology), Electrical and Computer Engineering,
            Mechanical Engineering, and an MBA program.
           </p>
           </div>
           <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
           <div className="prose max-w-screen-lg mx-4">
           <h1 className="heading text-tw-prose-headings font-extrabold text-2xl mb-4 leading-tight border-l-4 border-red-600 pl-4 pr-4">
            About ECE
           </h1>
           <p className="text-justify mt-5">
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


          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
