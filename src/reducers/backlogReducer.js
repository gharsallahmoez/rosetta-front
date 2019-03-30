import {GET_BACKLOG,GET_SHOE,DELETE_SHOE} from '../actions/types'

const initialState = {
    shoes : [],
    shoe : {}
}
export default function (state = initialState , action) {
    switch (action.type) {
        case GET_BACKLOG :
            return {
                ...state,
                shoes : action.payload
            }
        case GET_SHOE :
            return {
                ...state,
                shoe: action.payload
            }
        case DELETE_SHOE :
            return {
                ...state,
                shoes : state.shoes.filter(shoe=>shoe.collectionSequence !==action.payload)
            }
        default :
            return state ;

    }

}