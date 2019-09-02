import { handleActions } from "redux-actions"

const defaultState ={
    hotbooks:[],
    count:0
}

export default handleActions({
    HOT_BOOKS:(state,action)=>{
        let hotState = Object.assign({},state);
        hotState.hotbooks = action.payload.data.list;
        hotState.count = action.payload.data.list.length;
        // console.log(hotState,222222);
        return hotState;
    }
},defaultState);