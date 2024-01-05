import Footer from "@/components/Footer";
import Options from "./Options";

export const metadata = {
  title: "Confirmation",
};
function Confirm() {
  return (
    <div className="bg-[#0E0F12] pt-[86px]  h-screen  w-full mx-auto ">
      <Options></Options>
      <div className=" relative mt-[-300px] z-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default Confirm;
