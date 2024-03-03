import { React, useState } from "react"
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    input,
    Checkbox,
} from "@material-tailwind/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [signup_open, setSignupOpen] = useState(false);
    //Window handeler
    const handleOpen = () => setOpen((cur) => !cur);
    // const handleSignUPOpen = ((e)=>{
     
    //     setSignupOpen((cur) => !cur)
    // })
    const handleSignUPOpen = () => setSignupOpen((cur) => !cur);
    return (
        <>
            <nav class="flex justify-between px-2 xxs:px-5 sm:px-10 md:px-20 border-2 py-2 xxs:py-5 border-black mt-.5 items-center bg-white">
                <h1 class="sm:text-xl text-gray-800 font-bold text-xs xxs:text-sm ">ATG.WORLD</h1>
                <div class="flex  items-center">
                    <div class="flex rounded-lg py-1 sm:border-2 border-black items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input class="ml-2 hidden sm:block outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
                    </div>

                </div>
                <ul onClick={handleSignUPOpen} class="flex items-center text-xs xxs:text-sm ">
                    <li class="font-semibold text-gray-700">Create account.</li>
                    <li class="font-semibold text-blue-700">It's free</li>


                </ul>
            </nav>

            {/* popup card */}
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent  bg-opacity-80 align-middle justify-center h-screen flex items-center m-auto "
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <div className="flex  ">
                            <Typography className="flex align-middle m-auto justify-center" variant="h4" color="blue-gray">
                                Welcome back!   
                            </Typography>
                            <button onClick={handleOpen} className="flexitems-center m-auto justify-center text-2xl absolute right-10  " variant="h4" color="blue-gray">
                            <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                 </svg>
                            </button>
                        </div>
               <input  placeholder="Email" class=" text-black placeholder-gray-600 w-full px-4 py-2.5  text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <input  placeholder="Password" class=" text-black placeholder-gray-600 w-full px-4 py-2.5  text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
      
                      <CardFooter className="flex justify-between items-center pt-0">
                            <Button onClick={handleOpen} className="rounded-3xl">
                               Sign In
                            </Button>
                         <p onClick={()=>{
                             handleOpen()
                            handleSignUPOpen()
                            }} className="text-blue-600 cursor-pointer whitespace-nowrap ">or,Sign In</p>

                        </CardFooter>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                 <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="absolute left-0 w-5" alt="Facebook logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                            </div>
                        </button>

                    </CardBody>
                    {/* <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={() => {
                            handleOpen()
                            partner_login()
                        }} fullWidth>
                            Log in
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Don&apos;t have an account?
                            <Typography
                                as="a"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={
                                    () => {
                                        handleOpen()
                                        handleSignUPOpen()
                                    }
                                }
                            >
                                Sign up
                            </Typography>
                        </Typography>
                    </CardFooter> */}
                </Card>
            </Dialog>
            <Dialog
                size="xs"
                open={signup_open}
                handler={handleSignUPOpen}
                className="bg-transparent  align-middle justify-center h-screen flex items-center m-auto shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <form>
                        <CardBody className="flex flex-col gap-4">
                            
                            
                            <Typography className="flex align-middle justify-center" variant="h4" color="blue-gray">
                                Create Account
                            </Typography>
                             <button onClick={(e)=>{
                                e.preventDefault();
                                handleSignUPOpen()}} className="flex items-center m-auto justify-center  text-2xl absolute right-5  " variant="h4" color="blue-gray">
                                 <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                 </svg>
                             </button>
                          
                              <div class="px-5 pb-5">
               <div class="flex">
                  <div class="flex-grow w-1/2 "><input placeholder="First Name" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                  <div class="flex-grow w-1/2 pl-2"><input  placeholder="Last Name" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
               </div>
               <input  placeholder="Email" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
               <input  placeholder="Password" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               <input  placeholder="Confirm Password" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
            </div>
                      <CardFooter className="flex justify-between items-center pt-0">
                            <Button onClick={handleSignUPOpen} className="rounded-3xl">
                               Create Account
                            </Button>
                         <p onClick={()=>{
                            handleSignUPOpen()
                            handleOpen()}} className="text-blue-600 cursor-pointer whitespace-nowrap ">or,Sign In</p>

                        </CardFooter>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                 <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class="absolute left-0 w-5" alt="Facebook logo"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                            </div>
                        </button>

                        </CardBody>
                    
                    </form>
                </Card>
            </Dialog>
        </>
    )
}

export default Navbar;

