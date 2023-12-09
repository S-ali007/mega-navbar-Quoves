import { useState } from "react";

function Cart({extraClasses}) {

  const maindata = [
    {
      id: 1,
      title: "Facial Aesthetic Report",
      text: "*after checkout you will be redirected to provide your report details",
      price: 320+" USD",
    },
    {
      id: 2,
      title: "Facial Aesthetic Report",
      text: "*after checkout you will be redirected to provide your report details",
      price: 320 +" USD",
    },
    {
      id: 3,
      title: "Facial Aesthetic Report",
      text: "*after checkout you will be redirected to provide your report details",
      price: 320 + " USD",
    },
   
  ];
  const [stock, setStock] = useState( {
    id: 1,
    title: "Facial Aesthetic Report",
    text: "*after checkout you will be redirected to provide your report details",
    price: 320+" USD",
  },
  {
    id: 2,
    title: "Facial Aesthetic Report",
    text: "*after checkout you will be redirected to provide your report details",
    price: 320 +" USD",
  },
  {
    id: 3,
    title: "Facial Aesthetic Report",
    text: "*after checkout you will be redirected to provide your report details",
    price: 320 + " USD",
  },);

  const increaseQuantity = e => {
    if(e.target.value === stock.id){
      return console.log("first")
    }
   

    // currentItems[index].id += 1;
    // console.log(currentItems )
    // console.log(first)
    // setStock();
  };

  // const decreaseQuantity = index => {
  //   const currentItems = [...stock];

  //   if (currentItems[index].price > 1) {
  //     currentItems[index].price -= 1;
  //     setStock(currentItems);
  //   }
  // };

  // const manageQuantity = (index, action) => {
  //   const currentItems = [...stock];
  //   if (action === "increase") {
  //     currentItems[index].price += 1;
  //     setStock(currentItems);
  //   }

  //   if (currentItems[index].price > 1 && action === "decrease") {
  //     currentItems[index].price -= 1;
  //     setStock(currentItems);
  //   }
  // };
  return (
    <div className={`${extraClasses} max-w-[1872px] w-full  flex gap-[51px]  sm:gap-[0] flex-col sm:flex-row `}>
      <div className="max-w-[1443px] w-full pt-[20px] sm:pt-[48px] px-[20px] sm:px-[48px] pb-[20px] sm:pb-[48px] gap-[0px] sm:gap-[124px]  border-r-[#E7E7E7] border-r   flex flex-col justify-between max-h-[909px] h-full  ">
        <div className="w-full flex  justify-between ">
          <div>Cart /</div>
          <div>3 Items</div>
        </div>
        <div className="max-w-[1347px] w-full min-h-[227px] h-full">
          {maindata?.map((item, id) => {
            return (
              <div
                className=" max-w-[1347px] w-full py-[27px]  border-[#0000001A] border-dashed border-b-[1.5px] " 
                key={item.id}
              >
                <div className="max-w-[343px] sm:max-w-[1347px] w-full flex flex-col gap-[16px]">
                  <div className=" sm:max-w-[211px] sm:block flex justify-between w-full text-[#000000] text-[20px] sm:text-[22px] leading-[22px] tracking-[-0.44px]">
                    <div className="max-w-[149px] sm:max-w-[211px] w-full">{item.title}</div>
                    <div className="sm:hidden block  max-w-[73px] w-full  text-[16px] font-[400] leading-[-0.32px] text-[#000000] tracking-[-0.32px] opacity-[0.5]">
                      {item.price}
                    </div>
                  </div>
                  
                  <div className="max-w-[343px] sm:max-w-[1347px] w-full flex justify-between items-center">
                    <div className="max-w-[175px] sm:max-w-[824px] w-full text-[10px] sm:text-[14px] font-[400] leading-[8.5px] tracking-[-0.28px] text-[#000] opacity-[0.2]">
                      {item.text}
                    </div>
                    <div className="sm:block hidden max-w-[73px] w-full  text-[16px] font-[400] leading-[-0.32px] text-[#000000] tracking-[-0.32px] opacity-[0.5]">
                      {item.price}
                    </div>
                    <div className="max-w-[96px] w-full border-[#758084] border-[1px] border-opacity-[0.3] flex justify-between px-[8px] pb-[6px] pt-[4px]">
                      <button className="max-w-[6px] w-full text-[16px] text-[700] leading-[22px] opacity-[0.3] tracking-[-0.36px]">
                        -
                      </button>
                      <div className="max-w-[10px] w-full text-[#000]  text-[16px] font-[400] leading-[22px] text-center">
                        1
                      </div>
                      <button className="max-w-[10px] w-full text-[16px] text-[700] leading-[22px] opacity-[0.3] tracking-[-0.36px]" onClick={() => increaseQuantity()}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Cart Summary */}
      <div className="max-w-[429px] w-full pt-[20px]  sm:pt-[48px] px-[16px] pb-[16px] flex flex-col justify-between cursor-pointer ">
        <div className="hidden sm:block sm:max-w-[107px] w-full text-[13px] font-[500] leading-[13px] tracking-[-0.065px] text-[#7D828E] uppercase">
          Cart Summary /
        </div>
        <div className=" max-w-[397px] w-full py-[20px] sm:py-[24px]  px-[16px] bg-[#233137] flex flex-col gap-[24px] ">
          <div className="w-full flex justify-between">
            <div className="max-w-[71px] w-full text-[20px] text-[#fff] font-[500] leading-[22px] tracking-[-0.4px]">
              Subtotal
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
              >
                <path
                  d="M14 1.5L21.5 9L14 16.5"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M22 8.5L-4.76837e-07 8.5"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="365"
              height="2"
              viewBox="0 0 365 2"
              fill="none"
            >
              <path
                opacity="0.1"
                d="M0 1L365 0.999968"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>

          <div className="w-full flex justify-between  items-center">
            <div className="max-w-[137px] w-full text-[#fff] opacity-[0.2] text-[10px] font-[400] leading-[8.5px] tracking-[-0.2px]">
              *value added taxes included within price.
            </div>
            <div className="max-w-[68px] full text-[#B7B3B3] text-[15px] font-[500] leading-[22px] tracking-[-0.3px]">
              $960 USD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
