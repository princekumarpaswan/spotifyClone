import styles from "../../styles/homeNav.module.css";
import mainLogo from "../../images/asset/pngegg.png";
import { Link } from "react-router-dom";


export const HomeNav = () => {



  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <img src={mainLogo} />
        <p>Spotify</p>
      </div>
      <ul>
       <Link to='/' >
       <li
          className=" hover:cursor-pointer "
        >
          <i className="fa-solid fa-house bg-[#121212]"></i> <span>Home</span>{" "}
        </li></Link>
      <Link to='/search' >
      <li
          className=" hover:cursor-pointer "
        >
          <i className="fa-solid fa-magnifying-glass bg-[#121212]"></i>{" "}
          <span>Search</span>
        </li>
      </Link>
      </ul>
    </div>
  );
};
