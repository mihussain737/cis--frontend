const initialState={
     connections:[],
     error:null,
     loading:false
}

export const NscReducers=(state=initialState,action)=>{
    switch (action.type) {
        case "CONNECTION_REQUEST":
            return {
                ...state,
                loading: true,
                error: null,
            }
        case "CONNECTION_SUCCESS":
            return{
                ...state,
                connections:action.payload,
                loading:false,
                error:null
            }
        case "CONNECTION_SUCCESS":
            return

        case "CONNECTION_FAILURE":
            return
        default:
            return state;
    }
}