import { ChevronRight, List, MapPin } from "lucide-react";
import Image from "next/image";
import handshake1 from "../../Images/handshake1.png";
import group from '../../Images/bgroupbg.png'
import CarouselSize from "../CarouselMain";
import ChooseUs from "../ChooseUs";
import frame1 from "../../Images/Frame1.png";
import frame2 from "../../Images/frame2.png";
import frame3 from "../../Images/frame3.png";
import mask1 from "../../Images/mask2.png";

import mask2 from "../../Images/mask3.png";

import mask3 from "../../Images/mask4.png";
import border1 from '../../Images/border1.png'
import border2 from '../../Images/border2.png'
import Footer from "../Footer";

const HomeMenu = () => {
  return (
    <>
      <div className="ml-12  mr-12 h-[900px]">
        <div className="hidden md:inline rounded-full ">
          <Image
            src={group}
            alt="group"
            className=" md:relative top-[3px] bottom-[100px] border-t-hidden rounded-2xl pt-2  left-[415px] md:w-[800px] lg:[1600px]"
          />
        </div>
        <div className="mt-24 md:relative bottom-[900px] font-cabinet-grotesk md:ml-12 md:mr-12">
          <div className="">
            <div className="justify-between  md:w-[673px] h-[244px]">
              <h1 className="text-7xl font-cabinet-grotesk md:leading-[84px] font-extrabold">
                Connecting Highly Skilled Talents with the
                <span className="text-[#6B49CE] font-bold">
                  {" "}
                  Best Employers
                </span>
              </h1>
            </div>
            <button
              type="button"
              className="mt-[300px] md:mt-6 ml-2 flex font-cabinet-grotesk pl-2 gap-1 border bg-[#6B49CE] p-2 text-white "
            >
              View Jobs <ChevronRight />
            </button>

            <div className="md:flex justify-between relative  gap-12 mt-28 md:h-[70px] border md:rounded-full md:w-[542px] shadow-md">
              <div className="flex gap-2 w-[155px] items-center  ml-4 text-[#6B49CE]">
                <List />
                <p className="text-gray-400 font-cabinet-grotesk">Job Tittle</p>
              </div>

              <div className="flex gap-2  items-center ml-4 md:ml-0  w-[155px] text-[#6b49ce]">
                <MapPin />
                <p className="text-gray-400 font-cabinet-grotesk ">Location</p>
              </div>
              <div className="flex gap-8 items-center mt-4 text-center ml-12 md:ml-0 md:mr-5 w-[153px] h-[40px] bg-[#6B49CE] rounded-full">
                <p className="pl-8 text-white font-cabinet-grotesk">Search</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[906px]  w-[627px]">
          <Image
            src={handshake1}
            alt="handshake"
            className="hidden md:inline relative left-[580px] bottom-[1500px]"
          />
        </div>
        <Image
          src={frame1}
          alt="frame"
          className="hidden md:inline relative bottom-[2100px] left-[650px]"
        />
        <Image
          src={frame2}
          alt="frame"
          className="hidden md:inline relative bottom-[2300px] left-[1050px]"
        />
        <Image
          src={frame3}
          alt="frame"
          className="relative bottom-[2100px] left-[1100px]"
        />
      </div>
      <div className="h-[200px]">
        <div className="md:ml-28 md:relative bottom-[300px]  bg-gradient-to-r from-[#6C4ACF] to-[#3F238E] md:flex justify-center  md:rounded-[48px] md:w-[1100px] md:h-[300px]">
          <div className="text-center">
            <h1 className="text-white text-[50px] font-bold font-cabinet-grotesk  mt-8 md:w-[900px]">
              Our Recruitment Services Highlights
            </h1>
            <p className="md:w-[940px] font-cabinet-grotesk text-white pt-2 text-[20px]">
              Vensis Consulting Helps Job Seekers And Employeers Adress Their
              Unique Goals And Help Them Achieve Success. We Are Dedicated To
              Serving You And Helping You Manage Your Challanges
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center justify-center w-[320px] h-[190px] mt-12 bg-white rounded-[43px] shadow-lg">
                <h1 className="w-[190px] font-bold text-[18px] text-[#6C4ACF] font-cabinet-grotesk">
                  Connect People with He Right Jobs For Them
                </h1>
              </div>
              <div className="flex items-center justify-center w-[320px] h-[190px] mt-12 bg-white rounded-[43px] shadow-lg">
                <h1 className="w-[190px] font-bold text-[18px] text-[#6C4ACF] font-cabinet-grotesk">
                  Carrer Advice & Candidate Resources
                </h1>
              </div>
              <div className="flex items-center justify-center w-[320px] h-[190px] mt-12 bg-white rounded-[43px] shadow-lg">
                <h1 className="w-[190px] font-bold text-[18px] text-[#6C4ACF] font-cabinet-grotesk">
                  Free Resume <br /> Feedback & Changes
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-[900px] md:mt-6 font-bold font-cabinet-grotesk text-[50px]">
        Look For The <span className="text-[#6C4ACF]">Perfect Job?</span>
      </h1>
      <div className="flex justify-center ml-12 mr-12">
        <CarouselSize />
      </div>
      <div className="flex justify-center mt-12">
        <ChooseUs />
      </div>

      <div>
        <h1 className="text-center font-cabinet-grotesk text-[50px] font-bold">
          Latest <span className="text-[#6C4ACF]">Updates</span>
        </h1>
      </div>
      <div className="flex justify-center mt-12">
        <div className="bg-[#FAF8FF] md:w-[1206px] md:h-[497px] rounded-[40px] mb-12 mr-24 ml-24">
          <div className="md:flex  justify-center items-center">
            <div className="w-[280px] flex justify-center items-center text-center mt-16 h-[108px]">
              <h1 className="text-[25px] font-bold font-cabinet-grotesk">
                7 Rules for Recruiters When Texting with Candidates
              </h1>
            </div>
            <div className="hidden md:block h-[197px] mt-12 border-l border-gray-300"></div>

            <div className="w-[280px] mt-16 h-[108px] flex justify-center items-center text-center">
              <h1 className="text-[25px] font-bold font-cabinet-grotesk">
                Exploring Branded Candidate Experience Design
              </h1>
            </div>
            <div className="h-[197px] hidden md:block mt-12 border-l border-gray-300"></div>

            <div className="w-[280px] mt-16 h-[108px] flex justify-center items-center text-center">
              <h1 className="text-[25px] font-bold font-cabinet-grotesk">
                How to Recognize And Weed Out Toxic Managers
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="ml-4   border-[#6C4ACF] ">
              <Image src={mask1} alt="mask" className="pl-2 pb-1 " />
            </div>

            <div className="ml-4 mb-4">
              <Image src={mask2} alt="mask" />
            </div>
            <div className="ml-4 mb-4">
              <Image src={mask3} alt="mask" />
            </div>
          </div>
          <Image className="hidden md:block relative left-[350px] bottom-[350px] w-[400px] " src={border1} alt="border"/>
          <Image className="hidden md:block relative left-[10px]  bottom-[420px] w-[400px] " src={border2} alt="border"/>
          <Image className="hidden md:block relative left-[680px]  bottom-[650px] w-[400px] " src={border2} alt="border"/>
 
        </div>
      </div>

      <div>
      <Footer/>

      </div>

    </>
  );
};

export default HomeMenu;
