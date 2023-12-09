import Link from "next/link";
import React from "react";

function Learn() {
  return (
    <div className="max-w-[1404px] w-full flex   flex-col sm:flex-row">
      {/*  apply // */}
      <div className="sm:max-w-[468px] max-[343px] w-full bg-[#fff]  grid grid-cols-1  border-b-[#E7E7E7] border-b-[1px] ">
      <div className=" sm:max-w-[468px] max-[343px] p-[20px]  sm:p-[48px] flex flex-col gap-[20px]  sm:justify-between sm:border-t-[#E7E7E7] sm:border-t-[1.5px] ">
          <div className="sm:max-w-[468px] max-[343px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6]">
          apply /
          </div>

          <div className="max-w-[300px] w-full flex flex-col gap-[20px] sm:gap-[32px]  ">
            <div className="max-w-[287px] w-full font-[500] text-[18px] text-[#121212] leading-[-0.36px]  capitalize">
            Diagnosis aesthetic concerns
            </div>
            <div className="max-w-[300px] w-full font-[500] text-[18px] text-[#121212] leading-[-0.36px]  capitalize">
            Mental Health & Realistic Expectations
            </div>
            <div className="max-w-[287px] w-full font-[500] text-[18px] text-[#121212] leading-[-0.36px]  capitalize">
            Building an effective beauty routine
            </div>
          
          </div>
        </div>

        {/* Article */}
        <div className=" sm:max-w-[468px] max-[343px] w-full p-[20px] sm:p-[48px]  flex flex-col gap-[20px] sm:justify-between border-t-[#E7E7E7] border-t-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6]">
            article /
          </div>

          <div className="max-w-[265px] w-full flex flex-col gap-[16px]   ">
            <div className="max-w-[260px] w-full font-[500] text-[18px] text-[#121212] leading-[-0.36px]  capitalize">
              Why Should I Improve My Looks?
            </div>
            <div className="max-w-[75px] w-full flex gap-[6px]">
              <Link
                href={"/"}
                className="max-w-[75px]  underline w-full  font-[500] text-[13px] text-[#7D828E] uppercase leading-[13px]  tracking-[-0.065px] opacity-[0.6]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*  youtube channel // */}
      <div className=" sm:max-w-[936px] max-w-[343px] w-full bg-[#fff]    border-l-[#E7E7E7] border-l-[1px] p-[20px] sm:p-[48px] flex flex-col  gap-[20px] sm:gap-[24px]">
        <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase  opacity-[0.6]">
          youtube channel /
        </div>
        {/* videos */}
        <div className=" max-w-[303px] sm:max-w-[840px]  w-full grid grid-cols-1 sm:grid-cols-2  gap-[16px] ">
          
            <div className="max-w-[412px] w-full  flex flex-col justify-between bg-[#000] p-[16px] min-h-[179px] h-full">
              <div className="w-full flex justify-end">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20.018"
                    cy="19.9819"
                    r="19.2319"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-dasharray="1 1"
                  />
                  <path
                    d="M24.5528 19.5578L17.6542 15.2462C17.3211 15.0381 16.8892 15.2775 16.8892 15.6702V24.2935C16.8892 24.6862 17.3211 24.9256 17.6542 24.7175L24.5528 20.4058C24.8661 20.21 24.8661 19.7537 24.5528 19.5578Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-between">
                
               <div className="max-w-[165px] w-full flex gap-[10px]">
               <span className="text-[#fff] italic  text-[27px] font-[300] leading-[26px] tracking-[-0.135px] max-w-[94px] w-full">Natural</span>
                <span className="text-[#fff]   text-[24px] font-[300] leading-[26px] tracking-[-0.13px] max-w-[77px] w-full">Beauty</span>
               </div>

                <div className="max-w-[53px] w-full flex justify-end text-[#fff] text-[13px] font-[500] leading-[13px] items-end">
                8:35
                </div>
              </div>
            </div>
            <div className="max-w-[412px] w-full  flex flex-col justify-between bg-[#000] p-[16px] min-h-[179px] h-full">
              <div className="w-full flex justify-end">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20.018"
                    cy="19.9819"
                    r="19.2319"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-dasharray="1 1"
                  />
                  <path
                    d="M24.5528 19.5578L17.6542 15.2462C17.3211 15.0381 16.8892 15.2775 16.8892 15.6702V24.2935C16.8892 24.6862 17.3211 24.9256 17.6542 24.7175L24.5528 20.4058C24.8661 20.21 24.8661 19.7537 24.5528 19.5578Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-between">
                
               <div className="max-w-[165px] w-full flex gap-[10px]">
               <span className="text-[#fff] italic  text-[27px] font-[300] leading-[26px] tracking-[-0.135px] max-w-[94px] w-full">Natural</span>
                <span className="text-[#fff]   text-[24px] font-[300] leading-[26px] tracking-[-0.13px] max-w-[77px] w-full">Beauty</span>
               </div>

                <div className="max-w-[53px] w-full flex justify-end text-[#fff] text-[13px] font-[500] leading-[13px] items-end">
                8:35
                </div>
              </div>
            </div>
            <div className="max-w-[412px] w-full  flex flex-col justify-between bg-[#000] p-[16px] min-h-[179px] h-full">
              <div className="w-full flex justify-end">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20.018"
                    cy="19.9819"
                    r="19.2319"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-dasharray="1 1"
                  />
                  <path
                    d="M24.5528 19.5578L17.6542 15.2462C17.3211 15.0381 16.8892 15.2775 16.8892 15.6702V24.2935C16.8892 24.6862 17.3211 24.9256 17.6542 24.7175L24.5528 20.4058C24.8661 20.21 24.8661 19.7537 24.5528 19.5578Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-between">
                
               <div className="max-w-[165px] w-full flex gap-[10px]">
               <span className="text-[#fff] italic  text-[27px] font-[300] leading-[26px] tracking-[-0.135px] max-w-[94px] w-full">Natural</span>
                <span className="text-[#fff]   text-[24px] font-[300] leading-[26px] tracking-[-0.13px] max-w-[77px] w-full">Beauty</span>
               </div>

                <div className="max-w-[53px] w-full flex justify-end text-[#fff] text-[13px] font-[500] leading-[13px] items-end">
                8:35
                </div>
              </div>
            </div>
            <div className="max-w-[412px] w-full  flex flex-col justify-between bg-[#000] p-[16px] min-h-[179px] h-full">
              <div className="w-full flex justify-end">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20.018"
                    cy="19.9819"
                    r="19.2319"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-dasharray="1 1"
                  />
                  <path
                    d="M24.5528 19.5578L17.6542 15.2462C17.3211 15.0381 16.8892 15.2775 16.8892 15.6702V24.2935C16.8892 24.6862 17.3211 24.9256 17.6542 24.7175L24.5528 20.4058C24.8661 20.21 24.8661 19.7537 24.5528 19.5578Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
              </div>

              <div className="w-full flex justify-between">
                
               <div className="max-w-[165px] w-full flex gap-[10px]">
               <span className="text-[#fff] italic  text-[27px] font-[300] leading-[26px] tracking-[-0.135px] max-w-[94px] w-full">Natural</span>
                <span className="text-[#fff]   text-[24px] font-[300] leading-[26px] tracking-[-0.13px] max-w-[77px] w-full">Beauty</span>
               </div>

                <div className="max-w-[53px] w-full flex justify-end text-[#fff] text-[13px] font-[500] leading-[13px] items-end">
                8:35
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Learn;
