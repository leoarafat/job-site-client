// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   return (
//     <div className='grid grid-cols-12'>
//       <Sidebar />
//       <div className=' col-span-10'>
//         <div className=' h-full max-w-7xl mx-auto'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { SiAmazonpay } from "react-icons/si";
import { MdOutlineEventAvailable } from "react-icons/md";
import { AiOutlineSchedule, AiOutlineTeam } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
  

  return (
    <div>
      <div>
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:border-gray-700">
          <div>
            <div className="fixed flex flex-col left-0 w-14 hover:w-64 lg:w-64 shadow-2xl h-full text-primary transition-all duration-300 border-none z-10 sidebar bg-white">
              <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">

                  <li>
                    <Link
                      to={"/"}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineHome className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Home
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="add-job"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineSchedule size={"1.25rem"}></AiOutlineSchedule>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Add Jon
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <MdOutlineEventAvailable
                          size={"1.25rem"}
                        ></MdOutlineEventAvailable>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Register
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/team"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineTeam size={"1.25rem"}></AiOutlineTeam>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Team
                      </span>
                    </Link>
                  </li>
              
        
                  <li>
                    <Link
                      to="/dashboard/profile"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <CgProfile className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/billing"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <SiAmazonpay className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Billing
                      </span>
                    </Link>
                  </li>        
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="px-6 pt-6 2xl:container">
            <div className="flex items-center justify-center rounded-xl ml-10 lg:ml-0">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
