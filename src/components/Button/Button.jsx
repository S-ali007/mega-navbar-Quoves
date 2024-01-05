import Link from "next/link";

const Button = ({text,extraClasses,href}) => {
  return (
    <Link  href={`${href}`} className={`${extraClasses}  rounded-[12px] border-[1px] border-[#0E0F12] text-[#fff] font-[600] text-[16px] max-w-[143px] w-full justify-center flex px-[24] py-[12px]`}>
      {text}  
    </Link>
  );
};

export default Button;
