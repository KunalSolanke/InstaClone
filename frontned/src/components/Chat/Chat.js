import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';
import Message from './Message'
const useStyles = makeStyles((theme) => ({
    chatBox :{
       
    },
    chatHeader: {
        borderBottom: '1px solid #ededed',
        display: 'flex',
        justifyContent: 'space-between',
        padding: "4.8px 12px",
        alignItems:'center'
    },
    chatBody: {
        overflowY: "scroll",
        overfloxX:"hidden",
        padding: "12px 10px",
        height:"75vh"
    },
    headerName: {
        display: "flex",
        alignItems :"center"
    },
    profileImage: {
        marginRight: "20px"
    },
    pic: {
        height: '40px',
        width: '40px',
        borderRadius: "100%",
        objectFit: "cover"
    },
    Footer: {
        padding: "8px 12px",
        border: '.8px solid #ededed',
        borderRadius: "25px",
        display:"flex",
        marginRight:"10px",
         marginLeft: "10px",
        marginBottom: "5px"
    },
    inputBox: {
        flex: "1"
    },
    inputEl: {
        border: "none",
        padding: "5px 10px",
        fontSize: "16px",
        color: 'grey',
        width: "100%"
    },
    imgInput :{
        marginRight : "10px"
    }
}))
function Chat() {
    const classes = useStyles();
    return (
        <div className={classes.chatBox}>
            <div className={classes.chatHeader}>
                <div className={classes.headerName}>
                    <div className={classes.profileImage}>
                        <img className={classes.pic} src="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" alt=""></img>
                    </div>
                    <div className={classes.personName}>
                        <h5 className={classes.name}>kunal.deshmukh123456789....</h5>
                    </div>
                </div>
                <div className={classes.info}>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className={classes.chatBody}>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>

                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>

                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>
                <Message message="Hello" author="me"></Message>
                <Message message="Hello" author="m" url="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70">

                </Message>



            </div>
            <div className={classes.Footer}>
                <div className={classes.emoji}>
                    <InsertEmoticonOutlinedIcon />
                   
                </div>
                <div className={classes.inputBox}>
                    <input type="text" placeholder="Message..." name="message" className={classes.inputEl}>
                    </input>
                </div>
                <div className={classes.imgInput}>
                    <WallpaperOutlinedIcon />
                </div>
                <div className={classes.heartIcon}>
                    <FavoriteBorderOutlinedIcon />

                </div>

            </div>

        </div>
    )
}

export default Chat
