import { popins } from "@/app/layout";
import Image from "next/image";

function TrackYourPerformanceDaily() {
  return (
    <>
    <div className="w-full flex flex-col justify-center  gap-[48px]  relative bg-[#0E0F12] pt-[120px] pb-[120px]">
      {/* left-div */}
      <div
        className={`max-w-[484px] w-full mx-auto text-[48px] text-[#fff] text-center font-[600] tracking-[-2px] leading-[48px] ${popins.className}`}
      >
        Verify Degree Effortlessly
      </div>
      <div className="text-[#E0E0FFCC] text-[16px] max-w-[534px] w-full  items-center mx-auto text-center ">
      Seamless Degree Validation, User-Friendly Dashboard, Instant Access to Vital Metrics
      </div>
      {/* right-chart-div */}
      <div className="max-w-[500px] w-full mx-auto    ">
      <Image src="/proventrack_assets/dashborad.jpg" width={500} height={500} alt="" />
      </div>

    </div></>
  );
}

export default TrackYourPerformanceDaily;
