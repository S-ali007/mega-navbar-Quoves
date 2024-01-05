import { popins } from "@/app/layout";

function Whyblackalgo() {
  const shadow = {
    boxShadow:
      "0px 4px 8px 0px rgba(9, 13, 20, 0.16), -2px -2px 4px 0px rgba(224, 224, 255, 0.02), 0px 1px 2px 0px rgba(9, 13, 20, 0.24)",
  };
  const maindata = [
    {
      id: 0,
      title: "Security First ", 
      // title2:"Guaranteed",
      para: "Your funds remain in your",
      para2:" Binance account",
      imgUrl: "/WhyBlackalgo_asset/safekeeping-assets.svg",
    },
    {
      id: 1,
      title: "Effortless Integration ",
      para: "No expertise needed. Simply choose your verification preferences, connect to our system, and you're all set to streamline the validation process for your degrees.",
      imgUrl: "/WhyBlackalgo_asset/fastAnd Easy-assets.svg",
    },
    {
      id: 2,
      no: "03",
      title: "Proven Performance ",
      para: "With an audited track record boasting an 87.75% success rate, verified by [Verification Authority], our system's effectiveness is a testament to its reliability. Your trust in our blockchain technology ensures accurate and efficient degree verification every time.",
      imgUrl: "/WhyBlackalgo_asset/AuditedTrack-assets.svg",
      lnik:"Fxblue.com"
    },
  ];
  return (
    <div className="bg-[#131416]  w-full  flex justify-center pt-[120px] mx-auto gap-[24px]  pb-[120px] ">
      {/* heading */}
      <div
        className={`${popins.className} max-w-[312px] w-full text-[48px] font-[600] leading-[48px] tracing-[-2px] text-[#fff]`}
      >
        Why DVS
      </div>
      {/* cards---safeKeeping--fast--trackRecord */}
      {maindata.map((items, id) => {
        return (
          <>
            <div
              className="bg-[#15161B] max-w-[312px] w-full  font-[600] leading-[48px]    pt-[32px] px-[32px] rounded-[24px]  flex	flex-col gap-[32px]  hover:cursor-pointer transition-all  duration-500  [transform-style:preserve-3d] group-hover:[transform]:rotateY(180deg) pb-[120px]"
              style={shadow}
            >
              {/* logo */}
              
              <div>
                <img src={items.imgUrl} alt="" />
              </div>
              <div className="">
                <div className="text-[18px] font-[600] leading-[24px] max-w-[248px] w-full    tracking-[-0.4px] text-[#fff]">
                  {items.title} <br />{items.title2}
                </div>
                <div className="max-w-[248px] w-full text-[#E0E0FFCC] text-[14px] leading-[20px] font-[500] mt-[8px]">
                  {items.para} <link rel="stylesheet" href="Fxblue.com" /><br />{items.para2}
                </div>
              </div>
             
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Whyblackalgo;
