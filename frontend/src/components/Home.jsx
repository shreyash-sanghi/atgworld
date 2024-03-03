import React from "react";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import Card from "./Card";

const Home = ()=>{
    return(
        <>
        <Navbar/>
        <section
class="relative  h-[40vh]  xs:h-[45vh] md:h-[60vh] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
  <div
    class=" absolute right-5  sm:hidden block pl-5 lg:pl-20"
  >
    <div class="max-w-xl text-black  sm:text-white text-opacity-100 py-3  text-center ltr:sm:text-left rtl:sm:text-right">
    <button className="whitespace-nowrap p-0.5  mr-1 border-2 bg-blue-600 text-white font-semibold rounded-md border-black">Join Group</button>    
      <div class=" hidden bottom-0  sm:flex flex-wrap justify-around  text-center">
      </div>
    </div>
  </div>
  <div
    class=" absolute bottom-2 pl-5 lg:pl-20"
  >
    <div class="max-w-xl text-black  sm:text-white text-opacity-100 py-3 sm:py-10  text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3lg opacity-[300] text-black sm:text-white  font-extrabold sm:text-2xl md:text-3xl lg:text-5xl">
        Let us find your
      </h1>

      <p class=" w-full sm:pt-2 md:max-w-lg font-bold text-sm sm:text-md md:text-xl">
        Lorem ipsum dolor sit 
      </p>

      <div class="sm:mt-8 hidden bottom-0  sm:flex flex-wrap justify-around  text-center">
      </div>
    </div>
  </div>
</section>
<BottomBar/>
<Card/>
        </>
    )
}
export default Home;