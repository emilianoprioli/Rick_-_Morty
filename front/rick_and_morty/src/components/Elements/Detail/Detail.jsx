import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailCharacter,ClearDetail,DeleteCharacters } from "../../redux/actions_type";

function Detail(){
     const dispatch = useDispatch()
     const {detail} = useSelector(state => state)
     const {id} = useParams()
    
    useEffect(()=>{
        dispatch(DetailCharacter(id));
    },[id])
    
    useEffect(()=>{
        return()=>{
            dispatch(ClearDetail());
        }
    },[])

    
    return(
         <div key={id}>
            {detail.origin?(
            <>
            <button onClick={()=>dispatch(DeleteCharacters(id))}>X</button>
                <h2>{`Name:${detail.name}`}</h2>
                <h3>{`Species:${detail.species}`}</h3>
                <h3>{`Gender:${detail.gender}`}</h3>
                <h3>{`Status:${detail.status}`}</h3>
                <h3>{`Origin:${detail.origin?.name}`}</h3>
                <img src={detail.image} alt="Character Img" />
            </>
            ) : (
            <h3>Loading...</h3>
        )
    }
    </div>
    )
}

export default Detail;