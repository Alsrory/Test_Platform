import exp from "constants";
import Logo from "./logo";
import Icons, { showfooterCol } from "@/src/constant/iconsfooter";
import ShowFooterCol from "./showfootercol";

function Footer(){
    return(
        <div>
        <div className="grid  grid-cols-1 lg:grid-cols-2 md:px-4 my-16  gap-4 md:gap-8 justify-between">
            <div className=" flex flex-col items-start md:items-center  lg:items-start space-y-3 px-6">
            <Logo/>
            <p className="text-base text-gray-300 capitalize tracking-tight">Join the many who have used the Madrin website to their benefit. Explore and enjoy our online platform!</p>
              <Icons></Icons>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20  gap-x-20 md:mx-2 md:gap-x-10 md:px-6 lg:px-2 ">
                {showfooterCol.map((item,key)=>(
                    <ShowFooterCol key={key} {...item} />
                ))
                }
            </div>
        </div>
        <div className=" flex   text-center border-t-2 border-gray-500 pt-0 top-0 w-full h-12 justify-center items-center md:items-center lg ">

            <p className=" capitalize text-base font-semibold">Test 2024 .Inc.@all copy right resreved</p>
        </div>
        </div>
    )
}
export default Footer