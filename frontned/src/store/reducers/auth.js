import { UpdatedObj } from '../utilities'
import * as actions from '../actions/actionTypes'

const initialState = {
    error : null ,
    token : null ,
    username : '',
    loading : ''
}





export const authStart = (state, action) => {
    return UpdatedObj(state, {
        error: null,
        loading : true
    })

}


export const authSucces = (state, action) => {
    return UpdatedObj(state, {
        error: null,
        token : action.token,
        loading :false,
        username : action.username
    })

}

export const authFail = (state, action) => {
    return UpdatedObj(state, {
        error: action.error,
        token: null,
        loading: false
    })
}

export const authLogout = (state, action) => {
    return UpdatedObj(state, {
        error: null,
        token: null,
        loading: false
    })
}




const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actions.AUTH_START :return  authStart(state,action)
        case actions.AUTH_SUCCESS : return authSucces(state,action)
        case actions.AUTH_FAIL :return  authFail(state,action)
        case actions.AUTH_LOGOUT : return authLogout(state,action)
        default : return state
    }

}
 
export default reducer