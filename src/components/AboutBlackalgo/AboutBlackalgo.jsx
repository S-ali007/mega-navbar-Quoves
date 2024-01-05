import { popins } from "@/app/layout";

function AboutBlackalgo() {
  return (
    <div className="w-full  flex flex-col justify-center items-center gap-[48px] pb-[120px]">
      <div
        className={`${popins.className} flex   justify-center items-center text-[48px] text-[#fff] font-[600] leading-[48px] tracking-[-2px] max-w-[381px] w-full  `}
      >
        About DVS
      </div>

      <div className="text-[16px] max-w-[696px] w-full font-[500] text-[#E0E0FFCC] text-center">
        Founded in 2021, DVS stands among the pioneers in
        revolutionizing the degree verification landscape. We leverage
        cutting-edge blockchain technology to dynamically identify and validate
        academic credentials. Our verification system ensures not only
        speed and efficiency but also offers enhanced risk mitigation, giving
        you greater control over the verification process. Trust us to redefine
        how academic achievements are authenticated in the digital age.
      </div>
      <div className="max-w-[1096px] w-full flex gap-[89px]">
        <div className="flex gap-[69px]">
          <div>
            <img src="/aboutBlackAlgo-asset/image1algo.svg" alt="" />
          </div>

          <div>
            <img src="/aboutBlackAlgo-asset/image1algo.svg" alt="" />
          </div>
        </div>
        <div>
          <img src="/aboutBlackAlgo-asset/award2.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutBlackalgo;
