const initialState={
     connections:[],
     connection:null,
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
                connection:action.payload,
                loading:false,
                error:null
            }
        case "CONNECTION_FAILURE":
            return{
                ...state,
                connections:[],
                connection:null,
                loading:false,
                error:action.payload
            }
        case "CONNECTION_PENDING_REQUEST":
            return{
                ...state,
                loading: true,
                error: null,
            }

        case "CONNECTION_PENDING_SUCCESS":
            return{
                ...state,
                connections:action.payload,
                loading: false,
                error: null,
            }
        case "CONNECTION_PENDING_FAILURE":
            return{
                ...state,
                connections:[],
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}