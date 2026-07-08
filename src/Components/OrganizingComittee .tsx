import usePageTitle from "../hooks/usePageTitle";

const OrganizingComittee = () => {
  usePageTitle("Organizing Committee");
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="prose mx-4" itemType="https://schema.org/Organization">
        <h1
          className="heading text-prose-headings font-extrabold text-4xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
          itemProp="name"
        >
          ORGANISING COMMITTEE
        </h1>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Chief Patron"
          >
            Chief Patron
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              id="Dr. R. P. Chadha"
              className="pl-1.5 mt-2 mb-2 "
            >
              <span itemProp="name">Dr. R. P. Chadha</span>,{" "}
              <span itemProp="jobTitle">Chairman</span>
            </li>
            <li
              itemProp="member"
              id="Mr. Sohil Chadha"
              className="pl-1.5 mt-2 mb-2"
            >
              <span itemProp="name">Shri Sohil Chadha</span>,{" "}
              <span itemProp="jobTitle">Vice Chairman</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Co-Chief Patrons"
          >
            Co-Chief Patrons
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Shri B. K. Arora, Secretary, ITSEC"
            >
              <span itemProp="name">Shri B. K. Arora</span>,{" "}
              <span itemProp="jobTitle">Secretary, ITSEC</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Shri B. K. Arora, Secretary, ITSEC"
            >
              <span itemProp="name">Shri Surinder Sood</span>,{" "}
              <span itemProp="jobTitle">Director Public Relation, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Patrons"
          >
            Patrons
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) S. N. Singh"
            >
              <span itemProp="name">Prof. (Dr.) S. N. Singh</span>,{" "}
              <span itemProp="jobTitle">Director, ABV-IIITM Gwalior</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) Mayank Garg, Director, ITSEC"
            >
              <span itemProp="name">Prof. (Dr.) Mayank Garg</span>,{" "}
              <span itemProp="jobTitle">Director, ITSEC</span>
            </li>
          </ul>
        </div>
         <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Co-Patrons"
          >
            Co-Patrons
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) J. Ramkumar"
            >
              <span itemProp="name">Prof. (Dr.) J. Ramkumar</span>,{" "}
              <span itemProp="jobTitle">IIT Kanpur</span>
            </li>
            <li
              itemProp="member"
              className="pl-1.5 mt-2 mb-2"
              id="Prof. (Dr.) Satish Kumar Singh"
            >
              <span itemProp="name">Prof. (Dr.) Satish Kumar Singh</span>,{" "}
              <span itemProp="jobTitle">IIIT-Allahabad, Prayagraj</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference General Chair"
          >
            Conference General Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Asheesh Kumar Singh">
              <span itemProp="name">Prof. (Dr.) Asheesh Kumar Singh</span>,{" "}
              <span itemProp="jobTitle">MNNIT-Allahabad, Prayagraj</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Prabhakar Tiwari">
              <span itemProp="name">Prof. (Dr.) Prabhakar Tiwari</span>,{" "}
              <span itemProp="jobTitle">MMMUT, Gorakhpur</span>
            </li>
             <li itemProp="member" id="Prof. (Dr.) Varun Kakar">
              <span itemProp="name">Prof. (Dr.) Varun Kakar</span>,{" "}
              <span itemProp="jobTitle">BTKIT, Dwarahat</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Convener & Conference Organising Chair"
          >
               Convener & Conference Organising Chair 
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
          <li itemProp="member" id="Dr. Setu Garg">
              <span itemProp="name"> Prof. (Dr.) Setu Garg</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Prabhakar Sharma">
              <span itemProp="name"> Prof. Prabhakar Sharma</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
          </ul>
        </div>
                
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference Chair"
          >
            Conference Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Dr.A Ambikapathy">
              <span itemProp="name"> Prof. (Dr.) A Ambikapathy</span>,{" "}
              <span itemProp="jobTitle">H.O.D, ECE, ITSEC</span>
            </li>
          <li itemProp="member" id="Prof. (Dr.) Agha Asim Husain ">
              <span itemProp="name"> Prof. (Dr.) Agha Asim Husain</span>,{" "}
              <span itemProp="jobTitle"> ECE , ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Praveen Bhola ">
              <span itemProp="name"> Prof. (Dr.) Praveen Bhola</span>,{" "}
              <span itemProp="jobTitle"> ECE , ITSEC</span>
            </li>

          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Conference Publication Chair"
          >
            Conference Publication Chair
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof.(Dr.) Jaspal Kumar">
              <span itemProp="name">Prof.(Dr.) Jaspal Kumar</span>,
              <span itemProp="jobTitle"> ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof.(Dr.) Navneet Kumar">
              <span itemProp="name"> Prof. Navneet Kumar</span>,
              <span itemProp="jobTitle"> ECE, ITSEC</span>
            </li>    
          </ul>
        </div>     
        
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Technical Program Chairs"
          >
            Technical Program Chairs
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Shivam Gupta">
              <span itemProp="name"> Prof. Shivam Gupta </span>,{" "}
              <span itemProp="jobTitle"> ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Shahid Khan ">
              <span itemProp="name">Prof. Shahid Khan</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            
            {/**<li itemProp="member" id="Prof. (Dr.) Sachi Gupta">
              <span itemProp="name">Prof. (Dr.) Sachi Gupta</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. (Dr.) Arun Kumar</span>,{" "}
              <span itemProp="jobTitle">CSE, GCET</span>
            </li> */}
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Organizing Committee"
          >
            Organizing Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. (Dr.) Vrinda Sachdeva">
              <span itemProp="name">Prof. (Dr.) Setu Garg</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Tarun Chug">
              <span itemProp="name">Prof. (Dr.) Agha Asim Husain</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Abhishek Shivhare">
              <span itemProp="name">Prof. Prabhakar Sharma</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Yogesh Sharma">
              <span itemProp="name">Prof. Navneet Kumar</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Prachi Jain">
              <span itemProp="name">Prof. (Dr.) Jaspal Kumar</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name">Prof. Shahid Khan</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name"> Prof. Shivam Gupta</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
              </li>
              <li itemProp="member" id= "Prof. Akansha Sharma">
              <span itemProp="name">Prof. (Dr.) Praveen Bhola</span>,{" "}
              <span itemProp="jobTitle">EEE, ITSEC</span>
              </li>
              <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name">Prof. (Dr.) Upendra Agrawal</span>,{" "}
              <span itemProp="jobTitle">EEE, ITSEC</span>
              </li>
              <li itemProp="member" id="Prof. Akansha Sharma">
              <span itemProp="name">Prof. (Dr.) Rajeev Ranjan</span>,{" "}
              <span itemProp="jobTitle">EEE, ITSEC</span>
              </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Publication Committee"
          >
            Finance Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Abhishek Shivhare">
              <span itemProp="name">Prof. Prabhakar Sharma</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. (Dr.) Nitin Mishra">
              <span itemProp="name">Prof. (Dr.) Praveen Bhola</span>,{" "}
              <span itemProp="jobTitle">EEE, ITSEC</span>
            </li>
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Hospitality Committee"
          >
          
            Website Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            <li itemProp="member" id="Prof. Prachi Jain">
              <span itemProp="name">Prof. Shivam Gupta</span>,{" "}
              <span itemProp="jobTitle"> ECE, ITSEC</span>
            </li>
            <li itemProp="member" id="Prof. Monika">
              <span itemProp="name">Mr. Abhishek Patel</span>,{" "}
              <span itemProp="jobTitle"> ECE, Student ,ITSEC</span>
            </li>
           
          </ul>
        </div>
        <div itemProp="department" className="ml-3">
          <h2
            className="heading text-prose-headings font-extrabold text-2.25xl mb-4 leading-9 border-l-4 border-red-600 pl-4 pr-4"
            itemProp="name"
            id="Sponsorship/Media Committee"
          >
            Sponsorship/Media Committee
          </h2>
          <ul className="mb-5 pl-6.5 list-disc ml-10 marker:text-zinc-500">
            
                        <li itemProp="member" id="Prof. (Dr.) Arun Kumar">
              <span itemProp="name">Prof. Shahid Khan</span>,{" "}
              <span itemProp="jobTitle">ECE, ITSEC</span>
            </li>
            <li className="list-none">
              <h3 className="heading" itemProp="name">
                Student Co-Ordinators
              </h3>
              <ul>
                <li itemProp="member" id="Mr. Abhishek Patel">
                  <span itemProp="name">Mr. Anket Srivastava</span>,{" "}
                  <span itemProp="jobTitle">ECE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Mr. Piyush Kumar">
                  <span itemProp="name">Mr. Piyush Kumar</span>,{" "}
                  <span itemProp="jobTitle">ECE Student, ITSEC</span>
                </li>
                <li itemProp="member" id="Mr. Sanjeev Yadav">
                  <span itemProp="name">Mr. Sanjeev Yadav</span>,{" "}
                  <span itemProp="jobTitle">ECE Student, ITSEC</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default OrganizingComittee;
