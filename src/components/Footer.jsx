import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-[#131416]">
    <div className=" bg-[#131416] max-w-[1680px]  flex flex-col  justify-center px-[180px] mx-auto pb-[72px] ">
      {/* logo and social-links */}
      <div className="flex max-w-[1680px] w-full  justify-between text-[#FFF] py-[30px]   items-center font-[600]  ">
      <a
                href="/"
                className="max-w-[158px] w-full flex items-center align-middle gap-[5px] "
              >
                <svg
                  width="31"
                  height="29"
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.234 0.00132012C13.0648 1.40457 17.8962 2.80649 22.7256 4.20914L5.04102 5.31449C5.41384 4.18132 6.5037 3.02512 6.87652 1.89194C6.93353 1.66586 7.0318 1.38207 7.2051 1.08176C7.5339 0.5128 7.9669 0.17544 8.2347 0L8.234 0.00132012Z"
                    fill="url(#paint0_linear_1_4)"
                  />
                  <path
                    d="M5.32729 1.73482L1.07185 9.91601C0.73627 10.5616 0.78016 11.3372 1.1851 11.9403L10.0768 25.346C11.9821 21.304 11.5464 16.5523 8.937 12.9196C6.61354 9.68681 5.10923 7.57829 4.95386 7.33593C4.91005 7.26787 4.78752 7.07575 4.78289 6.81652C4.77961 6.58188 4.86892 6.41058 4.911 6.3373C6.00821 4.22632 7.1067 2.11597 8.204 0.00496659C6.99451 -0.00372341 5.88127 0.664257 5.32593 1.73422L5.32729 1.73482Z"
                    fill="url(#paint1_linear_1_4)"
                  />
                  <path
                    d="M30.0458 17.6982C26.4824 21.2329 22.917 24.7682 19.3535 28.3028C21.8705 22.9868 24.3888 17.6715 26.9057 12.3555C27.7237 13.2268 28.2162 14.7325 29.0341 15.6039C29.2045 15.7621 29.4075 15.9849 29.5893 16.2809C29.931 16.8406 30.0206 17.3832 30.0458 17.6982Z"
                    fill="url(#paint2_linear_1_4)"
                  />
                  <path
                    d="M29.9209 14.3286L24.7659 6.67751C24.3596 6.0738 23.6551 5.73855 22.9276 5.80147L6.83398 7.0926C9.4753 10.7015 13.8717 12.6108 18.3281 12.0852C22.2954 11.6173 24.877 11.323 25.1665 11.3045C25.2478 11.2988 25.4761 11.2841 25.7054 11.4055C25.9128 11.5153 26.0213 11.6754 26.0646 11.748C27.394 13.7218 28.7247 15.6962 30.0541 17.67C30.6453 16.6197 30.5928 15.3276 29.9196 14.328L29.9209 14.3286Z"
                    fill="url(#paint3_linear_1_4)"
                  />
                  <path
                    d="M3.4952 27.3319C2.32967 22.4616 1.16549 17.5919 0 12.7217L9.7179 27.4608C8.544 27.7001 6.99564 27.3294 5.82042 27.5681C5.59549 27.6307 5.2986 27.6857 4.9505 27.6853C4.29205 27.6825 3.7818 27.475 3.49712 27.3312L3.4952 27.3319Z"
                    fill="url(#paint4_linear_1_4)"
                  />
                  <path
                    d="M6.44798 28.9861L15.6989 28.6126C16.4288 28.5827 17.0834 28.1621 17.4111 27.5128L24.7202 13.1894C20.2455 13.5437 16.3114 16.2739 14.4312 20.3274C12.7565 23.9357 11.6599 26.2801 11.5255 26.5345C11.4879 26.605 11.3807 26.808 11.1565 26.938C10.9535 27.057 10.7588 27.0649 10.676 27.0635C8.2892 27.1599 5.90242 27.2563 3.51562 27.3527C4.10761 28.4028 5.24155 29.0331 6.44994 28.9854L6.44798 28.9861Z"
                    fill="url(#paint5_linear_1_4)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4"
                      x1="21.2205"
                      y1="4.10411"
                      x2="6.70811"
                      y2="2.20927"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_4"
                      x1="12.7381"
                      y1="17.7918"
                      x2="0.32733"
                      y2="10.986"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_1_4"
                      x1="19.524"
                      y1="27.9166"
                      x2="27.9407"
                      y2="14.0016"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_1_4"
                      x1="14.8113"
                      y1="13.6665"
                      x2="24.3846"
                      y2="5.92902"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_1_4"
                      x1="-0.0798898"
                      y1="12.7291"
                      x2="6.64641"
                      y2="27.5687"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0862FF" />
                      <stop offset="1" stop-color="#070860" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_1_4"
                      x1="19.7128"
                      y1="14.4166"
                      x2="14.6713"
                      y2="28.6836"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#CBEF9B" />
                      <stop offset="0.145833" stop-color="#53E894" />
                      <stop offset="0.5" stop-color="#11B7EC" />
                      <stop offset="1" stop-color="#0862FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="text-[20px]">DVS</div>
              </a>
        <div className="flex gap-[48px] text-[#FFF] py-[30px]   items-center font-[600]">
          {" "}
          <a href="#Performance">Performance</a>
          <a href="#Strategies">Strategies</a>
          <a href="#About">About</a>
        </div>
        {/* social logins btns */}
        <div className="max-w-[192px] w-full flex gap-[24px]">
          <Link className="max-w-[48px] w-full" href={"https://twitter.com/?lang=en"}>
            <img src="/twitter-asset.svg" alt="" />
          </Link>
          <Link className="max-w-[48px] w-full" href={"https://www.instagram.com/"}>
            <img src="/instagram-asset.svg" alt="" />
          </Link>
          <Link className="max-w-[48px] w-full" href={"https://discord.com/"}>
            <img src="/discord-assset.svg" alt="" />
          </Link>
        </div>
      </div>
      {/* Disclamer-content */}

      <div>
        <div className="text-[16px] font-[600] leading-[24px] text-[#fff] max-w-[88px] w-full">
          Disclaimer
        </div>
        <div className="mt-[12px] flex max-w-[1322px] w-full gap-[24px] text-[13px] font-[500] leading-[16px] text-[#E0E0FF99]">
          <div className="max-w-[648px] w-full">
          This platform is operated by ALI and Co. in collaboration with Ether Blockchain. By accessing this server and utilizing ALI and Co.'s degree verification products, you acknowledge and agree to the following terms:<br /><br />
<span>1. Compliance Responsibility: You are solely accountable for adhering to all relevant laws and regulations associated with your utilization of ALI and Co.'s degree verification products, including those concerning blockchain technologies.<br />
</span>
<br />
<span>2. Legal Representations Disclaimer: ALI and Co. makes no representations or warranties regarding the legal status of blockchain technologies, or their applicability to your use of degree verification products.<br />
</span>
<br />
<span>3. Assumption of Risks: You acknowledge and assume all legal, academic, and other risks related to your use of ALI and Co.'s degree verification products.<br />
</span>
<br />
<span>4. Usage Restrictions: The utilization of ALI and Co.'s degree verification products may be restricted in certain jurisdictions. ALI and Co. reserves the right to limit product usage to institutions and entities complying with specific jurisdictional requirements.<br />
</span>
          </div>

          <div className="max-w-[648px] w-full">
           <span>5. Informational Purpose Only: Materials and information provided on this platform, including verification statistics, are intended solely for informational purposes, offering no guarantee of future verification outcomes.</span> <br /><br />

             <span>6. No Responsibility for Losses: ALI and Co. is not accountable for any losses, errors, or damages occurring in your verification process. You accept that these risks are inherent in the degree verification process and assume full responsibility for any resulting damages.</span>  <br /> <br />

            <span>7. Disclaimer of Liability: ALI and Co. is not responsible for determining applicable laws for your degree verification. If you disagree with this disclaimer’s terms, kindly refrain from using this platform.</span>  <br />
          </div>
        </div>
        <div className="flex max-w-[1680px] w-full mt-[48px]  justify-between"><div className="flex flex-col gap-[4px]">
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[157px] w-full">Made by <Link href={"https://roobinium.io/"} className="text-[#fff] text-[14px] font-[500] leading-[20px]">ALI and Co.</Link> </div>
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[317px] w-full">©2022-2023 All rights reserved</div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] max-w-[96px]  w-full">Risk Warning</div>
          <div className=" max-w-[199px] w-full text-[#E0E0FFCC] text-[14px] font-[500] leading-[20px] ">Term of Use & Privacy Policy</div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default Footer;
