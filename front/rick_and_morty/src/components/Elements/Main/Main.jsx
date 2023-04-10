import style from "./Main.module.css"
import { Link } from "react-router-dom";

function Landing(){
    return(
        <div className={style.MainTitleContainer}>

            <div className={style.title}>
                <span>
                    Rick and Morty
                </span>
            </div>

            <div className={style.middleTitle}>
                <span>
                    Rick and Morty
                </span>
            </div>

            <div className={style.bottomTitle}>
                <span>
                    Rick and Morty
                </span>
            </div>

            <div className={style.spancontainer}>
                <Link className={style.link} to="/card"><span className={style.span}>Characters</span></Link>
                <Link className={style.link} to="/about"><span className={style.span}>About</span></Link>
                <Link className={style.link} to="/login"><span className={style.span}>Login</span></Link>
            </div>

        </div>
    )
}

export default Landing;