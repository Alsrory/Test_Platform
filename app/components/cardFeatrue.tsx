import { Feature } from "@/src/constant/imageInterface";
import Image from "next/image";
import { FC } from "react";
import Heading from "./heading";
interface cardprpos extends Feature {}

const CardFeatrur: FC<cardprpos> = ({ imageUrl, title, content, alt }) => {
  return (
    <article className="w-full md:max-w-[40rem] lg:max-w-[44rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-slate-800 hover:border-sky-600
         cursor-pointer "
    >
      <article className="  flex flex-col  items-center  lg:flex-row lg:items-center gap-6">
        {/* <div className=" flex justify-center items-center pt-0    sm:ml-0 sm:px-1 sm:items-end"> */}
          <Image src={imageUrl} width={100} height={50} alt={title} />
        {/* </div> */}
        <div className="flex flex-col text-center     space-y-1">
          <h3 className="  text-slate-100 font-bold text-base ">
            {title}
          </h3>
          <p className="text-sm  leading-5 md:leading-6  text-center sm:text-start  text-gray-300/80 ">
            {content}
          </p>
        </div>
      </article>
    </article>
  );
};
export default CardFeatrur;
