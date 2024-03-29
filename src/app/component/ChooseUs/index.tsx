import Image from "next/image";
import Dots from "../../Images/dots.png";
import JobIcon from "../../Images/jobicon.png";
import mask from "../../Images/mask.png";
import vector from '../../Images/Vector.png'

const ChooseUs = () => {
  return (
    <div className="bg-[#FAF8FF] md:w-[1206px] md:h-[807px] rounded-[40px] mb-12 md:mr-24 md:ml-24">
      <Image src={Dots} alt="dots-logo" className=" hidden md:inline text-gray-300" />
      <Image
        className="hidden md:block relative left-[970px] bottom-[300px] w-[90px] h-[100px]"
        src={JobIcon}
        alt="job-icon"
      />
      <div className="md:flex">
        <div className="md:relative bottom-[270px] left-[85px]">
          <Image src={mask} alt="mask" className="h-[640px] w-[548px]" />
        </div>
        <div>
          <div className="md:relative bottom-[200px] left-[150px] h-[56px] items-center mt-4 md:mt-0 rounded-tl-[28px] rounded-br-[28px] bg-[#6D4BD0] w-[310px] flex justify-center">
            <h1 className="text-white font-semibold font-cabinet-grotesk text-[30px]">
              Why Choose US
            </h1>
          </div>
          <div className="md:relative left-[50px] font-cabinet-grotesk bottom-[170px]">
            <div className="relative  py-4 pl-8 sm:pl-32  group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#6D4BD0] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="text-[25px] font-bold text-slate-900">
                  Resume Building
                </div>
              </div>
            </div>

            <div className="relative py-4 pl-8 sm:pl-32  group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="text-[25px] font-bold text-slate-900">
                  Hiring Support
                </div>
              </div>
            </div>

            <div className="relative py-4 pl-8 sm:pl-32  group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="text-[25px] font-bold text-slate-900">
                  Top Company
                </div>
              </div>
            </div>

            <div className="relative py-4 pl-8 sm:pl-32  group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="text-[25px] font-bold text-slate-900">
                  15+ Years Experience
                </div>
              </div>
            </div>

            <div className="relative py-4 pl-8 sm:pl-32  group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <div className="text-[25px] font-bold text-slate-900">
                  Job Gurantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={vector} alt="vector" className="hidden md:block relative bottom-[400px] left-[988px]"/>
    </div>
  );
};

export default ChooseUs;
