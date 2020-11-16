import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
 msgContainerRight :{
     display:'flex' ,
     flexDirection: 'row-reverse',
     padding : '5px 10px',
 },
 msgContainerLeft :{
     display:'flex',
     padding: '5px 10px',
     alignItems : "center"
 },
 personImage :{
     marginRight : '10px'

 },
 pic :{
     height : '30px',
     width :'30px',
     borderRadius : "100%",
     objectFit : "cover"
 },
msgBodyMe :{
   backgroundColor : "#ededed",
   borderRadius : "20px",
   padding : "9px 12px"
},
msgBodyPerson :{
    border : '.8px solid #ededed',
    borderRadius: "20px",
    padding: "9px 12px"
},
messageContents :{
    display:'flex',
    alignItems:'center'
},
msg:{
    fontSize :'15px'
}

}))
function Message(props) {
    const classes = useStyles();

    return (
        <div className={props.author === "me" ? classes.msgContainerRight : classes.msgContainerLeft}>
            <div className={classes.messageContents}>
                {
                    props.author !== "me" ? <div className={classes.personImage}>
                        <img src={props.url} className={classes.pic}></img>
                    </div> : null
                }
                <div className={props.author === "me" ? classes.msgBodyMe : classes.msgBodyPerson}>
                    <Typography component="p" className={classes.msg}>{props.message}</Typography>
                </div>

            </div>
        </div>
    )
}

export default Message
