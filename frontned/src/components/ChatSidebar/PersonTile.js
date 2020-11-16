import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles({
    tile: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 10px',
        '&:hover,&:active': {
            backgroundColor: '#ededed'
        },
        

    },
    personImage: {
        width: '60px',
        height: '60px',
        borderRadius: '100%'
    },
    name: {
        marginLeft: "20px",
        display : 'flex',
        flexDirection : 'column',
        fontSize : '14px',
        

    },
    subtitle :{
        color : 'grey',
        fontSize : '12px',
        marginTop: '7px'
    },
    profile: {

    }
})
function PersonTile(props) {
    const classes = useStyles();
    return (
        <div className={classes.tile}>
            <div className={classes.profile}>
                <img src={props.pic} className={classes.personImage}
                    alt="image" />
            </div>
            <div className={classes.name}>
                <Typography variant="p">_daksh_chhabra</Typography>
                <Typography variant='p' className={classes.subtitle}>Active 35m ago</Typography>
            </div>
        </div>
    )
}

export default PersonTile
