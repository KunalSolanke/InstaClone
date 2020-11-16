import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import login1 from '../assets/images/login-1.jpg'
import login2 from '../assets/images/login-2.jpg'
import login3 from '../assets/images/login-3.jpg'
import login4 from '../assets/images/login-4.jpg'
import login5 from '../assets/images/login-5.jpg' ;
import {Fade} from '@material-ui/core'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        
        imgPath:login1
    },
    {
        imgPath:login2
    },
    {
        imgPath: login3
    },
    {
        imgPath: login4
    },
    {
        imgPath: login5
    }
    
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "249px",
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 435,
        display: 'block',
        maxWidth: 249,
        overflow: 'hidden',
        width: '100%',
        border : '2.4px solid black'
    },
}));

function Slider() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
            >
                {tutorialSteps.map((step, index) => (
                    <Fade in={true}>
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                    </Fade>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default Slider;



