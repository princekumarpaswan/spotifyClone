import { HomeNav } from "./components/HomeNav"
import Library from "./components/Library"
import ArrowNavigator from "./components/mainSection/ArrowNavigator"
import { useLocation } from 'react-router-dom';
import SearchNavigator from "./components/mainSection/searchNavigator"

function App() {

  const location = useLocation();
  const currentPath = location.pathname;

 

  return (
    <>
 <div className="flex justify-start" >
   <div>
    <HomeNav/>
    <Library/>
  </div>
  <div>
   {
    currentPath === '/'?  <ArrowNavigator/>: <SearchNavigator/>
   }
  </div>
 </div>
  <div className="flex justify-between mb-[20px] p-[10px] rounded-[1px] mx-[20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " >
    <div>
      <p className="font-bold text-sm " >Preview of Spotify</p>
      <p className="font-bold text-md ">Sign Up to get unlimitied songs and podcasts with occcational adds</p>
    </div>
    <button className="w-[120px] bg-[white] text-[black] font-bold text-sm rounded-[20px] ">Sign Up  free</button>
  </div>
  </>
  )
}

export default App
