"use client";

import { popins } from "../layout";
import { useState } from "react";
import { getFunction, addFunction,getStudentWithAddress ,getStudentAddresses} from "@/web3_function";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

function DegreeForm({ contractInstance, account, setError }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    cnic: 0,
    serial: 0,
    registration: 0,
    course: "",
    session: 0,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.fathername ||
      !formData.cnic ||
      !formData.serial ||
      !formData.registration ||
      !formData.course ||
      !formData.session
    ) {
      alert("Please fill in all fields before verifying the degree.");
      return;
    }

    try {
      console.log(account, "Account One");
      const result = await getFunction(
        contractInstance,
        account,
        formData.name,
        formData.fathername,
        formData.cnic,
        formData.serial,
        formData.registration,
        formData.course,
        formData.session,
        formData.cnic
      ); 
      console.log("Verification:", result);


     
     

     

      if (result[1]?.Name) {
        router.push(`/degree_verfication/${result[0]?.[0]}/${result[0]?.[3]}/${result[0]?.[2]}`);
        console.log(result);
      } else {
        setError(result[0]?.[1]);
      }
      // alert("Degree added successfully!");
    } catch (error) {
      console.error("Error interacting with smart contract:", error);
    }
  };

  return (
    <div className="h-max max-w-[536px] w-full z-20">
      <div className="shadow-3xl h-max max-w-[536px] w-full rounded-[24px] bg-[#15161B] flex flex-col gap-[40px] p-[40px] mt-[-150px] z-20">
        <div
          className={`${popins.className} max-w-[379px] w-full text-[36px] font-[700] leading-[36px] tracking-[-1px] text-[#fff]`}
        >
          Degree Verification
        </div>

        <div className="max-w-[456px] w-full flex flex-col gap-[17px]">
          {/* Input fields */}
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Father Name", name: "fathername", type: "text" },
            { label: "CNIC", name: "cnic", type: "number" },
            { label: "Serial No", name: "serial", type: "number" },
            { label: "Registration No", name: "registration", type: "number" },
          ].map((field) => (
            <div key={field.name}>
              <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99]  w-full">
                {field.label}
              </div>
              <div className="max-w-[456px] w-full mt-[8px]">
                <input
                  type={field.type}
                  name={field.name}
                  className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          ))}

          {/* Course */}
          <div className="text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] max-w-[456px] w-full">
            <div className="max-w-[456px] w-full flex justify-between pr-[16px] pl-[16px]">
              <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
                Course
              </div>
            </div>
            <select
              className="bg-[#1B1C22] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
              name="course"
              onChange={handleInputChange}
            >
              <option value="">Choose Course</option>
              <option value="Software Engineering">SE</option>
              <option value="Computer Science">CS</option>
              <option value="English">English</option>
              <option value="Physics">Physics</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Psycology">Psycology</option>
              <option value="Geology">Geology</option>
            </select>
          </div>

          {/* Session */}
          <div className="max-w-[456px] w-full mt-[8px]">
            <div className="max-w-[456px] w-full flex justify-between pr-[16px] pl-[16px]">
              <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
                Session
              </div>
            </div>
            <select
              className="bg-[#1B1C22] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
              name="session"
              onChange={handleInputChange}
            >
              <option value="">Choose Session</option>
              <option value="2013-17">2013-17</option>
              <option value="2014-18">2014-18</option>
              <option value="2015-19">2015-19</option>
              <option value="2016-20">2016-20</option>
              <option value="2017-21">2017-21</option>
              <option value="2018-22">2018-22</option>
              <option value="2019-23">2019-23</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="max-w-[456px] w-full flex justify-between items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className={`bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shrink-0 max-w-[176px] w-full  rounded-[12px] border-[1px] border-[#0E0F12] text-[#fff] font-[600] text-[16px]  justify-center flex px-[24] py-[12px]`}
          >
            Verify Degree
          </button>
        </div>
      </div>
    </div>
  );
}

export default DegreeForm;
