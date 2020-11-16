import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import instaLogo from '../../assets/images/insta.png'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import '../../containers/LoginView/styles.css'
import {authLogin} from '../../store/actions/auth'
import { withRouter } from 'react-router-dom'

import {useSelector , useDispatch} from 'react-redux'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(40),
        height: theme.spacing(50),
      },
    },
    paper2: {
      width: theme.spacing(40),
      height: theme.spacing(7),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    appHeaderImage: {
      objectFit: 'contain',
      width: '130px',
      padding: '1px',
    },
    logoDiv: {
      textAlign: 'center',
      width: "100%",
      marginTop: '10px',
      marginBottom: '40px'
    },
    inputs: {
      textAlign: 'center',
      width: "100%",
      marginTop: '10px',
      marginBottom: '15px',
      fontSize: '18px'
    },
    username: {
      width: "80%",
      padding: '0px',
      fontSize: '18px'

    },
    password: {
      width: "80%",
      padding: '0px'
    },
    Button: {
      width: "80%",
      backgroundColor: "#0095F6",
      color: "white",
      height: "31px",
      fontSize: '18px',
      borderRadius: '4px',
      borderColor: '#0095F6',
      marginBottom: "20px"
    },
    Border: {
      width: "38%",
      height: "2px",
      backgroundColor: "rgb(219,219,219)"
    },
    separator: {
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "20px"
    },
    OR: {
      color: "#8E8E8E",
      fontSize: "13px"
    },
    Bottom: {
      marginRight: "auto",
      marginLeft: "auto",
      width: "60%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px"
    },
    Text: {
      fontSize: '11px'
    },
    img: {
      width: "25px",
      objectFit: "contain"
    },
    Text2: {
      fontSize: '11px',
      color: "#00376B"
    },
    Forgot: {
      textAlign: "center",
    },
    paper: {
      marginBottom: '20px'
    }
  }));















const Login=(props)=> {

  const classes = useStyles();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const redux_state= useSelector(state => {
    return {
       token : state.auth.token
    }
  })

  useEffect(()=>{
    if(redux_state.token)
    {
      props.history.push('/')
    }

  },[redux_state])

  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined" square >
        <div className={classes.logoDiv}>
          <img className={classes.appHeaderImage} src={instaLogo} alt="InstaLogo" />
        </div>
        <form  onSubmit={(e)=>{
          e.preventDefault() ;
          dispatch(authLogin(username,password))
        }} >
        <div className={classes.inputs}>
          <TextField size="small" className={classes.username} id="outlined-basic" label="Username" variant="outlined" onChange ={(e)=>setusername(e.target.value)} />
        </div>
        <div className={classes.inputs}>
          <TextField size="small" className={classes.password} id="outlined-basic" label="Password" variant="outlined" type="password" onChange = {(e)=>setpassword(e.target.value)} />
        </div>
        <div className={classes.inputs}>
          <Button class={classes.Button} variant="contained" type="submit" >
            Log In
          </Button>
          
          <div className={classes.separator}>
            <div className={classes.Border}></div>
            <div className={classes.OR}> OR </div>
            <div className={classes.Border}> </div>
          </div>
        </div>
        </form>
        <div className={classes.Bottom}>
          <div className={classes.Google}>
            <img className={classes.img} src="https://image.shutterstock.com/image-photo/kiev-ukraine-april-27-2015-260nw-278925056.jpg" alt="google" />
          </div>
          <div>
            <Button className={classes.Text}>Log in with Facebook</Button>
          </div>
        </div>
        <div className={classes.Forgot}>
          <Button className={classes.Text2}>Forgot Password?</Button>
        </div>
      </Paper>
      <Paper className={classes.paper2} variant="outlined" square>
        <div className={classes.SignUp}>
          Don't Have an account?
          <Link to="/signup" style={{ textDecoration: "none", color: "#0095F6" }}><a style={{ textDecoration: "none", color: "#0095F6" }} > Sign up</a></Link>
        </div>
      </Paper>
    </div>
  );
}

export default withRouter(Login)
