'use client'
import Hero from "@/components/Let Our World-Class AI Trade For You/Hero";
import TrackYourPerformanceDaily from "@/components/TrackYourPerformanceDaily/TrackYourPerformanceDaily";
import ProvenTraceRecord from "@/components/A Proven Trace Record/ProvenTraceRecord";
import EarnEvenBearMarket from "@/components/Earn Even in a Bear Market/EarnEvenBearMarket";
import ProvenTradingStrategies from "@/components/Proven Trading Strategies/ProvenTradingStrategies";
import ConnectBlackalgoBinanceaccount from "@/components/Connect Blackalgo to your Binance account/ConnectBlackalgoBinanceaccount";
import Whyblackalgo from "@/components/WhyBlackalgo/Whyblackalgo";
import SimplePricing from "@/components/SimplePricing/SimplePricing";
import AboutBlackalgo from "@/components/AboutBlackalgo/AboutBlackalgo";
import Footer from "@/components/Footer";
import Faq from "@/components/FAQs/Faq";
import { createContractInstance } from "../web3_function";
import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    async function connect() {
      try {
        let { account , instance } = await createContractInstance();
        
        let Userone = account;
       

        console.log(account);
        console.log(instance)
      } catch (error) {
        alert(
          "failed to load degree verification system .....please check user metamask account!!!"
        );
      }
    }

    connect();
  }, []);
  return (
    <div className=" w-full  bg-[#131416] ">
      <div className="max-w-[1680px] w-full mx-auto">
        <Hero />
        <TrackYourPerformanceDaily />
        <ProvenTraceRecord />
        <EarnEvenBearMarket />
        <ProvenTradingStrategies />
        <ConnectBlackalgoBinanceaccount />
        <Whyblackalgo />
        <SimplePricing />
        <AboutBlackalgo />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
