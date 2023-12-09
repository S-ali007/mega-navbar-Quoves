import Image from "next/image";
import Link from "next/link";
export default function Tech() {
  return (
    <div className="max-w-[1404px] w-full flex  flex-col sm:flex-row">
      {/*   solutions / */}
      <div className=" sm:max-w-[468px] max-w-[343px] w-full bg-[#fff] flex flex-col gap-[20px] sm:justify-between p-[20px] sm:p-[48px]   border-r-[#E7E7E7] border-r-[1px] ">
        <div className="max-w-[164px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
          solutions /
        </div>
        <div className="max-w-[164px]  w-full flex flex-col gap-[32px] ">
          {/*Professional solutions */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Professional solutions
            </div>
          </div>
          {/*Qoves Tech */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Qoves Tech
            </div>
          </div>
        </div>
      </div>

      {/* tech / */}
      <div className="sm:max-w-[468px] max-w-[343px] w-full hidden sm:block relative">
        {/* div1 with background image */}
        <div className="div1 w-full h-full flex items-center justify-center relative">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/hand-tech.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* div2 centered within div1 */}
        <div className="div2 absolute top-0 left-0 right-0 bottom-0 p-[24px] max-w-[318px] w-full flex flex-col justify-between  text-[52px] font-[400] text-[#fff]">
          <div className="max-w-[150px] w-full flex flex-col gap-[48px] ">
            <div className="max-w-[130px] w-full text-[#FFFFFF] text-[13px] font-[500] leading-[13px] uppercase opacity-[0.6] ">
              tech /
            </div>
            <div className="max-w-[150px] w-full text-[24px] font-[400] text-[#FFFFFF] leading-[22px] tracking-[-0.36px]">
              Qoves rhino use cases
            </div>
          </div>

          <Link
            href={"/"}
            className="max-w-[101px] w-full text-[#FFFFFF] font-[500] leading-[13px] underline tracking-[-0.08px] uppercase mt-[80px] text-[16px]"
          >
            learn more
          </Link>
        </div>
      </div>

       {/* tech / / */}
       <div className="sm:hidden   max-[343px]  w-full flex flex-col sm:justify-between  border-b-[#E7E7E7] border-b gap-[20px] p-[20px] sm:p-[48px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
          tech /
          </div>

          <div className="sm:max-w-[468px] max-[343px] w-full flex flex-col gap-[16px] sm:gap-[32px] ">
            {/* Diversity & moral code  */}

            <div className="max-w-[170px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
            Qoves rhino use cases
            </div>

            {/*Read More */}

            <Link href={'/'} className=" underline text-[#7D828E] max-w-[139px] w-full text-[13px] font-[500]  tracking-[-0.065px]">
            Read More
            </Link>
          </div>
          
        </div>

      {/*   tech /*/}
      <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px] flex flex-col  gap-[20px] sm:justify-between bg-[#fff] ">
        <div className="max-w-[186px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
          tech /
        </div>

        {/*  */}
        <div className="max-w-[372px] w-full flex flex-col gap-[20px] sm:gap-[32px]  ">
          {/* A.I Tools */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              A.I Tools
            </div>
          </div>
          {/* Machine learning development */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Machine learning development
            </div>
          </div>
          {/* Industry A.I & Machine Learning policies */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Industry A.I & Machine Learning policies
            </div>
          </div>
          {/* Qoves rhino use cases */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Qoves rhino use cases
            </div>
          </div>
          {/* Safe usage policy*/}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Safe usage policy
            </div>
          </div>
          {/* Qoves Biometrics */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500] tracking-[-0.36px]">
              Qoves Biometrics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
