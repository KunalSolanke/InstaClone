/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './styles.css'
import { makeStyles } from '@material-ui/core/styles' ;

const useStyles = makeStyles({
    root : {
        
        display : 'flex',
        alignItems : 'center'
    }
})

export default function FreeSolo() {
    const classes = useStyles() ;
  return (
    <div  className = {classes.root}>

      <Autocomplete size="small"
      style={{width:200,}}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
                className={classes.root}
            {...params}
            label="Instagram"
            margin=""
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
];
