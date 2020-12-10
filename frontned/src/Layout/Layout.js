import React from 'react' ;
import useStyles from './styles' ;
import {Container} from '@material-ui/core' ;
import NavBar from './Nav.js' ;
import { Grow } from '@material-ui/core';

function Layout(props) {
   const classes = useStyles() ;
    return (
        <div className={classes.appBody} >
            <NavBar />
            <div className = {classes.appBody}>
                <Grow appear in ={true} >
                    <Container maxWidthMd >
                        {props.children}
                    </Container>   
                </Grow>
            </div>         
        </div>
    )
}

export default Layout

//this is layout.js
