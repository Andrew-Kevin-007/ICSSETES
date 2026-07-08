// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css" ;
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const FooterSpeaker = () => {
  return (
    <div className="select-none">
      <div className="flex flex-row items-center mx-5 md:mx-auto">
        <h1 className="text-2xl text-black font-extrabold my-5">
          Hon'ble Speakers
        </h1>
      </div>
      <div className="w-full bg-gray-100 p-4 rounded-lg">
        <div className="swiper mySwiper mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/Snsingh.jpeg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prf. (Dr.) S. N. Singh
                </span>
                <span className="font-light text-xs text-center">
                Director, Atal Bihari Vajpayee- Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, India.
                </span>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/pratapsinh.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Pratapsinh Kakaso Desai
                </span>
                <span className="font-light text-xs text-center">
                PRESIDENT, ISTE, NEW DELHI, India.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/Dr-Ramkumar.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. (Dr.) J. Ramkumar
                </span>
                <span className="font-light text-xs text-center">
                Professor, Department of Mechanical Engineering, IIT Kanpur India.
                </span>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/Satish.jpeg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. (Dr.) Satish Kumar Singh
                </span>
                <span className="font-light text-xs text-center">
                Professor, IIIT-Allahabad, Prayagraj, U.P, India.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/AKS_pic.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. (Dr.) Asheesh Kumar Singh
                </span>
                <span className="font-light text-xs text-center">
                Professor, Department of Electrical Engineering
                Motilal Nehru National Institute of Technology Allahabad, Prayagraj, India.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/dr-Prabhakar-tiwari.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. (Dr.) Prabhakar Tiwari
                </span>
                <span className="font-light text-xs text-center">
                Professor, Electrical Engineering Department,
                 Madan Mohan Malviya University of Technology, Gorakhpur, U.P, India.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/Varun.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    Keynote Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. (Dr.) Varun Kakar
                </span>
                <span className="font-light text-xs text-center">
                BTKIT, Uttarakhand, India
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="Abdul.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Mr. Bdereddin Abdul Samad
                </span>
                <span className="font-light text-xs text-center">
                Azahra Higher Institution of Sciences and Technology, Azahra, Libya.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="khalidyahya.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. Khalid Yahya
                </span>
                <span className="font-light text-xs text-center">
                Nisantasi University, Istanbul ,Turkey
                </span>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/imageadel.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. Adel Rawea
                </span>
                <span className="font-light text-xs text-center">
                Department of Renewable Energy and Control, Sana'a University, Yemen
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="/Dr-Ing-Justice-Ohene-Akoto.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. Ing Justice Ohene Akoto
                </span>
                <span className="font-light text-xs text-center">
                Senior Advisor, JP Partners & Associates, Board Member, Future Energy Leaders, World Energy Council
                </span>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="goal.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. Ankur Goel
                </span>
                <span className="font-light text-xs text-center">
                East Kent College Group of Canterbury, United Kingdom.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="shabana.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Prof. Shabana Urooj
                </span>
                <span className="font-light text-xs text-center">
                Princess Nourah Bint Abdulrahman University Riyadh, Saudi Arabia.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="drchitu.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. Chitranjan Mahapatra
                </span>
                <span className="font-light text-xs text-center">
                Scientist, Department of Biomedical, Human Brain Project, NueroPSI, Paris.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="andbaru.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-amber-800">
                    International Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Mr. Anbarasu Aladiyan
                </span>
                <span className="font-light text-xs text-center">
                Institutional Information: Faculty Of Engineering And Architecture, Electrical And Electronics Engineering Egypt.
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-span-1 flex flex-col items-center">
                <img
                  src="venkat.jpg"
                  alt="Speaker&#x27;s Photo"
                  className="h-56 border-2 border-gray-300 w-64 object-cover mb-5 rounded-lg shadow-md"
                />
                <div className="rounded-full my-2 bg-amber-600 bg-opacity-20">
                  <p className="px-2 py-0.5 text-sm text-blue-800">
                    National Speaker
                  </p>
                </div>
                <span className="font-bold text-sm text-center">
                Dr. C Venkataramanan
                </span>
                <span className="font-light text-xs text-center">
                Professor / ECE, Sri Eshwar College of Engineering, Kinathukadavu, Coimbatore 641202.
                </span>
              </div>
            </SwiperSlide>
            
             
          </Swiper>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-center gap-2 justify-center my-5">
        <div className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-sky-700 shrink-on-hover focus:ring-4 focus:ring-sky-300 no-underline dark:focus:ring-sky-700">
          <Link to={"/speakers"}>View all</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSpeaker;
