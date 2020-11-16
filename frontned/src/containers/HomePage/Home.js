import React from 'react'
import  {Grid} from '@material-ui/core' ;
import Posts from '../../components/Posts/Posts'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        padding : theme.spacing(2)
    },
    
    
}));


function Home() {
    const classes = useStyles() ;
    return (
        <React.Fragment>
          <Grid container className ={classes.root}>
              <Grid item xs = {12} md={8} lg={8} spacing ={2} >
                  <Posts posts ={['1','2','3','4']} /> 
              </Grid>
              <Grid item xs={12} md={4} lg={4}>

              </Grid>
          </Grid>
        </React.Fragment>
            
        
    )
}

export default Home
