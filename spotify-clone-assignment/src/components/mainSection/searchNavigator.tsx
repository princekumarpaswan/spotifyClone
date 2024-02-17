import MainSectionNavBar from "./MainSectionNavBar";
import { useLocation } from "react-router-dom";
import bgphoto from "../../../images/asset/bgPhoto.jpg";
import { SetStateAction, useState } from "react";

const SearchNavigator = () => {

  const data = [
    {
      title: "Songs",
      img: bgphoto,
    },
    {
      title: "podcast",
      img: bgphoto,
    },
    {
      title: "gjhgj",
      img: bgphoto,
    },
    {
      title: "iuiuyiuui",
      img: bgphoto,
    },
    {
      title: "iuiuio",
      img: bgphoto,
    },
    {
      title: "oiuiuiu",
      img: bgphoto,
    },
    {
      title: "oiuiui",
      img: bgphoto,
    },
    {
      title: "oiuiui",
      img: bgphoto,
    },
  ];

  const location = useLocation();
  const currentPath = location.pathname;


  const [userInput, setUserInput] = useState('');
  const [filteredArray, setFilteredArray] = useState(data);

  const handleFilter = () => {
    if (userInput.trim() === '') {
      setFilteredArray(data);
    } else {
      const filtered = data.filter(item => item.title.toString().includes(userInput));
      setFilteredArray(filtered);
    }
  };

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUserInput(event.target.value);
    handleFilter()
  };

 

  return (
    <>
      <div className="bg-[black] h-[20px]">
        <MainSectionNavBar  userInput={userInput}  handleInputChange={handleInputChange} />
      </div>
      <div
        className={`p-[10px] ${
          currentPath === "/search" ? "mt-[58px] w-[71.6vw]" : "mt-[45px]"
        } bg-gradient-to-b from-[#121212] to-black`}
      >
        {currentPath === "/search" ? null : (
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Spotify Playlists</h1>
            <p className="text-sm">Show all</p>
          </div>
        )}
        <div className="flex gap-x-[30px] mt-[10px] w-[71.6vw] absolute  flex-wrap">
          {filteredArray.map((value: { title: string; img: string }) => (
            <div className="bg-[green]  w-[140px] h-[150px] rounded-[10px] z-[-10] mt-7 overflow-hidden ">
              <p className="mt-[10px] ml-[10px] font-bold ">{value.title}</p>
              <img
                src={value.img}
                className="w-[70px] h-[70px] float-right rotate-45 mt-[51px] -mr-2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchNavigator;
