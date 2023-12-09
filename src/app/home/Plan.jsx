"use client";
import About from "@/components/Qoves/About/About";
import Cart from "@/components/Qoves/Cart/Cart";
import Documentation from "@/components/Qoves/Documentation/Documentation";
import Learn from "@/components/Qoves/Learn/Learn";
import Resources from "@/components/Qoves/Resources/Resources";
import Solutions from "@/components/Qoves/Solutions/Solutions";
import Tech from "@/components/Qoves/Tech/Tech";
import Link from "next/link";
import { document } from "postcss";
import React, { useEffect, useState } from "react";

function navbar() {
  const [selectedOption, setSelectedOption] = useState("Solutions");
  useEffect(() => {
    //  console.log("Inner Width: ", window.innerWidth)
    if (window.innerWidth < 640) {
      // console.log("inner-width is 343")
      setSelectedOption("");
    }



  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);


  const handleBackClick = () => {
    setSelectedOption("");
  };
  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };
  const toggle = () => setIsOpen(!isOpen, console.log("close"));

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={` max-w-[343px] max-h-screen sm:h-auto sm:max-w-[1872px] w-full  sm:px-[0px]  mt-[20px] bg-[#fff]  mx-auto  overflow-y-hidden `}
    >
      <div
        className={`${
          !isOpen
            ? "sm:max-w-[585px] max-w-[343px]  translate-x-[0px] delay-500"
            : "sm:max-w-[1872px] max-w-[343px]"
        }  ${
          !isOpen && cartOpen 
            ? "sm:max-w-[585px]  sm:translate-x-[0px] delay-500"
            : "sm:max-w-[1872px]"
        }  duration-[.5s] relative z-10 bg-white  mx-auto w-full  border-[#1212121a] border-[1.5px] flex   sm:justify-between    `}
      >
        <div className="sm:max-w-[177.8px] max-w-[409px] w-full flex justify-center ">
          <button
            className="max-w-[57px] w-full pl-[15px] pr-[11px] pt-[10px] pb-[8.89px] menu-toggle "
            onClick={toggle}
          >
            <div className="max-w-[31px] w-full">
              {isOpen || cartOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M7.77832 23.3345L23.3347 7.77812"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                  <path
                    d="M7.77832 7.77783L23.3347 23.3342"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                </svg>
              ) : (
                <div className="py-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="8"
                    viewBox="0 0 22 8"
                    fill="none"
                  >
                    <path d="M0 1L22 1" stroke="#121212" />
                    <path d="M0 6.86523L22 6.86523" stroke="#121212" />
                  </svg>
                </div>
              )}
            </div>
          </button>

          {/* logo */}
          <Link
            href={"/"}
            className="sm:max-w-[120px] max-w-[351px] w-full sm:pl-[21px] sm:pr-[11px] border-x-[#1212121a] border-x-[1.5px] pl-[20px]  sm:justify-center flex items-center"
          >
            <div className="max-w-[81px] w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81"
                height="26"
                viewBox="0 0 81 26"
                fill="none"
              >
                <path
                  d="M20.4984 20.7226C17.4249 20.7226 14.6543 20.7226 11.8912 20.7226C10.2382 20.7176 8.63234 20.1663 7.31873 19.1528C6.00512 18.1392 5.056 16.7193 4.61632 15.1097C4.15192 13.4075 4.26484 11.5973 4.93708 9.96755C5.60932 8.33777 6.80221 6.98215 8.32567 6.11671C9.77985 5.25442 11.4774 4.90727 13.1491 5.1303C14.8208 5.35334 16.3709 6.13379 17.5536 7.34789C18.7497 8.53468 19.5304 10.0828 19.7776 11.7579C20.0249 13.433 19.7251 15.1438 18.9238 16.6314C18.5983 17.2279 18.2122 17.7938 17.7202 18.5891L20.3697 18.7726L20.4984 20.7226ZM6.40286 12.8308C6.36616 13.6033 6.48366 14.3754 6.7484 15.101C7.01313 15.8267 7.41967 16.4912 7.94383 17.0549C8.46799 17.6186 9.09906 18.07 9.79947 18.3823C10.4999 18.6945 11.2553 18.8613 12.0208 18.8726C12.7863 18.8838 13.5463 18.7394 14.2554 18.448C14.9646 18.1565 15.6084 17.7239 16.1486 17.1759C16.6888 16.6279 17.1144 15.9757 17.4 15.2581C17.6856 14.5406 17.8254 13.7723 17.811 12.9991C17.8487 12.2273 17.7325 11.4557 17.4692 10.7301C17.2059 10.0046 16.8009 9.33993 16.2782 8.77563C15.7556 8.21133 15.1261 7.7589 14.4269 7.44524C13.7278 7.13157 12.9734 6.96307 12.2085 6.94974C11.4437 6.93641 10.684 7.07852 9.97456 7.36764C9.26515 7.65676 8.6205 8.08697 8.07893 8.63273C7.53735 9.17848 7.1099 9.82864 6.82198 10.5446C6.53405 11.2605 6.39152 12.0276 6.40286 12.8002V12.8308Z"
                  fill="#121212"
                />
                <path
                  d="M30.1741 20.7307C29.1495 20.7309 28.1352 20.5245 27.1907 20.1237C26.2461 19.7229 25.3902 19.1356 24.6732 18.3963C23.9562 17.6571 23.3925 16.7807 23.015 15.8185C22.6376 14.8563 22.4541 13.8277 22.4753 12.793C22.5593 10.7423 23.4316 8.80559 24.9069 7.39436C26.3821 5.98312 28.344 5.20866 30.3756 5.23554C32.4072 5.26243 34.3483 6.08855 35.7865 7.53834C37.2246 8.98813 38.0464 10.9473 38.0772 12.9995C38.0434 15.0831 37.1919 17.068 35.7099 18.5177C34.2279 19.9674 32.2368 20.7634 30.1741 20.7307ZM35.9879 12.8236C35.9925 12.0526 35.844 11.2884 35.5511 10.5764C35.2582 9.86432 34.8269 9.21886 34.2827 8.67816C33.7386 8.13746 33.0925 7.7125 32.3829 7.42844C31.6733 7.14438 30.9145 7.00698 30.1514 7.02437C29.3883 7.04177 28.6364 7.21359 27.9402 7.5297C27.244 7.8458 26.6176 8.29975 26.0981 8.86469C25.5786 9.42963 25.1766 10.0941 24.9158 10.8188C24.655 11.5434 24.5407 12.3135 24.5798 13.0836C24.5752 13.8547 24.7237 14.6188 25.0166 15.3308C25.3095 16.0429 25.7407 16.6883 26.2849 17.229C26.8291 17.7697 27.4751 18.1947 28.1847 18.4788C28.8943 18.7628 29.6531 18.9002 30.4163 18.8828C31.1794 18.8654 31.9313 18.6936 32.6275 18.3775C33.3237 18.0614 33.9501 17.6075 34.4695 17.0425C34.989 16.4776 35.3911 15.8131 35.6519 15.0885C35.9127 14.3638 36.0269 13.5937 35.9879 12.8236Z"
                  fill="#121212"
                />
                <path
                  d="M56.5471 11.8587H63.4359V13.7628H56.6228V18.657H64.5789L64.7076 20.5534H54.6318V5.35107H64.2231V7.14049H56.5471V11.8587Z"
                  fill="#121212"
                />
                <path
                  d="M75.9031 6.3001L75.1991 7.73775C74.2701 7.41292 73.3187 7.15734 72.3527 6.97304C71.6134 6.88353 70.8636 6.98346 70.1725 7.26363C69.8526 7.37011 69.5699 7.56769 69.3584 7.8326C69.147 8.09751 69.0158 8.41848 68.9806 8.75692C68.9454 9.09536 69.0077 9.43686 69.1601 9.74036C69.3125 10.0439 69.5484 10.2965 69.8394 10.4678C70.968 11.152 72.1416 11.7576 73.352 12.2801C74.9568 13.0983 76.115 14.2378 76.1075 16.2336C76.1705 17.304 75.8249 18.358 75.142 19.1787C74.459 19.9995 73.4906 20.5246 72.436 20.646C71.3574 20.8161 70.2561 20.7685 69.1958 20.506C68.1355 20.2435 67.1373 19.7713 66.2588 19.1166L67.0158 17.7477C67.2042 17.7816 67.3892 17.8328 67.5684 17.9007C68.984 18.6272 70.4148 19.2772 72.065 18.7725C72.5645 18.6803 73.0237 18.4349 73.38 18.0695C73.7363 17.7041 73.9724 17.2366 74.056 16.7307C74.1258 16.2528 74.0404 15.7649 73.8124 15.3402C73.5845 14.9156 73.2264 14.577 72.7918 14.3754C71.8682 13.8401 70.8765 13.4272 69.9151 12.9683C67.4322 11.7907 66.501 10.1619 67.0839 8.04363C67.6063 6.16246 69.6956 4.92363 72.065 5.12246C72.6305 5.1565 73.1911 5.24874 73.738 5.39775C74.3891 5.62716 75.0098 5.93304 75.9031 6.3001Z"
                  fill="#121212"
                />
                <path
                  d="M49.4395 5.35282H51.7106C49.5001 10.6522 47.3805 15.7452 45.0716 21.3046L38.4478 5.35282L40.7188 5.23047C42.1722 8.86282 43.5954 12.434 45.17 16.3569L49.4395 5.35282Z"
                  fill="#121212"
                />
              </svg>
            </div>
          </Link>
        </div>

        {/*  */}

        <div className="max-w-[113px] sm:max-w-[430px] w-full flex    ">
          {/* cart */}
          <div
            className={`${
              cartOpen
                ? "bg-[#D9D9D9] transition delay-150 duration-300 ease-in-out"
                : "bg-[#fff]"
            } cursor-pointer max-w-[134px] w-full flex gap-[9px]   justify-center sm:border-r-[#1212121a] sm:border-r-[1.5px] items-center`}
            onClick={() => handleCartClick("cart")}
          >
            <div className="max-w-[13px] w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
              >
                <path
                  d="M1 7C1 6.44772 1.44772 6 2 6H13C13.5523 6 14 6.44772 14 7V18C14 18.5523 13.5523 19 13 19H2C1.44772 19 1 18.5523 1 18V7Z"
                  stroke="#121212"
                  stroke-width="1.5"
                />
                <path
                  d="M11 6V4.18182V4.18182C11 2.42455 9.57545 1 7.81818 1H7.18182C5.42455 1 4 2.42455 4 4.18182V4.18182V6"
                  stroke="#121212"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            {/* cart items */}
            <div className="max-w-[50px] text-[16px] leading-[18px]  sm:max-w-[65px] w-full font-[500]  sm:text-[18px] sm:leading-[21px] tracking-[-0.36px] text-[#121212]">
              Cart (0)
            </div>
          </div>
          {/* Free facial assessment */}
          <Link
            href={"/"}
            className="max-w-[296px] w-full sm:flex items-center hidden    "
          >
            <div className="max-w-[210px] w-full flex pl-[30px]  ">
              <div className=" w-full text-[16px] leading-[18px]  font-[500]  sm:text-[18px] sm:leading-[21px] tracking-[-0.36px]  text-[#121212]">
                Free facial assessment
              </div>
            </div>
            <div className="max-w-[63px] w-full flex items-center   justify-center border-l-[#1212121a] border-l-[1.5px]">
              <div className="max-w-[15px] w-full   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                >
                  <path
                    d="M15.1094 1.16016L22.6094 8.66016L15.1094 16.1602"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                  <path
                    d="M22.6094 8.6582L0.109375 8.6582"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div
        className={`${
          !cartOpen && isOpen
            ? "sm:translate-y-[0px] translate-y-0  sm:delay-500"
            : "translate-y-[-1200px]   sm:translate-y-[-900px]"
        } h-screen  sm:h-auto  sm:gap-[0] gap-[325px] flex-col  flex duration-[0.5s] max-w-[1872px] w-full sm:flex  sm:flex-row`}
      >
        {/* Menus */}
        <div className="  sm:h-auto    sm:max-w-[468px] max-w-[343px]  gap-[374px] w-full px-[20px] pt-[32px]  sm:p-[48px]  bg-[#FFF]  sm:bg-[#F9F9F9]  sm:border-r-[#E7E7E7] sm:border-r-[1.5px] flex flex-col sm:gap-[113px] ">
          <div className="sm:max-w-[176px]  hidden sm:inline-block w-full text-[#7D828E] text-[13px] font-[500] leading-[13px] tracking-[-0.065px] uppercase">
            Menus /
          </div>

          {/*  */}
          <div className={` ${selectedOption ? 'translate-y-[-900px] sm:translate-y-0':'translate-y-0'} max-w-[372px] w-full flex flex-col gap-[32px] pb-[32px]   sm:pb-0 `}>
            {/* Solutions */}
            <div
              className={`${
                selectedOption == "Solutions"
                  ? " text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer `}
              onClick={() => handleOptionClick("Solutions")}
            >
              <div className={`  max-w-[141px]  w-full flex gap-[4px]`}>
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  Solutions
                </div>
                <div className="max-w-[12px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase text-start  flex  items-start">
                  01
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Solutions" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Resources */}
            <div
              className={`${
                selectedOption == "Resources"
                  ? "  text-[#121212] "
                  : "text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Resources")}
            >
              <div className="max-w-[164px]  w-full flex gap-[4px]">
                <div className=" w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  Resources
                </div>
                <div className="max-w-[14px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  02
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Resources" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* About */}
            <div
              className={` ${
                selectedOption == "About"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("About")}
            >
              <div className="max-w-[102px]  w-full flex gap-[4px]">
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.6px]">
                  About
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  03
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "About" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Documentation */}
            <div
              className={`${
                selectedOption == "Documentation"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Documentation")}
            >
              <div className="max-w-[226px]  w-full flex gap-[4px]">
                <div className="max-w-[207px] w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Documentation
                </div>
                <div className="max-w-[15px] w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  04
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Documentation" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Tech */}
            <div
              className={`${
                selectedOption == "Tech" ? "  text-[#121212] " : "text-[gray] "
              } max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Tech")}
            >
              <div className="max-w-[85px]  w-full flex gap-[4px]">
                <div className=" w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Tech
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  05
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Tech" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
            {/* Learn */}
            <div
              className={`${
                selectedOption == "Learn"
                  ? "  text-[#121212] "
                  : " text-[gray] "
              }max-w-[372px] w-full flex justify-between cursor-pointer`}
              onClick={() => handleOptionClick("Learn")}
            >
              <div className="max-w-[97px]  w-full flex gap-[4px]">
                <div className="w-full text-[32px] font-[500] leading-[21px] tracking-[-0.64px]">
                  Learn
                </div>
                <div className="max-w-[15px]  w-full text-[12px] font-[400] tracking-[-0.06px] uppercase">
                  06
                </div>
              </div>
              {/* arrow */}
              {selectedOption == "Learn" && (
                <div className="max-w-[15px] w-full hidden sm:inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="17"
                    viewBox="0 0 25 17"
                    fill="none"
                  >
                    <path
                      d="M15.5 1L23 8.5L15.5 16"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                    <path
                      d="M23 8.49805L0.5 8.49805"
                      stroke="#121212"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          {/*  */}
        </div>
       { selectedOption=='' && <div className="max-w-[343px] w-full sm:max-w-[0]  sm:hidden justify-between flex py-[10px] px-[20px] border border-[#E7E7E7]">
          <div className="max-w-[283px] w-full text-[16px] font-[500 ] leading-[18px] tracking-[-0.32px] text-[#121212] ">
            Free facial assessment
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
            >
              <path
                d="M12.5 1.5L20 9L12.5 16.5"
                stroke="#121212"
                stroke-width="1.5"
              />
              <path
                d="M20 8.99805H4.76837e-07"
                stroke="#121212"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>}
        <div className=" w-full   sm:flex flex-col absolute sm:static  ">
        {selectedOption &&  <div className="flex sm:hidden  justify-between w-full py-[14px] px-[20px] border-b-[#E7E7E7] border-b-[1px]">
              <div className="cursor-pointer   " onClick={() => handleBackClick()}>
                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1.5L2 9L9.5 16.5"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                  <path
                    d="M2 8.99805L24.5 8.99805"
                    stroke="#121212"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="text-[#7D828E]">{selectedOption} /</div>
            </div>}
          <div
            className={`${
              selectedOption === "Solutions"
                ? "opacity-100 sm:opacity-100 translate-y-[0px] "
                : "sm:opacity-0 opacity-0"
            } translate-y-[-1200px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full absolute max-w-[1404px] opacity-0`}
          >
             
            <Solutions />
          </div>
          <div className={`${selectedOption==='Resources'?'opacity-100 sm:opacity-100 translate-y-[0px] inline-block ':'sm:opacity-0 opacity-0 hidden'} translate-y-[-1200px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full sm:absolute sm:max-w-[1404px] sm:opacity-0`}><Resources  /></div>
          <div className={`${selectedOption==='About'?'opacity-100 sm:opacity-100 translate-y-[0px] inline-block ':'sm:opacity-0 opacity-0 hidden'} translate-y-[-1200px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full sm:absolute sm:max-w-[1404px] sm:opacity-0`}><About /></div>
          <div className={`${selectedOption==='Documentation'?'opacity-100 sm:opacity-100 translate-y-[0px] inline-block ':'sm:opacity-0 opacity-0 hidden'} translate-y-[-1200px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full sm:absolute sm:max-w-[1404px] sm:opacity-0`}><Documentation /></div>
          <div className={`${selectedOption==='Tech'?'opacity-100 sm:opacity-100 translate-y-[0px] inline-block ':'sm:opacity-0 opacity-0 hidden'} translate-y-[-1200px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full sm:absolute sm:max-w-[1404px] sm:opacity-0`}><Tech /></div>
          <div className={`${selectedOption==='Learn'?'opacity-100 sm:opacity-100 translate-y-[0px] inline-block ':'sm:opacity-0 opacity-0 hidden'} translate-y-[-1400px] sm:translate-y-0 transition-opacity duration-[0.3s] ease-in-out w-full sm:absolute sm:max-w-[1404px] sm:opacity-0`}><Learn /></div>
        </div>
      </div>

      <div className={`${cartOpen && isOpen  ?  ' sm:translate-y-[-505px] duration-[0.4s] translate-y-[-793px]     ':' translate-y-[-1800px] sm:translate-y-[-1200px] duration-[0.4s] '}  
          
           overflow-auto overflow-x-hidden sm:overflow-y-hidden w-full  max-w-[1872px]  `}> <Cart /></div>
    </div>
  );
}

export default navbar;
