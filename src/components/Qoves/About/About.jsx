import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div className="max-w-[1404px] w-full flex  flex-col sm:flex-row ">
      {/* Nose assessment report */}
      <div className="sm:block hidden max-w-[468px] w-full relative">
        {/* div1 with background image */}
        <div className="div1 w-full h-full flex items-center justify-center relative">
          <Image
            height={100}
            width={100}
            src="/nose assesment asset/Rectangle about-back.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* div2 centered within div1 */}
        <div className="div2 absolute top-0 left-0 right-0 bottom-0 m-auto max-w-[318px] w-full py-[48px] flex  items-center flex-col justify-between text-[52px] font-[400] text-[#fff]">
          {/* logo-mid */}
          <div className="">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="234"
                height="75"
                viewBox="0 0 234 75"
                fill="none"
              >
                <path
                  d="M59.6774 59.39C50.8691 59.39 42.9287 59.39 35.0099 59.39C30.2728 59.3757 25.6704 57.7956 21.9057 54.891C18.141 51.9863 15.4209 47.9167 14.1608 43.3038C12.8299 38.4256 13.1535 33.2378 15.0801 28.567C17.0067 23.8962 20.4254 20.0111 24.7915 17.5308C28.9591 15.0596 33.8241 14.0647 38.615 14.7039C43.4059 15.343 47.8484 17.5798 51.2379 21.0593C54.6657 24.4605 56.9033 28.8973 57.6118 33.6979C58.3203 38.4985 57.4613 43.4016 55.1648 47.665C54.2319 49.3744 53.1254 50.9962 51.7152 53.2755L59.3086 53.8014L59.6774 59.39ZM19.2809 36.7729C19.1757 38.9868 19.5125 41.1994 20.2712 43.2791C21.0299 45.3588 22.195 47.2631 23.6972 48.8786C25.1994 50.4941 27.008 51.7878 29.0153 52.6827C31.0226 53.5777 33.1876 54.0556 35.3815 54.0879C37.5754 54.1203 39.7533 53.7064 41.7856 52.8711C43.818 52.0357 45.6631 50.7959 47.2114 49.2254C48.7596 47.6548 49.9793 45.7857 50.7977 43.7293C51.6162 41.6728 52.0168 39.4711 51.9756 37.255C52.0837 35.0431 51.7505 32.8318 50.9959 30.7524C50.2413 28.6731 49.0806 26.7683 47.5829 25.151C46.0851 23.5338 44.2808 22.2372 42.2772 21.3382C40.2736 20.4393 38.1115 19.9564 35.9195 19.9182C33.7275 19.88 31.5502 20.2873 29.5171 21.1159C27.484 21.9444 25.6365 23.1774 24.0844 24.7415C22.5323 26.3056 21.3072 28.1689 20.4821 30.2206C19.6569 32.2724 19.2484 34.4708 19.2809 36.6852V36.7729Z"
                  fill="white"
                />
                <path
                  d="M87.4069 59.4125C84.4706 59.4131 81.5638 58.8217 78.8567 57.673C76.1497 56.5242 73.6968 54.8412 71.6419 52.7225C69.587 50.6039 67.9714 48.0922 66.8898 45.3347C65.8081 42.5772 65.2822 39.6294 65.3428 36.6639C65.5836 30.7869 68.0836 25.2363 72.3115 21.1918C76.5395 17.1474 82.1621 14.9278 87.9845 15.0049C93.8068 15.0819 99.37 17.4495 103.492 21.6045C107.613 25.7594 109.968 31.3742 110.057 37.2556C109.96 43.2272 107.519 48.9155 103.272 53.0703C99.0249 57.225 93.3184 59.5062 87.4069 59.4125ZM104.069 36.7516C104.082 34.5418 103.656 32.3518 102.817 30.3112C101.978 28.2705 100.742 26.4207 99.1819 24.8711C97.6224 23.3215 95.771 22.1036 93.7373 21.2895C91.7036 20.4754 89.5289 20.0817 87.3419 20.1315C85.1549 20.1813 83 20.6738 81.0048 21.5797C79.0095 22.4856 77.2144 23.7866 75.7256 25.4057C74.2368 27.0248 73.0846 28.929 72.3372 31.0058C71.5897 33.0827 71.2623 35.2898 71.3741 37.4967C71.3609 39.7065 71.7866 41.8964 72.626 43.9371C73.4654 45.9777 74.7014 47.8276 76.2609 49.3772C77.8205 50.9268 79.6719 52.1447 81.7056 52.9587C83.7393 53.7728 85.914 54.1666 88.101 54.1168C90.288 54.0669 92.4428 53.5745 94.4381 52.6686C96.4334 51.7626 98.2285 50.4617 99.7173 48.8426C101.206 47.2235 102.358 45.3192 103.106 43.2424C103.853 41.1656 104.181 38.9585 104.069 36.7516Z"
                  fill="white"
                />
                <path
                  d="M162.99 33.9872H182.732V39.4443H163.207V53.4704H186.008L186.377 58.9055H157.501V15.3369H184.989V20.4652H162.99V33.9872Z"
                  fill="white"
                />
                <path
                  d="M218.462 18.057L216.444 22.1771C213.782 21.2462 211.056 20.5137 208.287 19.9856C206.168 19.729 204.019 20.0154 202.039 20.8184C201.122 21.1235 200.312 21.6898 199.706 22.449C199.1 23.2082 198.724 24.128 198.623 25.098C198.522 26.0679 198.701 27.0466 199.137 27.9164C199.574 28.7863 200.25 29.5102 201.084 30.0011C204.319 31.9621 207.682 33.6975 211.151 35.1951C215.75 37.5401 219.07 40.8056 219.048 46.5256C219.228 49.593 218.238 52.6137 216.281 54.966C214.324 57.3182 211.548 58.8231 208.526 59.171C205.435 59.6585 202.278 59.5222 199.24 58.7699C196.201 58.0175 193.34 56.6641 190.822 54.7878L192.992 50.8649C193.532 50.962 194.062 51.1087 194.576 51.3032C198.633 53.3852 202.733 55.2481 207.463 53.8016C208.894 53.5376 210.21 52.8341 211.231 51.7869C212.252 50.7397 212.929 49.3999 213.169 47.9501C213.369 46.5805 213.124 45.1822 212.47 43.9652C211.817 42.7481 210.791 41.7779 209.545 41.2C206.899 39.6659 204.057 38.4825 201.301 37.1675C194.185 33.7925 191.517 29.1244 193.187 23.0538C194.684 17.6625 200.672 14.1121 207.463 14.6819C209.083 14.7795 210.69 15.0439 212.257 15.4709C214.123 16.1284 215.902 17.005 218.462 18.057Z"
                  fill="white"
                />
                <path
                  d="M142.62 15.3409H149.128C142.793 30.5285 136.719 45.1244 130.101 61.0572L111.118 15.3409L117.627 14.9902C121.792 25.4002 125.871 35.6349 130.383 46.8777L142.62 15.3409Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="max-w-[213px] w-full text-[#fff] uppercase text-[13px] tracking-[-0.065px] leading-[13px]">
              Aesthetic clinic of the future
            </div>
          </div>

          {/* address */}
          <div className="max-ww-[372px] w-full flex flex-col gap-[6px] ">
            <div className="max-w-[120px] w-full text-[#fff] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase opacity-[0.6px]">
              address /
            </div>
            <div className=" w-full  text-[#fff] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
              QOVES AU 82 Bathurst Street, Liverpool, Sydney, NSW, Australia
            </div>
          </div>
        </div>
      </div>

      {/* Lists / / */}
      <div className=" max-w-[468px] w-full p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:justify-between  border-r-[#E7E7E7] border-r-[1px] ">
        <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
          Lists /
        </div>
        <div className="max-w-[372px] w-full flex flex-col gap-[20px] sm:gap-[32px]  ">
          {/* Career*/}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Career
            </div>
          </div>
          {/* Team */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Team
            </div>
          </div>
          {/* Press */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Press
            </div>
          </div>

          {/* Partnerships */}
          <div
            className={`max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Partnerships
            </div>
          </div>
          {/*Company vision*/}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Company vision
            </div>
          </div>
          {/*Qoves clinic*/}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Qoves clinic
            </div>
          </div>
        </div>
      </div>

      {/*  education / / */}
      <div className=" sm:max-w-[468px] max-w-[343px] w-full  grid grid-cols-1  bg-[#fff] border-b-[#E7E7E7] border-b-[1px] ">
        <div className="sm:max-w-[468px] max-w-[343px] w-full flex flex-col gap-[20px] sm:justify-between p-[20px] sm:p-[48px] border-t-[#E7E7E7] border-t-[1.5px] ">
          <div className="max-w-[176px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase sm:opacity-100 opacity-[0.6]">
            education /
          </div>
          {/* Professional courses  */}
          <div className={`max-w-[372px] w-full `}>
            <div className="w-full text-[18px] font-[500]  tracking-[-0.36px]">
              Professional courses
            </div>
          </div>
          {/* Qoves mental health association */}
          <div
            className={` max-w-[372px] w-full flex justify-between cursor-pointer`}
          >
            <div className=" w-full text-[18px] font-[500]  tracking-[-0.18px]">
              Qoves mental health association
            </div>
          </div>
        </div>
        {/* email */}
        <div className="sm:max-w-[468px]  max-w-[343px] w-full p-[20px] sm:p-[48px] flex flex-col gap-[20px] sm:justify-between  border-t-[#E7E7E7] border-t-[1.5px]">
          <div className="max-w-[372px] w-full flex flex-col sm:flex-row   gap-[6px]  ">
            <div className="max-w-[183px] w-full text-[#7D828E] text-[13px] font-[500]  leading-[13px] tracking-[-0.065px]  uppercase sm:opacity-100 opacity-[0.6]">
              {" "}
              email /
            </div>
            <div className="max-w-[183px] w-full text-[#121212]   text-[18px] font-[500]  leading-[13px] tracking-[-0.065px]  ">
              {" "}
              info@qoves.com
            </div>
          </div>
          <div className="max-w-[372px] w-full flex flex-col sm:flex-row  gap-[6px]  ">
            <div className="max-w-[183px] w-full text-[#7D828E] text-[13px] font-[500]  leading-[13px] tracking-[-0.065px]  uppercase sm:opacity-100 opacity-[0.6]">
              {" "}
              report /{" "}
            </div>
            <div className="max-w-[183px] w-full text-[#121212]   text-[18px] font-[500]  leading-[13px] tracking-[-0.065px]  ">
              {" "}
              report@qoves.com{" "}
            </div>
          </div>
          <div className="max-w-[372px] w-full flex flex-col sm:flex-row   gap-[6px]  ">
            <div className="max-w-[183px] w-full text-[#7D828E] text-[13px] font-[500]  leading-[13px] tracking-[-0.065px]  uppercase sm:opacity-100 opacity-[0.6] ">
              {" "}
              press /
            </div>
            <div className="max-w-[183px] w-full text-[#121212]   text-[18px] font-[500]  leading-[13px] tracking-[-0.065px]  ">
              {" "}
              press@qoves.com
            </div>
          </div>
          <div className="max-w-[372px] w-full flex flex-col sm:flex-row   gap-[6px]  ">
            <div className="max-w-[183px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px]  uppercase sm:opacity-100 opacity-[0.6] ">
              {" "}
              corporate /
            </div>
            <div className="max-w-[183px] w-full text-[#121212]   text-[18px] font-[500]  leading-[13px] tracking-[-0.065px]  ">
              {" "}
              corporate@qoves.com
            </div>
          </div>
          <div className="sm:hidden  max-w-[372px] w-full flex flex-col sm:flex-row   gap-[6px]  ">
            <div className="max-w-[183px] w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] sm:opacity-100 opacity-[0.6] uppercase ">
              {" "}
              address /
            </div>
            <div className="max-w-[303px] w-full text-[#121212]   text-[18px] font-[500]   tracking-[-0.36px]  ">
              {" "}
              QOVES AU 82 Bathurst Street, Liverpool, Sydney, NSW, Australia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
