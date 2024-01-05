import Footer from "@/components/Footer";
import DegreeVerification from "./DegreeVerification";

export const metadata = {
  title: "DegreeVerification",
};
function DegreeVerificationPage() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]   w-full">
      <DegreeVerification />

      <div className=" relative mt-[-220px]  z-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default DegreeVerificationPage;
