"use client";
import { getStudentAddresses, getStudentWithAddress } from "@/web3_function";
import React, { useEffect, useState } from "react";
import { connectWeb3Metamask } from "@/web3_function";

const page = ({ params }) => {

const [studentDetails,setStudentDetails]=useState("");


  useEffect(() => {
    async function address() {
      try {
        let { account, instance } = await connectWeb3Metamask();
        let Userone = account[0];
        console.log(params,"xxxxxxxxxxxxxxx");
        const studentDetails = await getStudentWithAddress(
          instance,
          Userone,
          params.id[0]
        );

        console.log(studentDetails, "ssssssssss");
        setStudentDetails(studentDetails);

      } catch (error) {
        console.log("error .....", error);
      }
    }

    address();
  }, []);

  return (
    <div className="h-screen w-full  flex flex-col justify-center items-center mx-auto bg-[#15161B] ">
      <div className="max-w-[1220px] w-full">
        
      

        <div className=" border-[#759EC5] flex flex-col items-center rounded-[14px] border-[2px] p-[30px] w-full bg-[#F7F7F7] shadow-3xl">
          <div className="w-full flex justify-between">
            <div className="max-w-[657px] w-full text-[16px] text-[black] font-sans">
              Serial No : <span className="underline text-[red]">{studentDetails.serialNo}</span>{" "}
            </div>
            <div className="max-w-[200px] w-full text-[16px] text-[black] font-sans">
              {" "}
              Registration No : <span className="underline ">{ studentDetails.registrationNo}</span>{" "}
            </div>
          </div>
          <div>
            <img
              src="https://aust.edu.pk/wp-content/uploads/2022/04/AUST-Logo-e1651042559517.png"
              alt=""
            />
          </div>
          <div className="text-[45px] font-sans font-[800]   max-w-[880px] w-full text-center  ">
            ABBOTTABAD UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </div>

          {/* name */}
          <div className=" text-[24px] font-serif font-[600]">
          {studentDetails.name} <span>s/o</span> {studentDetails.fatherName}
          </div>

          <div className=" text-center">
            has been conferred upon the degree of <br />
            <span className="text-[24px] font-serif font-[600]">
              Bachelor of Science in
            </span>{" "}
            <span className="text-[20px]">{studentDetails.course}</span>
          </div>

          <div className="text-center">
            This is digital degree that was issued using blockchain technology
            with block no <span className="underline font-bold">{params.id[1]} </span>
            <br />
            <br />
            <br />
            Block Hash{" "}
            <span className="underline font-bold">{params.id[2]}</span><br />
            Block Address :
            <span className="underline font-bold"> {params.id[0]} </span><br />

            
          </div>
          {/* session */}
          <div>Session : {studentDetails.session}</div>

          <div className="w-full max-w-[1220px] flex  mt-[100px] ">
            <div className=" w-full max-w-[406px] items-center  flex justify-center">
              Controller Examinations
            </div>
            <div className="w-full max-w-[406px] items-center  flex justify-center">
              Vice Chaneceller
            </div>
            <div className="w-full max-w-[406px] items-center  flex justify-center">
              Registrar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
