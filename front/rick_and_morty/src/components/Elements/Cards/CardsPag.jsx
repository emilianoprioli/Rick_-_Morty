import Card from "../Card/Card"
import { CharacterFetch } from "../../redux/actions_type";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "./Cards.module.css"

export function CardsPag(){
    let value
    const dispatch = useDispatch()
    const {character,errors} = useSelector(state => state)
    
    
    const valueHandler = (event) => {
        value = event.target.value
        console.log(value);
    }

    const enterSearch = (event) =>{
        if(event.key === "Enter"){
            dispatch(CharacterFetch(value));
        }
    }
    
    
    return(
        <div className={style.div}>
            <input className={style.input} onKeyDown={enterSearch} type="number" onChange={valueHandler}/>
            <button className={style.button} onClick={()=>dispatch(CharacterFetch(value))}>Añadir personajes</button>
            <Card character={character}/>
        </div>
    );
} 

