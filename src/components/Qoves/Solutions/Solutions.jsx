import Image from "next/image";
import Link from "next/link";

function   Solutions({extraClasses}) {
  return (
    <div className={`${extraClasses} max-w-[1404px] w-full sm:flex  `}>
      {/* Facial Assessment */}
      <div className="max-w-[468px] w-full grid grid-col-1 ">
        {/* facial reports / */}
        <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px]  flex flex-col  gap-[20px] sm:justify-between   ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6] sm:opacity-100">
            facial reports /
          </div>

          <Link
            href={"/"}
            className="max-w-[303px] sm:max-w-[372px] w-full flex items-center  justify-between"
          >
            <div className="w-full text-[18px] sm:text-[24px] font-[500] leading-[21px] sm:tracking-[-0.48px] tracking-[-0.36px]  text-[#121212]">
              Facial assessment report
            </div>

            <div className="max-w-[15px] w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  d="M6.46428 0.928789H17.0709V11.5354"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M17.0693 0.927246L2.9272 15.0694"
                  stroke="#121212"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </Link>
        </div>
        {/* doctor consultation  */}
        <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:justify-between  border-y-[#E7E7E7] border-y-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6]">
            doctor consultation /
          </div>

          <div className="max-w-[372px] w-full flex flex-col  gap-[32px] ">
            <div className="max-w-[151px] w-full font-[500] text-[18px] text-[#121212] tracking-[-0.36px] capitalize">
              Private Consultation
            </div>
            <div className="max-w-[273px] w-full flex gap-[6px]">
              <div className="max-w-[161px]   w-full  font-[500] text-[18px] text-[#121212] capitalize tracking-[-0.36px]">
                In-Clinic Consultation
              </div>
              <div className="max-w-[97px] w-full bg-[#EDEFF1]  flex items-center  justify-center  ">
                <div className="max-w-[97px] w-full uppercase text-[#7D828E] text-[13px] font-[400] leading-[16px] tracking-[-0.26px] text-center">
                  coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Nose assessment report */}
      <div className="hidden sm:inline-block max-w-[468px] w-full relative">
        {/* div1 with background image */}
        <div className="div1 w-full h-full flex items-center justify-center relative">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/img-back.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* div2 centered within div1 -nose3 assessment report*/}
        <div className="div2 h-fit absolute top-[70px] left-0 right-0 bottom-[71px] m-auto max-w-[318px] w-full flex  bg-[#AEC0EE33]">
          <div className="flex w-full absolute">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 21V1H11H21" stroke="white" stroke-width="2" />
            </svg>
          </div>

          {/* nose-assessment-text-main */}
          <div className="pl-[17px] pr-[20px] pt-[14px] pb-[11px] flex w-full flex-col gap-[220px]">
            <div className=" max-w-[163px] w-full text-[#fff] text-[24px] leading-[22px] font-[400] tracking-[-0.36px]">
              Nose assessment report
            </div>
            <div className="max-w-[280px]  w-full border-opacity-[0.3]  border-t-[#fff] border-t-[1.5px] flex justify-between">
              {/* period */}
              <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                  period /
                </div>
                <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                  2 weeks
                </div>
              </div>
              {/* parts */}
              <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                  parts /
                </div>
                <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                  8
                </div>
              </div>
              {/* pages */}
              <div className="max-w-[72px] w-full flex flex-col gap-[3.41px] mt-[11px]">
                <div className="max-w-[72px] w-full text-[13px] text-[#fff] opacity-[0.6] font-[500] leading-[13px] tracking-[-0.065px] uppercase ">
                  pages /
                </div>
                <div className="max-w-[72px] w-full opacity-[0.8] text-[15px] text-[#fff]  font-[500] leading-[13px] tracking-[-0.075px] uppercase ">
                  118
                </div>
              </div>
            </div>
          </div>
          {/* corner-2 */}
          <div className="absolute bottom-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                d="M20 -4.76837e-07V20H10H-9.53674e-07"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
      {/*   Specialize facial reports / */}
      <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px]  flex flex-col  gap-[20px] sm:justify-between bg-[#FFF] sm:bg-[#F9F9F9] border-r-[#E7E7E7] border-r-[1.5px] ">
        <div className="max-w-[186px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
          Specialize facial reports /
        </div>

        {/*  */}
        <div className="max-w-[372px] w-full flex flex-col sm:gap-[32px] gap-[20px]  ">
          {/* Free facial asessment */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500] text-[#121212]  tracking-[-0.36px]">
              Free facial asessment
            </div>
          </div>
          {/* Facial morph report */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500] text-[#121212]  tracking-[-0.18px]">
              Facial morph report
            </div>
          </div>
          {/* Skin assessment report */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500] text-[#121212] tracking-[-0.36px]">
              Skin assessment report
            </div>
          </div>
          {/* Facial fillers report */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500] text-[#121212] tracking-[-0.36px]">
              Facial fillers report
            </div>
          </div>
          {/* Nose assessment report */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500] text-[#121212] tracking-[-0.36px]">
              Nose assessment report
            </div>
          </div>
          {/* Learn */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] text-[#121212] font-[500] tracking-[-0.36px]">
              Premium report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
