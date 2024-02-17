import styles from "../../styles/library.module.css"
import Footer from "./Footer"
import LibrarayCards from "./LibrarayCards"


const Library = () => {
  
  return (
    <div className={styles.outerDiv} >
    <div className={styles.innerDiv} >
      <i className="fa-solid fa-book bg=[#121212]"></i>
      <div>
      <div className={styles.yourLinbrary} >
        <p>Your Library</p>
        <i className="fa-solid fa-plus bg=[#121212]"></i>
      </div>   
      </div>
    
    </div>
    <LibrarayCards/>
    <Footer/>
    <div className={styles.globe} >
    <i className="fa-solid fa-globe bg=[#121212]"></i>
    <p>English</p>
    </div>
    </div>
  )
}

export default Library