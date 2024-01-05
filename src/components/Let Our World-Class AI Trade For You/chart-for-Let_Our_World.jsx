import Image from "next/image";






const HeroChart = ({ children }) => {
  const gradientStyle = {
    backgroundImage: "linear-gradient(141deg, #001687 5.29%, #05B6FE 101.76%)",
  };

  

  return (
    <div className=" max-w-[788px] w-full relative      ">
      <div
        className=" max-w-[431px] w-full h-[1152px] blur-[94.5px] absolute left-[90px] "
        style={gradientStyle}
      >
      </div>
    <div className="w-full relative z-20  ">
     <Image src="/proventrack_assets/hero-degree-cut.png" width={500} height={500} alt=""  />
    </div>
    </div>
  );
};

export default HeroChart;
