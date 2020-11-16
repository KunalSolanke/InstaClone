import React from 'react' ;
import useStyles from './navStyles' ;
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import NearMeIcon from '@material-ui/icons/NearMe';
import IconButton from '@material-ui/core/IconButton';
import Search from './Search.js'
import {Container} from '@material-ui/core'
import instaLogo from '../assets/images/insta.png'
import Avatar from '@material-ui/core/Avatar';
import {Link } from 'react-router-dom'
export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className = {classes.appNav+" navbar"} >
        <Container maxWidth = "lg" >
        <div className={classes.appContainer} >
          <img className={classes.appHeaderImage} src={instaLogo} alt="InstaLogo" />
              <Search />
              <div className='nav__elements'>
              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction label="" icon={<HomeIcon />} />
              <BottomNavigationAction label="" icon={<Link to="/chat" style={{textDecoration:"none",color:"gray"}}><NearMeIcon /></Link>} />
                <BottomNavigationAction label="" icon={<FavoriteIcon />} />
                <IconButton>
                <Avatar />
                </IconButton>
              </BottomNavigation>
              </div>
            </div>
      </Container>
    </div>
    
  );
}
