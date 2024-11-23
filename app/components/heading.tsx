import { Children } from "react";
 type Pragraph={
    text:string
    
 }


function Heading(props:Pragraph){
    return(
        
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-tr  from-sky-200 via-sky-500 to-sky-200 font-extrabold 
         text-2xl sm:text-3xl lg:text-4xl pb-0 sm:pb-2">
            {props.text}
            
        </h1>
    )
}
export default Heading;