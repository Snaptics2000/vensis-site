import Image from "next/image";
import brand1 from "../../Images/brand1.png";
import brand2 from "../../Images/brand2.png";
import brand3 from "../../Images/brand3.png";
import brand4 from "../../Images/brand4.png";
import { MailIcon, MapPinIcon, PhoneCall } from "lucide-react";
import Facebook from '../../Images/facebookicon.png';
import Instagram from '../../Images/instaicon.png'

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-[#F8F8F8] flex flex-wrap justify-center items-center md:h-[312px] md:w-[1260px]">
          <div>
            <h1 className="font-cabinet-grotesk text-center font-bold text-[50px]">
              <span className="text-[#6C4ACF]">100+ Brands</span> Trust Vensis
            </h1>
            <div className="flex flex-wrap justify-center  gap-10 mt-12">
              <div>
                <Image src={brand1} alt="brand" />
              </div>
              <div>
                <Image src={brand2} alt="brand" />
              </div>
              <div>
                <Image src={brand3} alt="brand" />
              </div>
              <div>
                <Image src={brand4} alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1B0F3C] md:h-[900px] md:w-[1260px] mt-12">
        <div className="bg-white rounded-br-[100px] rounded-bl-[100px] flex justify-center items-center h-[300px]">
            <div className="bg-[#6B4ACB] md:rounded-[232px] md:w-[1000px] md:h-[464px] mt-48 pt-12 flex justify-center text-center ">
                <div>
                <h1 className="text-[50px] font-bold text-white font-cabinet-grotesk">Get in Touch</h1>  
                <h1 className="text-[70px]  text-white font-cabinet-grotesk font-bold">Have Questions?</h1>
                <form className="mt-6">
                    <div className="flex flex-wrap justify-center gap-2">
                    <input type="text" className="h-[36px]"/>
                    <input type="text" className="h-[36px]"/>
                    </div>
                    <input type="text" className="mt-2 md:w-[435px] h-[36px]"/>
                    <div className="mt-12">
                        <button className="bg-transparent border shadow-lg w-[149px] rounded-full font-cabinet-grotesk text-white">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <div className="mt-64 pt-16 flex flex-wrap justify-between">
            <div className="text-white text-[30px] font-cabinet-grotesk ml-12">
                <h1 className="ml-12">Contact Us</h1>
                <div className="flex gap-1 mt-2 mb-2">
                <PhoneCall className="mt-2 mr-2"/>
                <p>236-808-7009</p>
                </div>
                <div className="flex gap-1 mt-2 mb-2">
                <MailIcon className="mt-2 mr-2"/>
                <p>Hr@Vensisconsulting.com</p>
                </div>
                <div className="flex gap-1 mt-2 mb-2">
                <MapPinIcon className="mt-2 mr-2"/>
                <p>1686, Vancouver, Canada</p>
                </div>
            </div>
            <div className="flex ml-28 justify-center md:items-center gap-4 mr-12 md:mt-36">
                <p className="text-white mt-2">Follow Us</p>
                <div className="flex gap-4">
                    <div>
                    <Image src={Facebook} alt="social"/>
                    </div>
                    <div>
                    <Image src={Instagram} alt="social"/>
                    </div>

                </div>
            </div>
        </div>
        <div className="bg-[#6B4ACB] mt-2 ml-12 mr-12">
            <h1 className="text-center text-white font-cabinet-grotesk">@Copyright | All Right Reserved Vensis Consulting INC </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
