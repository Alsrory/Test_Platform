  import Link from "next/link";
import Logo from "./logo";
// import { navlinks } from "@/src/constant/navlinks";
import Mobilenav from "./mobilenav";
import { links } from "@/src/constant/imageInterface";
import { FC } from "react";
import  { navLinks } from "@/src/constant/navlinks";
import { Navcard } from "./linkcard";
 
    function Nav(){

    
     return (
      <div className=" top-0 fixed left-0 w-full  bg-slate-900/50  z-30 backdrop-blur-md ">
        <div className="relative container py-6 px-2  flex justify-between   ">
          <Logo></Logo>
          {/* navigtion desktop */}
          <nav className="hidden md:flex gap-8 capitalize  ">
            {navLinks.map((link,index)=>(
              <Navcard 
              key={index}
           {...link}/>
            
           ) )}
        
          </nav>
          {/* end navigation desktop  */}

        <Mobilenav></Mobilenav>
        </div>
       
      </div>
  )
    }
    
    
    export default Nav ;
// //         <>
// <>
//     //   <header className="bg-cyan-950">
//     //   <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
//     //     <a className="block text-teal-50" href="#">
//     //       <span className="sr-only">Home</span>
//     //       <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     //         <path
//     //           d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
//     //           fill="currentColor"
//     //         />
//     //       </svg>
//     //     </a>
    
//     //     <div className="flex flex-1 items-center justify-end md:justify-between">
//     //       <nav aria-label="Global" className="hidden md:block">
//     //         <ul className="flex items-center gap-6 text-lg">
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500/75" href="#"> About </a>
//     //           </li>
    
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500" href="#"> Careers </a>
//     //           </li>
    
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500/75" href="#"> History </a>
//     //           </li>
    
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500/75" href="#"> Services </a>
//     //           </li>
    
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500/75" href="#"> Projects </a>
//     //           </li>
    
//     //           <li>
//     //             <a className="text-gray-50 transition hover:text-gray-500/75" href="#"> Blog </a>
//     //           </li>
//     //         </ul>
//     //       </nav>
    
//     //       <div className="flex items-center gap-4">
//     //         <div className="sm:flex sm:gap-4">
//     //           <a
//     //             className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
//     //             href="#"
//     //           >
//     //             Login
//     //           </a>
    
//     //           <a
//     //             className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
//     //             href="#"
//     //           >
//     //             Register
//     //           </a>
//     //         </div>
    
//     //         <button
//     //           className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
//     //         >
//     //           <span className="sr-only">Toggle menu</span>
//     //           <svg
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             className="h-5 w-5"
//     //             fill="none"
//     //             viewBox="0 0 24 24"
//     //             stroke="currentColor"
//     //             strokeWidth="2"
//     //           >
//     //             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//     //           </svg>
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </header>
//     // </>
// //         <nav className="bg-gray-800">
// //         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //           <div className="relative flex h-16 items-center justify-between">
// //             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //               {/* <!-- Mobile menu button--> */}
// //               <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
// //                 <span className="absolute -inset-0.5"></span>
// //                 <span className="sr-only">Open main menu</span>
// //                 {/* <!--
// //                   Icon when menu is closed.
      
// //                   Menu open: "hidden", Menu closed: "block"
// //                 --> */}
// //                 <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// //                 </svg>
// //                 {/* <!--
// //                   Icon when menu is open.
      
// //                   Menu open: "block", Menu closed: "hidden"
// //                 --> */}
// //                 <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //               <div className="flex flex-shrink-0 items-center">
// //                 <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
// //               </div>
// //               <div className="hidden sm:ml-6 sm:block">
// //                 <div className="flex space-x-4">
// //                   {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
// //                   <Link href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</Link>
// //                   <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</Link>
// //                   <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
// //                   <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //               <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //                 <span className="absolute -inset-1.5"></span>
// //                 <span className="sr-only">View notifications</span>
// //                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //                   <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
// //                 </svg>
// //               </button>
      
// //               {/* <!-- Profile dropdown --> */}
// //               <div className="relative ml-3">
// //                 <div>
// //                   <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
// //                     <span className="absolute -inset-1.5"></span>
// //                     <span className="sr-only">Open user menu</span>
// //                     <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
// //                   </button>
// //                 </div>
      
// //                 {/* <!--
// //                   Dropdown menu, show/hide based on menu state.
      
// //                   Entering: "transition ease-out duration-100"
// //                     From: "transform opacity-0 scale-95"
// //                     To: "transform opacity-100 scale-100"
// //                   Leaving: "transition ease-in duration-75"
// //                     From: "transform opacity-100 scale-100"
// //                     To: "transform opacity-0 scale-95"
// //                 --> */}
// //                 <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
// //                   {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
// //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</Link>
// //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</Link>
// //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
      
// //         {/* <!-- Mobile menu, show/hide based on menu state. --> */}
// //         <div className="sm:hidden" id="mobile-menu">
// //           <div className="space-y-1 px-2 pb-3 pt-2">
// //             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
// //             <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</Link>
// //             <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</Link>
// //             <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
// //             <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
// //           </div>
// //         </div>
// //       </nav>
           


// // {/* <div>       <nav className="fixed top-0 bg-slate-500"> 
// // <Link href={'/'}> Home</Link>
// // <Link href={'/'}>About</Link>
// // <p>hhhh</p>
// // </nav>    </div> */}
// // </>   );
// // }
// // export default Nav;
// // // import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// // // import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// // // const navigation = [
// // //   { name: 'Dashboard', href: '#', current: true },
// // //   { name: 'Team', href: '#', current: false },
// // //   { name: 'Projects', href: '#', current: false },
// // //   { name: 'Calendar', href: '#', current: false },
// // // ]

// // // function classNames(...classNamees) {
// // //   return classNamees.filter(Boolean).join(' ')
// // // }

// // // export default function Nav {
// // //   return (
// // //     <Disclosure as="nav" className="bg-gray-800">
// // //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// // //         <div className="relative flex h-16 items-center justify-between">
// // //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// // //             {/* Mobile menu button*/}
// // //             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
// // //               <span className="absolute -inset-0.5" />
// // //               <span className="sr-only">Open main menu</span>
// // //               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
// // //               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
// // //             </DisclosureButton>
// // //           </div>
// // //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// // //             <div className="flex flex-shrink-0 items-center">
// // //               <img
// // //                 alt="Your Company"
// // //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
// // //                 className="h-8 w-auto"
// // //               />
// // //             </div>
// // //             <div className="hidden sm:ml-6 sm:block">
// // //               <div className="flex space-x-4">
// // //                 {navigation.map((item) => (
// // //                   <Link
// // //                     key={item.name}
// // //                     href={item.href}
// // //                     aria-current={item.current ? 'page' : undefined}
// // //                     className={classNames(
// // //                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// // //                       'rounded-md px-3 py-2 text-sm font-medium',
// // //                     )}
// // //                   >
// // //                     {item.name}
// // //                   </Link>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// // //             <button
// // //               type="button"
// // //               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// // //             >
// // //               <span className="absolute -inset-1.5" />
// // //               <span className="sr-only">View notifications</span>
// // //               <BellIcon aria-hidden="true" className="h-6 w-6" />
// // //             </button>

// // //             {/* Profile dropdown */}
// // //             <Menu as="div" className="relative ml-3">
// // //               <div>
// // //                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// // //                   <span className="absolute -inset-1.5" />
// // //                   <span className="sr-only">Open user menu</span>
// // //                   <img
// // //                     alt=""
// // //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// // //                     className="h-8 w-8 rounded-full"
// // //                   />
// // //                 </MenuButton>
// // //               </div>
// // //               <MenuItems
// // //                 transition
// // //                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
// // //               >
// // //                 <MenuItem>
// // //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
// // //                     Your Profile
// // //                   </Link>
// // //                 </MenuItem>
// // //                 <MenuItem>
// // //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
// // //                     Settings
// // //                   </Link>
// // //                 </MenuItem>
// // //                 <MenuItem>
// // //                   <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
// // //                     Sign out
// // //                   </Link>
// // //                 </MenuItem>
// // //               </MenuItems>
// // //             </Menu>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <DisclosurePanel className="sm:hidden">
// // //         <div className="space-y-1 px-2 pb-3 pt-2">
// // //           {navigation.map((item) => (
// // //             <DisclosureButton
// // //               key={item.name}
// // //               as="a"
// // //               href={item.href}
// // //               aria-current={item.current ? 'page' : undefined}
// // //               className={classNames(
// // //                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// // //                 'block rounded-md px-3 py-2 text-base font-medium',
// // //               )}
// // //             >
// // //               {item.name}
// // //             </DisclosureButton>
// // //           ))}
// // //         </div>
// // //       </DisclosurePanel>
// // //     </Disclosure>
// // //   )
// // // }
