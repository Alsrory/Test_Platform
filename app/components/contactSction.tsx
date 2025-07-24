import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Heading from "./heading";

function ContactSction(){
    return(
       
        <article className=" flex  flex-col lg:flex-row  lg:justify-between bg-slate-800  py-8 text-center rounded-lg shadow-md mt-16 m mx-4  gap-2 lg:text-start lg:pl-8">
            <div className="lg:max-w-[60rem]  ">
            <Heading text="Let's try our service now!"/>
            <p className="p-2 text-gray-300 text-center  text-base capitalize">Discover firsthand how our powerful features can simplify your lead management and streamline your operations.  let &apos;s now start don&apos;t wiat the prefect time</p>
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