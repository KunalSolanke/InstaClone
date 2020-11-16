import React from 'react'
import {Container,Grid,Grow} from '@material-ui/core'
import useStyles from './styles' ;
import Slider from '../../components/Slider';
import Paper from '../../components/SignupForm/SignupForm';

function Signup() {
    const classes = useStyles() ;
    return (
        <div className={classes.root}>
          <Container maxWidth="md" height ="100%" className={classes.LoginContainer}>
            <Grid container justify="space-between" alignItems="center" className={classes.GridBox} spacing={4}>
               <Grid item className={classes.LoginLeft}>
                <div className ={classes.LoginLeftSlider}>
                         <Slider />
                   </div>        
               </Grid>
               <Grid item className={classes.LoginRight}  >
                     <Paper/>
               </Grid>
           </Grid>    
          </Container>
        </div>
    )
}

export default Signup
