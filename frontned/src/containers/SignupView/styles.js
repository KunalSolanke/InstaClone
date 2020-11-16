import {makeStyles} from '@material-ui/core/styles'
import instaLoginmobile from '../../assets/images/instaLoginmobileView.png'
const useStyles = makeStyles(theme=>({
 root :{
        minHeight: '100vh',
    backgroundColor: '#FAFAFA'
 },
 GridBox :{
     height : '100%' ,
     minHeight: '100vh',
     justifyContent:"center"
 },
    [theme.breakpoints.down('xs')]: {LoginLeft:{
     
        display: 'none',
 }},
[theme.breakpoints.up('xs')]:{
 LoginLeft :{
       
        backgroundImage: `url(${instaLoginmobile})`,
        backgroundSize: 'cover',
        height: '620px',
        flexBasis: '454px'
 }},
 LoginContainer :{
     padding : '20px',
 },
 LoginLeftSlider :{
     position : 'relative' ,
     margin : '81px 0px 0px 131px'
 },
 LoginRight :{
     flexGrow : 1 ,
     display: "flex",
     flexDirection: "column",
     alignItems: "center"
 }

})) ;


export default useStyles ;