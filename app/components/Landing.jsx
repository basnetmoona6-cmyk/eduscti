

import Hero from "./Hero";
import Introduction from "./Introduction";
import Popup from "./PopUp";
import Programs from "./Programs";


import WhyUs from "./WhyUs";


export default function Landing(){
return(
  <div className="overflow-x-hidden">
  <Popup/>
  <Hero/>
  <Introduction/>
  <WhyUs/>
  <Programs/>



  
</div>
);

}