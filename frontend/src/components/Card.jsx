import React from "react";

const Card = () => {
    return (
        <>
            <div className="flex  mt-5 justify-between w-full sm:px-2 lg:px-0 md:w-[90%] lg:w[80%] flex-wrap mx-auto">
                <div className="flex md:w-[60%] mt-5  flex-wrap ">
                    <div class="relative md:ml-5 flex w-full  flex-col mt-5  bg-white  text-gray-700 shadow-lg">
                        <div
                            class="relative  overflow-hidden text-white shadow-lg h-[30vh]  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                                src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="ui/ux review check" />
                            <div
                                class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                            </div>
                            <button
                                class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-1">
                                <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Wooden House, Florida
                                </h5>
                                <p
                                    class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="-mt-0.5 h-5 w-5 text-yellow-700">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    5.0
                                </p>
                            </div>
                            <p class="block font-sans text-sm sm:text-lg sm:text-md h-[4vh] text-ellipsis  overflow-hidden ... sm:h-fit  antialiased font-light leading-relaxed text-gray-700">
                                Enter a freshly updated and thoughtfully furnished peaceful home
                                surrounded by ancient trees, stone walls, and open meadows
                            </p>
                            <div class="flex justify-between mt-2 md:mt-4   mx-auto ">


                                <div className="flex   ">
                                    <div class="flex items-center gap-2 ">
                                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
                                        <div class="font-medium flex gap-10  dark:text-black">
                                            <div>Name 2</div>
                                        </div>
                                    </div>
                                </div>

                                <span
                                    class="cursor-pointer  p-1 px-2 bg-slate-100 rounded-md flex items-center gap-2">
                                    <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"/>
  </svg>  Share
  
                                </span>

                            </div>
                        </div>
                    </div>
                    <div class="relative md:ml-5 flex w-full  flex-col mt-5  bg-white  text-gray-700 shadow-lg">
                        <div
                            class="relative  overflow-hidden text-white shadow-lg h-[30vh]  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                                src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="ui/ux review check" />
                            <div
                                class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                            </div>
                            <button
                                class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="flex flex-col p-6">
                            <div class="flex items-center justify-between mb-1">
                                <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Wooden House, Florida
                                </h5>
                                <p
                                    class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="-mt-0.5 h-5 w-5 text-yellow-700">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    5.0
                                </p>
                            </div>
                            <button class="group mt-2 h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                {/* <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/> */}
                                <span class="block w-max font-semibold tracking-wide text-red-600 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <div class="flex justify-between mt-2 md:mt-4 w-full  mx-auto ">


<div className="flex   ">
    <div class="flex items-center gap-2 ">
        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
        <div class="font-medium flex gap-10  dark:text-black">
            <div>Name 2</div>
        </div>
    </div>
</div>

<span
    class="cursor-pointer  p-1 px-2 bg-slate-100 rounded-md flex items-center gap-2">
    <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"/>
</svg>  Share

</span>

</div>
                        </div>

                    </div>
                    
                    <div class="relative md:ml-5 flex w-full  flex-col mt-5  bg-white  text-gray-700 shadow-lg">
                        <div
                            class="relative  overflow-hidden text-white shadow-lg h-[30vh]  bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                                alt="ui/ux review check" />
                            <div
                                class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                            </div>
                            <button
                                class="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div class="flex flex-col p-6">
                            <div class="flex items-center justify-between mb-1">
                                <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Wooden House, Florida
                                </h5>
                                <p
                                    class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="-mt-0.5 h-5 w-5 text-yellow-700">
                                        <path fill-rule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    5.0
                                </p>
                            </div>
                            <button class="group mt-2 h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                {/* <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/> */}
                                <span class="block w-max font-semibold tracking-wide text-blue-600 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <div class="flex justify-between mt-2 md:mt-4 w-full  mx-auto ">


<div className="flex   ">
    <div class="flex items-center gap-2 ">
        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
        <div class="font-medium flex gap-10  dark:text-black">
            <div>Name 2</div>
        </div>
    </div>
</div>

<span
    class="cursor-pointer  p-1 px-2 bg-slate-100 rounded-md flex items-center gap-2">
    <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
<path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z"/>
</svg>  Share

</span>

</div>
                        </div>

                    </div>
                </div>
                <div className=" hidden md:flex md:flex-col mt-5 lg:mr-10">

                    <div class="flex">
                        <div class="flex items-center" >
                            <svg class="inline align-text-top" height="40px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g>
                                    <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                    <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                    <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                </g>
                            </svg>
                            <input placeholder="City" value={"Bhopal"} class=" font-semibold text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /></div>
                    </div>
                    <div className="flex ml-5 mt-10 flex-col">
                        <div className="flex  ">
                            <div class="flex mt-4 items-center gap-2 ">
                                <img class="w-8 h-8 rounded-full" src="https://www.kasandbox.org/programming-images/avatars/mr-pants-purple.png" alt="" />
                                <div class="font-medium flex gap-10  dark:text-black">
                                    <div>Name 1</div>
                                    <div class="text-sm py-1 px-3 border-2 border-black rounded-2xl text-white bg-gray-900">Followed</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 ">
                            <div class="flex items-center gap-2 ">
                                <img class="w-8 h-8 rounded-full" src="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png" alt="" />
                                <div class="font-medium flex gap-10  dark:text-black">
                                    <div>Name 2</div>
                                    <div class="text-sm py-1 px-3 border-2 border-black rounded-2xl text-black bg-gray-200">Follow</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 ">
                            <div class="flex items-center gap-2 ">
                                <img class="w-8 h-8 rounded-full" src="https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png" alt="" />
                                <div class="font-medium flex gap-10  dark:text-black">
                                    <div>Name 3</div>
                                    <div class="text-sm py-1 px-3 border-2 border-black rounded-2xl text-black bg-gray-200">Follow</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 ">
                            <div class="flex items-center gap-2 ">
                                <img class="w-8 h-8 rounded-full" src="https://www.kasandbox.org/programming-images/avatars/mr-pants.png" alt="" />
                                <div class="font-medium flex gap-10  dark:text-black">
                                    <div>Name 4</div>
                                    <div class="text-sm py-1 px-3 border-2 border-black rounded-2xl text-black bg-gray-200">Follow</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center mx-auto text-blue-500">
                            <h1>See More...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;