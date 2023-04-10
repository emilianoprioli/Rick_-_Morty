const URL_BASE="https://be-a-rym.up.railway.app/api";
const key = "d74dd3ded555.2d91aafb347e0bb79cc5";

export const ADD_CHARACTER = "ADD_CHARACTER"
export const DELETE_CHARACTER = "DELETE_CHARACTER"
export const DETAIL_CHARACTER = "DETAIL_CHARACTER"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const ERROR = "ERROR";

export const CharacterFetch = (id) =>{
    if(id){
        return function(dispatch) {
            fetch(`${URL_BASE}/character/${id}?key=${key}`)
            .then(response => response.json())
            .then(data =>{
                dispatch({type:ERROR,payload:null})
                dispatch({type:ADD_CHARACTER,payload:data})})
            }     
    }
    return function(dispatch){
        dispatch({type:ERROR,payload:"Id is needed for request"})
    }
}

export const DetailCharacter = (id) => {
    return function(dispatch){
        fetch(`${URL_BASE}/character/${id}?key=${key}`)
            .then(response => response.json())
            .then(data =>{
                dispatch({type:DETAIL_CHARACTER,payload:data})})
            }     
}

export const ClearDetail = () => {
    return function(dispatch){
        dispatch({type:CLEAR_DETAIL,payload:"Detail was cleared"})
    }
}


export const DeleteCharacters = (id) => {
    return {type:DELETE_CHARACTER,payload:id};
}