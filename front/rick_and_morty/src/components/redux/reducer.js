import { ADD_CHARACTER,DETAIL_CHARACTER,CLEAR_DETAIL,DELETE_CHARACTER,ERROR } from "./actions_type"

const initialState = {
    character:[],
    detail:{},
    internal_message:null,
    errors:null
}

const Reducer = (state = initialState,action) => {
    switch(action.type){

        case ADD_CHARACTER:
            return{
                ...state,
                character:[...state.character,action.payload]
            }

        case DETAIL_CHARACTER:
            return{
                ...state,
                detail:action.payload
            }

        case CLEAR_DETAIL:
            return{
                ...state,
                detail:{},
                internal_message:action.payload
            }

        case DELETE_CHARACTER:
            return{
                ...state,
                character:state.character.filter((element)=>element.id !== action.payload)
            }

        case ERROR:
            return{
                ...state,
                errors:action.payload
            }

        default:
            return{...state};
    }
}

export default Reducer;