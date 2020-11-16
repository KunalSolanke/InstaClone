import {makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(
    {
    root: {
        width: 300,

    },
    navContianer :{
        maxWidth : "500px!important"

    },
    appNav : {
        border : '1.5px #ededed solid',
        backgroundColor : 'white',
        position : 'sticky',
        top : 0,
        zIndex : 10,
        marginBottom : '20px'
    },
    appContainer :{ 
        display: 'flex',
        alignItems:'center',
        justifyContent : 'space-between'
    },
    appHeaderImage :{
        objectFit: 'contain',
        width: '120px',
        padding: '1px',
    }
});

export default useStyles ;