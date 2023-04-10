import { Link } from "react-router-dom"
import style from "./NavBar.module.css"



function Nav(){
    return(
        <div className={style.nav}>
            <Link id={style.imgLink} to="/">
                <img className={style.img} src="https://steamuserimages-a.akamaihd.net/ugc/782978849731797376/BFD2245A50178526DA6C12F5A804AEBA155D1828/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="" />
            </Link>
            <div className={style.buttonContainer}>
                <Link className={style.link} to="/card"><button className={style.boton}>Characters</button></Link>            
                <Link className={style.link} to="/about"><button className={style.boton}>About Us</button></Link>
                <Link className={style.link} to="/about"><button className={style.boton}>FeedBack</button></Link>
            </div>
        </div>
    )
}

export default Nav