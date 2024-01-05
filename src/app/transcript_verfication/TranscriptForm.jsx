"use client";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { popins } from "../layout";
import { useState } from "react";

function TranscriptForm() {
  useState({
    name: "",
    emil: "",
    password: "",
  });
  return (
    <div className="  shadow-3xl h-max max-w-[536px] w-full rounded-[24px] bg-[#15161B] flex flex-col gap-[40px] p-[40px] mt-[-150px] z-20 ">
      <div
        className={`${popins.className} max-w-[479px] w-full text-[36px] font-[700] leading-[36px] tracking-[-1px] text-[#fff]  `}
      >
        Transcript Verification
      </div>
      {/* name----- */}
      <div className="max-w-[456px] w-full flex flex-col gap-[24px]">
        {/* name */}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99] max-w-[41px] w-full">
            Name
          </div>
          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="text"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
        {/* Father Name */}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99]  w-full">
            Father Name
          </div>
          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="text"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
        {/* CNIC*/}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99] max-w-[456px] w-full">
            <div className="max-w-[456px] w-full flex justify-between  pr-[16px]">
              <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
                CNIC
              </div>
            </div>
          </div>

          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="text"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
        {/* Registration No */}
        <div>
          <div className="text-[13px] font-[500] leading-[16px] pl-[16px] text-[#E0E0FF99] max-w-[456px] w-full">
            <div className="max-w-[456px] w-full flex justify-between  pr-[16px]">
              <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
                Registration No
              </div>
            </div>
          </div>

          <div className="max-w-[456px] w-full mt-[8px]">
            <input
              type="text"
              className="bg-[#E0E0FF08] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]"
            />
          </div>
        </div>
        {/* Course */}

        <div className="text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] max-w-[456px] w-full ">
          <div className="max-w-[456px] w-full flex justify-between  pr-[16px] pl-[16px]">
            <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
              Course
            </div>
          </div>
          <select className="bg-[#1B1C22] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px] ">
            <option value="1">Choose Course</option>
            <option value="2">SE</option>
            <option value="2">CS</option>
            <option value="2">English</option>
            <option value="2">Physics</option>
            <option value="2">Pharmacy</option>
            <option value="2">Psycology</option>
            <option value="2">Geology</option>
          </select>
        </div>

        {/* Session */}

        <div className="max-w-[456px] w-full mt-[8px] ">
          <div className="max-w-[456px] w-full flex justify-between  pr-[16px] pl-[16px]">
            <div className=" text-[13px] font-[500] leading-[16px] text-[#E0E0FF99] w-full">
              Session
            </div>
          </div>
          <select className="bg-[#1B1C22] text-[#fff] text-[16px] leading-[28px] font-[500] max-w-[456px] w-full outline-none rounded-[12px] pl-[16px] py-[10px]">
            <option value="1">Choose Session</option>
            <option value="2">2013-17</option>
            <option value="2">2014-18</option>
            <option value="2">2015-19</option>
            <option value="2">2016-20</option>
            <option value="2">2017-21</option>
            <option value="2">2018-22</option>
            <option value="2">2019-23</option>
          </select>
        </div>
      </div>
      {/* btn */}
      <div className="max-w-[456px] w-full flex justify-between   items-center">
        <div className="max-w-[213px] w-full flex gap-[4px] text-[#fff]"></div>
        {/* btn */}
        <div className="max-w-[176px] w-full ">
          <Button
            text={"Verify Degree"}
            extraClasses={
              " bg-gradient-to-r from-[#00BBFF] to-[#4579F5] shrink-0 max-w-[176px] w-full"
            }
            href={"/login"}
          />
        </div>
      </div>
    </div>
  );
}

export default TranscriptForm;
