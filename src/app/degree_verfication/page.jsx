"use client";

import Footer from "@/components/Footer";
import DegreeVerification from "./DegreeVerification";
import { useEffect, useState } from "react";
import { createContractInstance, connectWeb3Metamask } from "@/web3_function";

// export const metadata = {
//   title: "DegreeVerification",
// };
function DegreeVerificationPage() {
  const [contractInstance, setContractInstance] = useState(null);
  const [accounts, setAccount] = useState(null);

  useEffect(() => {
    async function connect() {
      try {
        // let { account, instance } = await createContractInstance();
        let { account, instance } = await connectWeb3Metamask();
        let Userone = account[0];
        setAccount(Userone);
        setContractInstance(instance);
      } catch (error) {
        alert(
          "failed to load degree verification system .....please check user metamask account!!!"
        );
      }
    }

    connect();
  }, []);

  // console.log(accounts, "sssssss");  

  return (
    <div className="bg-[#0E0F12] pt-[86px]   w-full">
      <DegreeVerification
        contractInstance={contractInstance}
        account={accounts}
      />

      <div className=" relative mt-[-220px]  z-20 ">
        <Footer />
      </div>
    </div>
  );
}

export default DegreeVerificationPage;
