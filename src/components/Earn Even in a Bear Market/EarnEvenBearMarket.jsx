import { popins } from "@/app/layout";

function EarnEvenBearMarket() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };
  return (
    <div className="w-full flex  justify-center gap-[136px] pb-[120px]  ">
      {/* left-div-image */}
      <div className="max-w-[648px] w-full flex flex-col  items-center  ">
        <img
          src="/EarnEvenBearMarket_assets/cartoon on the bear_asset.svg"
          alt=""
          className="absolute max-w-[344px] w-full z-10"
        />
        <div className=" max-w-[1118px] w-full absolute  ">
          <div
            className="max-w-[359px] w-full h-[1152px]  transform rotate-[81.8deg] mt-[-103px] ml-[65px] blur-[94.8px]"
            style={gradientStyle}
          ></div>
        </div>
        {/* <img
          src="/EarnEvenBearMarket_assets/Bear_asset.svg"
          alt=""
          className="relative max-w-[513px] w-full mt-[250px] ml-[-40px] "
        /> */}

        
      </div>
      {/* right-div-content */}
      <div className="max-w-[424px] w-full  flex justify-center items-center flex-col gap-[48px]">
        <div
          className={` ${popins.className} max-w-[424px] w-full text-[48px] text-[#fff] font-[600] leading-[48px] `}
        >
          Profit in All Markets
        </div>
        <div className="max-w-[424px] w-full text-[#E0E0FFCC] leading-[28px] text-[16px] font-[500]">
          Our Blockchain Degree Verification System thrives in any academic
          landscape. Unlike traditional methods that excel in favorable
          conditions, our technology adapts to downturns, ensuring reliable
          verification results even in challenging times. Earn trust in all
          educational scenarios with us.
        </div>
      </div>
    </div>
  );
}

export default EarnEvenBearMarket;
