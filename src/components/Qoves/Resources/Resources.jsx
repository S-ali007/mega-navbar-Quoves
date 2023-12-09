import Image from "next/image";
import Link from "next/link";

function Resources({ extraClasses }) {
  return (
    <div
      className={`${extraClasses} max-w-[1404px] w-full  flex  flex-col sm:flex-row  `}
    >
      <div className="w-full max-w-[468px] flex flex-col ">
        {/* Lists / / */}
        <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:gap-[29px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            Lists /
          </div>
          {/* Full interviews */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Full interviews
            </div>
          </div>
          {/* Diagnosis library */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Diagnosis library
            </div>
          </div>
          {/* Doctor / Practitioner directory */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Doctor / Practitioner directory
            </div>
          </div>
          {/* Clinical research */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Clinical research
            </div>
          </div>
          {/*Qoves customer stories*/}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Qoves customer stories
            </div>
          </div>
        </div>

        {/* Report image guidelines */}
        <div className="hidden sm:block max-w-[468px] w-full p-[48px]  border-y-[#E7E7E7] border-y-[1px] ">
          <Link
            href={"/"}
            className="max-w-[372px] w-full flex items-center  justify-between"
          >
            <div className="max-w-[182px] w-full  text-[18px]  font-[500] leading-[21px] tracking-[-0.48px]  text-[#121212]">
              Report image guidelines
            </div>

            <div className="max-w-[20px] w-full ">
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
      </div>

      {/* Nose assessment report */}
      <div className="hidden sm:block max-w-[468px] w-full relative">
        <div className="max-w-[420px] w-full flex absolute gap-[16px] z-10 p-[24px]">
          <div className="max-w-[202px] w-full text-[#fff] text-[13px] font-[500] opacity-[0.6] leading-[13px] tracking-[-0.065px]  uppercase ">
            {" "}
            podcast
          </div>
          <div className="max-w-[202px] w-full text-[#fff] flex justify-end uppercase text-[13px] font-[500] opacity-[0.6] leading-[13px] tracking-[-0.065px]  ">
            {" "}
            25 episodes
          </div>
        </div>
        {/* div1 with background image */}
        <div className="div1 w-full h-full flex items-center justify-center relative">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/resource-img-back.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* div2 centered within div1 */}
        <div className="div2 absolute top-0 left-0 right-0 bottom-0 m-auto max-w-[318px] w-full flex justify-center items-center text-[52px] font-[400] text-[#fff]">
          Deep Dive
        </div>
      </div>
      {/*   facial reports / / */}
      <div className=" max-w-[468px]  w-full bg-[#fff] grid grid-cols-1  border-b-[#E7E7E7] border-b-[1px] ">
        <div className=" w-full flex flex-col gap-[20px] sm:justify-between  p-[20px] sm:p-[48px]  ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            facial reports /
          </div>
          {/* The aesthetic doc podcast  */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              The aesthetic doc podcast
            </div>
          </div>
          {/* Deep dive podcast */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Deep dive podcast
            </div>
          </div>
          {/* Qoves Magazine */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Qoves Magazine
            </div>
          </div>
        </div>
        {/* Article */}
        <div className="  w-full  p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:justify-between border-t-[#E7E7E7] border-t-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            article /
          </div>

          <div className="max-w-[372px] w-full flex flex-col gap-[16px]  ">
            <div className=" w-full font-[500] text-[18px] text-[#121212] leading-[-0.36px]  capitalize">
              Qoves Framework Of Beauty ©
            </div>
            <div className="max-w-[161px] w-full flex gap-[6px]">
              <Link
                href={"/"}
                className="max-w-[161px]  underline w-full  font-[500] text-[13px] text-[#7D828E] uppercase  tracking-[-0.26px]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="sm:hidden  w-full  p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:justify-between border-t-[#E7E7E7] border-t-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            podcast /
          </div>
          <div>
          Deep Dive (25 Episodes)
          </div>
        </div>
        {/*  */}
         {/* Report image guidelines */}
         <div className=" block sm:hidden sm:max-w-[468px] max-w-[343px] w-full sm:p-[48px] p-[20px]  border-y-[#E7E7E7] border-y-[1px] ">
          <Link
            href={"/"}
            className="sm:max-w-[372px] max-w-[343px]  w-full flex items-center  justify-between"
          >
            <div className="max-w-[182px] w-full  text-[18px]  font-[500] leading-[21px] tracking-[-0.48px]  text-[#121212]">
              Report image guidelines
            </div>

            <div className="max-w-[20px] w-full ">
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
      </div>
    </div>
  );
}

export default Resources;
