import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import instaLogo from '../../assets/images/insta.png'
import TextField from '@material-ui/core/TextField';    
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import '../../containers/LoginView/styles.css'
import { authSignUp } from '../../store/actions/auth'
import { withRouter } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
const useStyles = makeStyles(
  (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(67),
    },
  },
  paper2 :{
    width: theme.spacing(40),
    height: theme.spacing(7),
    display : 'flex' ,
    alignItems : 'center',
    justifyContent : 'center'
  },
  appHeaderImage: {
    objectFit: 'contain',
    width: '130px',
    padding: '1px',
  },
  logoDiv :{
    textAlign : 'center',
    width : "100%",
    marginTop :'14px',
    marginBottom : '7px'
  },
  inputs :{
    textAlign : 'center',
    width : "100%",
    marginTop :'10px',
    marginBottom : '15px',
    fontSize:'18px'
  },
  username :{
      width:"80%",
      padding:'0px',
      fontSize:'18px'

  },
  password :{
    width:"80%",
    padding:'0px'
  },
  Button :{
      width:"80%",
      backgroundColor:"#0095F6",
      color:"white",
      height:"31px",
      fontSize:'14px',
      borderRadius:'4px',
      borderColor:'#0095F6',
  },
  Border :{ 
    width:"38%",
    height:"2px", 
    backgroundColor:"rgb(219,219,219)" 
  }, 
  separator :{
    width:"80%",
     display:"flex",
     justifyContent:"space-between",
     alignItems:"center",
     marginRight:"auto",
     marginLeft:"auto",
     marginBottom:"20px"
    },
    OR :{
      color:"#8E8E8E",
      fontSize:"13px"
    },
    Bottom :{
      marginRight:"auto",
      marginLeft:"auto",
      width:"80%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginBottom:"15px",
      height:"25px",
      overflow:"hidden"
    },
    Text :{
      fontSize:'11px'
    },
    img :{
      width:"20px",
      objectFit:"contain",
      paddingBottom:'1px'
    },
    Text2 :{
      fontSize:'11px',
      color:"#00376B"
    },
    Forgot :{
      textAlign:"center",
    },
    paper :{
      marginBottom: '20px'
    },
    fb :{
        fontSize:'12px',
        color:"white"
    },
    button :{
        marginRight:'auto',
        marginLeft:'auto',
        backgroundColor:'pink',
        backgroundColor: '#0095F6',
        width: '80%',
        height: '28px',
        display: 'flex',
        marginBottom: '20px',
        alignItems:"center",
        justifyContent:"center"
    },
    fbContainer :{
        marginRight:'10px'
    },
    upperText :{
        color:"#8E8E8E",
        marginBottom: '20px',
        textAlign:"center",
        fontSize:'15px'
    }

}));

const  SignUp = (props) =>{
  const classes = useStyles();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")

  const redux_state = useSelector(state => {
    return {
      token: state.auth.token
    }
  })
  useEffect(() => {
    if (redux_state.token) {
      props.history.push('/')
    }

  }, [redux_state])
  const dispatch = useDispatch()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square >
        <div  className = {classes.logoDiv}>
             <img align="middle" className={classes.appHeaderImage} src={instaLogo} alt="InstaLogo" />
        </div>
        <div className={classes.upperText}>
           <span> Sign up to see photos and <br/> videos from your friends</span>
        </div>
            <Button className={`${classes.Text} ${classes.button}`} variant="contained">
            <div className={classes.fbContainer}>
            <img align="middle" className={classes.img} src = "https://cdn6.aptoide.com/imgs/3/a/e/3aedd7196bc6d6b317545193b9d2f355_icon.png" alt="google"/>
            </div>
            <div className={classes.fb}>
                Log in with Facebook
            </div>
            </Button>
        <div className={classes.separator}> 
            <div className={classes.Border}></div>
            <div className={classes.OR}> OR </div>
            <div className={classes.Border}></div>
        </div>
        <form onSubmit={
          (e)=>{
            e.preventDefault() 
            dispatch(authSignUp(username,email,password,firstName,lastName))
          }
        }>
        <div className={classes.inputs}>
            <TextField size="small" className={classes.username} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className={classes.inputs}>
            <TextField size="small" className={classes.username} id="outlined-basic" label="First Name" variant="outlined" onChange={(e) => setfirstName(e.target.value)}  />
        
        </div>
        <div className={classes.inputs}>
            <TextField size="small" className={classes.username} id="outlined-basic" label="Last Name" variant="outlined" onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div className={classes.inputs}>
            <TextField size="small" className={classes.username} id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setusername(e.target.value)} />
        </div>
        <div className={classes.inputs}>
        <TextField size="small" className={classes.password} id="outlined-basic" label="Password" variant="outlined" type="password" onChange ={(e)=>setpassword(e.target.value)}/>
        </div>
        <div style={{textAlign:"center"}}>
        <Button class={classes.Button} variant="contained" type ="submit">
            Sign up
          </Button>
        </div>
        </form>
      </Paper>

      <Paper className={classes.paper2} variant="outlined" square>
        <div className={classes.SignUp}>
           Have an account? 
          <Link to="/signup" style={{ textDecoration: "none", color: "#0095F6" }}><a style={{textDecoration:"none",color:"#0095F6"}} >Log in</a></Link>
        </div>
      </Paper>
    </div>
  );
}


export default withRouter(SignUp)