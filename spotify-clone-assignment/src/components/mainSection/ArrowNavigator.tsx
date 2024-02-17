import MainCards from "./MainCards"
import MainSectionNavBar from "./MainSectionNavBar"

const ArrowNavigator = () => {

  const handleInputChange = () => {
    null
  }


  
  return (
    <>
    <div className="bg-[black] h-[20px]" >
      <MainSectionNavBar userInput={'null'}  handleInputChange={handleInputChange} />
    </div>
    <div className="p-[10px] mt-[45px] bg-gradient-to-b from-[#121212] to-black   ">  
    <div className="flex justify-between items-center" >
    <h1 className="font-bold" >Spotify Playlists</h1>
    <p className="text-sm" >Show all</p>
    </div>
    <div className="flex gap-x-[30px] mt-[10px] wrap" >
    <MainCards/>
    </div>
   </div>
   </>
  )
}

export default ArrowNavigator