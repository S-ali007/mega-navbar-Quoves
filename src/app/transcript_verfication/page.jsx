import Footer from "@/components/Footer";
import TranscriptVerification from "./TranscriptVerification";

export const metadata = {
  title: "TranscriptVerification",
};
function TranscriptVerificationPage() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]    w-full  mx-auto">
      <TranscriptVerification />

      <div className=" relative mt-[-270px] z-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default TranscriptVerificationPage;
