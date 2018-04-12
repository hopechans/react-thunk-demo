import {combineReducers} from 'redux';

const initState = {
    title:'init title',
    content:'init content'
}

export function indexReducer(state = initState,action){
    switch(action.type){
        case "indexList":
            return action.data;
            break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    indexReducer
})

export default rootReducer;