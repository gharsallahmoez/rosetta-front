import {GET_COLLECTIONS, GET_COLLECTION, DELETE_COLLECTION} from "../actions/types";

const initialState = {
    collections: [],
    collection: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };

        case GET_COLLECTION:
            return {
                ...state,
                collection: action.payload
            };
        case DELETE_COLLECTION:
            return {
                ...state,
                collections: state.collections.filter(collection=>collection.collectionIdentifier !== action.payload)
            }
        default:
            return state;
    }
}