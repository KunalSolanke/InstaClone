import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { Typography } from '@material-ui/core';
import PersonTile from './PersonTile'

const useStyles = makeStyles({
    Head: {
        display: 'flex',
        flexDirection : 'row-reverse',
        borderBottom: '1px solid #ededed',
        alignItems: 'center',
        
        padding: '5px 10px',
        justifyContent : 'space-evenly'
    },
    root: {
        borderRight: '1px solid #ededed',
        maxHeight : '90vh',
        
    },
    personTiles: {
        height : "80vh",
        overflowY: 'scroll',

    },
    header :{
        fontSize : '22px',
        marginRight : '20px'
    }
})
function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.Head}>
                <OpenInNewIcon />
                <Typography variant="h6" component="p" gutterBottom className={classes.header}>
                    kunal.123456....
                 </Typography>
               
            </div>
            <div className={classes.personTiles}>
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
                <PersonTile pic="https://instagram.fnag6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82837864_173825433959863_3207805567510773760_n.jpg?_nc_ht=instagram.fnag6-1.fna.fbcdn.net&_nc_ohc=HWvc1lQbghYAX9-aFSQ&_nc_tp=25&oh=40c35b83fbd6a7de08c955f34cb5d9c7&oe=5FD36D70" />
            </div>


        </div>
    )
}

export default Sidebar
