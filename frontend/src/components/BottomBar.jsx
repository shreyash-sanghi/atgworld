import React from "react";

const BottomBar = ()=>{
    return(
        <>
        <nav class="bg-white  w-full md:w-[80%] flex items-center mx-auto ">
    <div class="container flex items-center p-3 xs:p-6 mx-auto text-gray-600 capitalize dark:text-gray-900">
        <a href="#" class="text-gray-800 dark:text-gray-900 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

        <a href="#" class="border-b-2  hidden xxs:block border-transparent hover:text-gray-800 dark:hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

        <a href="#" class="border-b-2 hidden xxs:block border-transparent hover:text-gray-800 dark:hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>



    </div>
    <div className="flex gap-5">
        <button className="whitespace-nowrap p-1 sm:p-2 border-2 mr-1 flex items-center border-black bg-gray-200 font-semibold  rounded-md">Wrte a Post
        <svg class="w-4 h-4 ml-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>
        <button className="whitespace-nowrap hidden sm:block p-2 mr-1 border-2 bg-blue-600 text-white font-semibold rounded-md border-black">Join Group</button>    
    </div>
</nav>
        </>
    )
}
export default BottomBar;