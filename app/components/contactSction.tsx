import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Heading from "./heading";

function ContactSction(){
    return(
       
        <article className=" flex  flex-col lg:flex-row  lg:justify-between bg-slate-800  py-8 text-center rounded-lg shadow-md mt-16 m mx-4  gap-2 lg:text-start lg:pl-8">
            <div className="lg:max-w-[60rem]  ">
            <Heading text="Let's try our service now!"/>
            <p className="p-2 text-gray-300 text-center  text-base capitalize">exprince the power of our service it come from quilty and trus our clients they used our services we showes to him , let's now start don't wiat the prefect time</p>
            </div>
            <div className="mx-auto lg:my-auto lg:mx-4 ">
            <Button varaints="primary"isFullsize={false}>Get started
            <ArrowRight  className="inline w-4 h-8"></ArrowRight>
            </Button>
            </div>
        </article>
       
    )
}
export default ContactSction 