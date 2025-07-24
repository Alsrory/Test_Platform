import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Heading from "./components/heading";
import Button from "./components/Button";
import Link from "next/link";
import { Client } from "@/src/constant/clint";
import { Featues } from "@/src/constant/features";
import CardFeatrur from "./components/cardFeatrue";
import Features2 from "@/src/constant/featurs2";
import CardFeature2 from "./components/cardFeatures2";
import dataPricing from "@/src/constant/priceData";
import PricingCard from "./components/pricingCard";
import PricingSction from "./components/priceingSection";
import ContactSction from "./components/contactSction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-20 lg-pt-28 antialiased">
      <div className=" relative container">
        {/* home section  */}
        <section id="home" className=" relative">
          <div className=" flex flex-col text-center space-y-12">
            <div className=" flex flex-col items-center space-y-6 px-4">
              <p
                className=" capitalize border border-slate-700 py-1 mt-1 px-3 text-xs rounded-3xl cursor-pointer
               hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all"
              >
                Welcome to our website!
                <ArrowRightCircle className="inline ml-1 w-5 h-5"></ArrowRightCircle>
              </p>
              <Heading text="Your Ultimate Choice  test Platform" />
              <p className=" max-w-[47rem] leading-8 text-base md:text-lg md:leading-9">
                Welcome! Our integrated platform simplifies your decisions by
                offering a seamless way to explore and select the perfect
                services and prices tailored to your needs. With us, making the
                right choice has never been easier.
              </p>
              <div className="flex items-center gap-4">
                <Button isFullsize={true}>
                  {" "}
                  get started
                  <MoveRight className="h-4 w-4" />
                </Button>
                <Link href={"#about"}>
                  <Button isFullsize={true} varaints="outline">
                    view pricing
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/Hero-image.svg"
              width={670}
              height={300}
              alt="my phote"
              className=" mx-auto shadow-xl px-6"
            />
          </div>
        </section>
        {/* end home section  */}
        {/* Client section  */}
        <div
          id="client"
          className=" mx-auto grid grid-cols-2 md:grid-cols-3 
        lg:grid-cols-5 gap-x-10  gap-y-4 px-16 mt-8 md:mt-10"
        >
          {Client.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              height={80}
              width={120}
              alt={client.alt}
            />
          ))}
        </div>
        {/* end client section  */}
        {/* start featue section */}
        <div id="featuer" className="flex flex-col  container gap-y-12 mt-20">
          {/* start section  1 */}
          <div className="  flex-col  md:flex lg:flex-row     mt-4 p-4 gap-1 gap-y-10">
            <div className="flex flex-col items-center sm:items-start pl-3 ml-2 mb-1 md:pt-32 lg:pt-20">
              <Heading text="powerfull feature to help you menage all your leads" />
              <p className=" max-w-[46rem] leading-1  text-gray-300 text-base    sm:leading-1 my-6 ">
                Take full control of your sales pipeline with our robust lead management tools. From initial contact to conversion, 
                effortlessly organize, track, and nurture every lead, ensuring no opportunity ever slips through the cracks.
              </p>

              <Button isFullsize={false}>get started</Button>
            </div>
            {/* end patr 1 */}
            {/* start column2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-1  md:gap-6 sm:gap-y-  ">
              {/* part on  */}
              {Featues.map((key, index) => (
                <CardFeatrur key={index} {...key} />
              ))}
              {/* end part one */}
            </div>
            {/* end  1 section  */}
          </div>
          {/*  start section 2 in sction feature */}
          <div className=" grid md:grid-cols-2 lg:grid-cols-1  gap-10  ">
            {Features2.map((element, index) => (
              <CardFeature2 key={index} {...element} />
            ))}
          </div>
          {/*  end  section 2 in sction feature */}
        </div>
        {/* end feautre section */}
        {/* statr priceing  section  */}
        <div id="priceing">
          {" "}
          <PricingSction />
        </div>

        {/* end  priceing section  */}
        {/* start cantact section */}
        <div id="contact">
          <ContactSction />
        </div>

        {/* end contact section */}
        <div>
          {/* <div className="grid lg:grid-cols-2  gap-y-4 lg:gap-x-2  space-x-2 max-w-[88vh] overflow-x-hidden overflow-y-auto">
       <div className=' bg-slate-600 space-y-4 lg:sapce-y-6  lg:p-4 '>
    <h1 className=" text-center text-2xl font-bold  text-foreground hover:text-primary capitalize">hhhhhhhhhhhhhhhh</h1>
    <p className=" w-fit">project descaription:hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p></div>
  
    <div className="space-y-2 lg:space-y-4 ">
    <hr />
   <p className=" bg-slate-300">hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
    </div>
  
       </div> */}
        </div>
        {/* start footer section */}
        <div>
          <Footer />
        </div>
        {/* end footer section */}
      </div>
    </main>
  );
}
