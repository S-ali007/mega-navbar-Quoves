import { popins } from "@/app/layout";
import GetStartedToday from "./Get Started Today/GetStartedToday";

function ConnectBlackalgoBinanceaccount() {
  const gradientStyles = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };

  return (
    <div className=" max-w-[1680px] w-full mx-auto bg-[#0E0F12] pb-[120px]">
      <div className="w-full max-w-[1680px] flex  justify-center  ">
        <div className="flex gap-[136px] ">
          {/* logo-binance */}
          <div className="z-10">
            <div className="max-w-[648px] w-full ">
              <img src="/connect/Binance_logo_asset1.png" alt="" />
            </div>
          </div>
          <div className="max-w-[1118px] w-full absolute  ">
            <div
              className="max-w-[270px] w-full h-[1152px]  rotate-[75deg] ml-[-137px] mt-[-143px] blur-[94.5px]"
              style={gradientStyles}
            ></div>
          </div>

          {/* content area */}
          <div className="max-w-[424px] w-full flex flex-col gap-[48px] justify-center items-center">
            <div
              className={`${popins.className} tracking-[-2px] max-w-[424px] w-full text-[48px] font-[600] leading-[48px] text-[#fff]`}
            >
             Ethereum BlockChain 
            </div>
            <div className="text-[16px] font-[500] leading-[28px] text-[#E0E0FFCC]">
              It's important to note that only the admin has the privilege to
              add new student records through Ethereum, ensuring the utmost
              security and control. Your funds always stay secure in your
              account
            </div>
          </div>
        </div>
      </div>
      <GetStartedToday />
    </div>
  );
}

export default ConnectBlackalgoBinanceaccount;
