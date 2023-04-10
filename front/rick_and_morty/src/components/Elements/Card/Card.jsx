import { DeleteCharacters } from "../../redux/actions_type";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Card(props){
    const {character} = props;
    const dispatch = useDispatch()
    return (
        <>
        {character.map(({id,name,species,gender,status,image})=>{
            return (
            <div key={id}>
                <button onClick={()=>dispatch(DeleteCharacters(id))}>X</button>
                <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
                <h3>{species}</h3>
                <h3>{gender}</h3>
                <h3>{status}</h3>
                <img src={image} alt="Character Img" />
            </div>
            )
        })}
        </>
    )
}


export default Card;