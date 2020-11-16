import * as actions from './actionTypes'
import * as api from '../../api/http/auth'

export const authStart = () => {
    return {
        type : actions.AUTH_START
    }
}

export const authSuccess =(username,token)=>{
    return {
        type: actions.AUTH_SUCCESS,
        username,
        token
    }

}

export const authFail = (error) => {
    return {
        type: actions.AUTH_FAIL,
        error 
    }
}

export const authLogout = ()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('token');
    localStorage.removeItem('expiry');
    return {
        type: actions.AUTH_LOGOUT
    }

}



export const expireSession = (time) =>{
    return dispatch =>{
    setTimeout(()=>{
        dispatch(authLogout())
    },time*1000)
}
}




export const authLogin = (username,password)=>{

    return dispatch =>{
        localStorage.setItem('username',username)
        dispatch(authStart()) ;
        api.login({username,password}).then(res=>{
            console.log("here")
            const token = res.data.key ;
            const username = localStorage.getItem('username') ;
            const expiry = new Date(new Date().getTime()+3600*24*1000) ;
            dispatch(expireSession(3600*24)) ;
            dispatch(authSuccess(username,token))
            localStorage.setItem('expiry',expiry)
            localStorage.setItem("token",token)
            console.log(token)
        }).catch(err=>{
            if(err!=={}){
                dispatch(authFail(err))
            }
            localStorage.setItem('username',"") ;
        })
    }
    
}



export const authSignUp = (username, email,pass1,firstName,lastName) => {

    return dispatch => {
        localStorage.setItem('username', username)
        dispatch(authStart());
        api.register({
            'username' : username,
            'email':email,
            "password1" : pass1,
            "password2":pass1,
            "first_name" : firstName,
            "last_name" :lastName
        }).then(res => {
            console.log("here")
            const token = res.data.key;
            const username = localStorage.getItem('username');
            const expiry = new Date(new Date().getTime() + 3600 * 24 * 1000);
            dispatch(expireSession(3600 * 24));
            dispatch(authSuccess(username, token))
            localStorage.setItem('expiry', expiry)
            localStorage.setItem("token", token)
            console.log(token)
        }).catch(err => {
            if (err !== {}) {
                dispatch(authFail(err))
            }
            localStorage.setItem('username', "");
        })
    }

}