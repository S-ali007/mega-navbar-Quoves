import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  return (
    <div className="max-w-[1404px] w-full flex   flex-col sm:flex-row">
      <div className="sm:max-w-[468px] max-[343px] w-full grid grid-cols-1 ">
        {/*   METHODOLOGY / */}

        <div className="sm:max-w-[468px] max-[343px] w-full flex flex-col gap-[20px] sm:justify-between  border-y-[#E7E7E7] p-[20px]  sm:p-[48px] ">
          <div className="max-w-[106px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
            METHODOLOGY /
          </div>

          <div className="max-w-[463px] w-full flex flex-col gap-[20px] sm:gap-[32px] ">
            {/* Reports methodology */}

            <div className=" max-w-[164px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Reports methodology
            </div>
            {/*Diversity & Moral code   */}

            <div className="max-w-[167px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Diversity & Moral code
            </div>
          </div>
        </div>

        {/* facial reports / */}
        <div className="sm:max-w-[468px] max-[343px]  w-full flex flex-col sm:justify-between  border-y-[#E7E7E7] border-y gap-[20px] p-[20px] sm:p-[48px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
            facial reports /
          </div>

          <div className="sm:max-w-[468px] max-[343px] w-full flex flex-col gap-[20px] sm:gap-[32px] ">
            {/* Science behind Qoves  */}

            <div className="max-w-[170px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Science behind Qoves
            </div>

            {/*Tech development */}

            <div className=" max-w-[139px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Tech development
            </div>
          </div>
          
        </div>


         {/* METHODOLOGY / / */}
         <div className="sm:max-w-[468px] sm:hidden max-[343px]  w-full flex flex-col sm:justify-between  border-b-[#E7E7E7] border-b gap-[20px] p-[20px] sm:p-[48px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
          METHODOLOGY /
          </div>

          <div className="sm:max-w-[468px] max-[343px] w-full flex flex-col gap-[16px] sm:gap-[32px] ">
            {/* Diversity & moral code  */}

            <div className="max-w-[170px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
            Diversity & moral code
            </div>

            {/*Read More */}

            <Link href={'/'} className=" underline text-[#7D828E] max-w-[139px] w-full text-[13px] font-[500]  tracking-[-0.065px]">
            Read More
            </Link>
          </div>
          
        </div>
         {/* research / / */}
         <div className="sm:hidden   max-[343px]  w-full flex flex-col sm:justify-between  border-b-[#E7E7E7] border-b gap-[20px] p-[20px] sm:p-[48px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
          research /
          </div>

          <div className="sm:max-w-[468px] max-[343px] w-full flex flex-col gap-[16px] sm:gap-[32px] ">
            {/* Diversity & moral code  */}

            <div className="max-w-[170px] w-full text-[18px] font-[500]  tracking-[-0.36px]">
            Science behind Qoves
            </div>

            {/*Read More */}

            <Link href={'/'} className=" underline text-[#7D828E] max-w-[139px] w-full text-[13px] font-[500]  tracking-[-0.065px]">
            Read More
            </Link>
          </div>
          
        </div>
        
      </div>

      {/* methodology -img / */}
      <div className="max-w-[468px] hidden  w-full bg-[#E8EDEF]  p-[20px] sm:p-[24px] sm:flex flex-col gap-[20px] sm:justify-between">
        <div className="max-w-[150px] w-full flex flex-col justify-between">
          <div className="max-w-[130px] w-full text-[#121212] text-[13px] font-[500] leading-[13px] uppercase opacity-[0.6] ">
            methodology /
          </div>
          <div className="max-w-[150px] w-full text-[24px] font-[400] text-[#121212] leading-[22px] tracking-[-0.36px]">
            Diversity & moral code
          </div>
        </div>
        <div className=" w-full flex justify-center">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/Diversity & moral code.svg"
            alt=""
            className=" h-full object-cover object-center mix-blend-multiply mt-[-20px] max-w-[350px] w-full"
          />
        </div>
        <Link
          href={"/"}
          className="max-w-[101px] w-full text-[#121212] font-[500] leading-[13px] underline tracking-[-0.08px] uppercase mt-[80px]"
        >
          learn more
        </Link>
      </div>
      {/* Science behind Qoves */}
      <div className="max-w-[468px] hidden  w-full sm:relative sm:block">
        {/* div1 with background image */}
        <div className="div1 w-full  flex items-center justify-center relative">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/Science behind Qoves-box.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* div2 centered within div1 */}
        {/* <div className="div2 absolute top-0 left-0 right-0 bottom-0 m-auto max-w-[318px] w-full py-[48px] flex  items-center flex-col justify-between text-[52px] font-[400] text-[#fff]">
       
          <div className="max-ww-[372px] w-full flex flex-col gap-[6px] ">
            <div className="max-w-[120px] w-full text-[#fff] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6px]">
              address /
            </div>
          </div>
        </div> */}
      </div>


    </div>
  );
}
