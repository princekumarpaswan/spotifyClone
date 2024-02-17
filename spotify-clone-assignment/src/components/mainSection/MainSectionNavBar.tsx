// import { SetStateAction, useContext, useState } from 'react';
import { ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
// import bgphoto from "../../../images/asset/bgPhoto.jpg";

interface MainSectionNavBarProps {
  userInput: string ;
  // handleFilter: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
}


const MainSectionNavBar: React.FC<MainSectionNavBarProps> = ({ userInput, handleInputChange}) => {

  const location = useLocation();
  const currentPath = location.pathname;


  const handleAll = (event: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event)
  }
 
  return (
    <div className={`flex mt-[12px] rounded-t-[5px] items-center ${currentPath === "/search" ? 'gap-x-[29vw]':'gap-x-[55vw]'} fixed  bg-[#121212] `}>
      <div className="flex justify-center items-center  p-[10px] ">
        <div className="bg-[black] flex justify-center p-[5px] items-center w-[25px] h-[25px] rounded-[50%]">
          <i className="fa-solid fa-less-than" />
        </div>
        <div className="bg-[black] flex justify-center p-[5px] items-center w-[25px] h-[25px] rounded-[50%]">
          <i className="fa-solid fa-greater-than" />
        </div>

        {
          currentPath === '/search' ? (  <div className="max-w-md mx-[50px]">
          <div className="relative flex items-center w-full h-10 rounded-[40px] focus-within:shadow-lg bg-[#121212] border overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none bg-[#121212]  text-sm text-white-700 pr-2"
              type="text"
              id="search"
              placeholder="Search Songs"
              value={userInput} onChange={handleAll}
            />
          </div>
        </div>):null
        }

      </div>

      <div className="flex justify-center items-center mr-[1px] gap-x-[30px] ">
        <button className="w-[max-content]">Sign Up</button>
        <button className=" bg-[white] text-[black] font-bold text-sm p-[6px] w-[90px] rounded-[20px] ">
          Login
        </button>
      </div>
    </div>
  );
};
export default MainSectionNavBar;
