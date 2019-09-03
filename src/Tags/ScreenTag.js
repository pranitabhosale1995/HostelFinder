import React, { Component } from "react";

//M-UI
import { withStyles } from '@material-ui/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const _Screens = [
  {
    img: 'images/screens/0.png',
    title: 'Easiest way to find Hostels',
    desc: 'More thean 100 hostels with proper security available on yearly basis.',
  },
  {
    img: 'images/screens/1.png',
    title: 'Safe and Prime Locations',
    desc: 'These Hostels are located in very safe and good localities.',
  },
  {
    img: 'images/screens/2.png',
    title: 'Affordable and Secured',
    desc: 'Cost effective and tidy hostels having 24/7 security.',
  }
]

const styles = ((theme) => ({
  root: {
    flexGrow: 1,
    padding: 32
  },

  screen: {
    margin: `0 auto`,
    textAlign: `center`
  },
  screenImg: {
    marginTop: '3em',
    maxWidth: '100%',
    height: 240
  },
  screenTitle: {
    marginTop: 36,
    textAlign: `center`
  },
  screenDesc: {
    padding: '0.5em 3em',
    textAlign: `center`
  }

}));




class ScreenTag extends Component {
  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState({ activeStep: (this.state.activeStep + 1) });
  }


  handleBack = () => {
    this.setState({ activeStep: (this.state.activeStep - 1) });
  }

  onDone = () => {
    this.props.onDone && this.props.onDone();
  }


  render() {
    const { activeStep } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.screen}>
          <img src={`${_Screens[activeStep].img}`} className={classes.screenImg} />
          <div className={classes.screenTitle}>
            <Typography variant="h5">{_Screens[activeStep].title}</Typography>
          </div>
          <div className={classes.screenDesc}>
            <Typography variant="caption" color="textSecondary">
              {_Screens[activeStep].desc}
            </Typography>
          </div>
        </div>



        <MobileStepper
          variant="dots"
          steps={3}
          position="bottom"
          activeStep={activeStep}
          backButton={
            <Button size="small" onClick={this.onDone}>SKIP</Button>
          }
          nextButton={
            activeStep === 2
              ?
              <Button size="small" onClick={this.onDone}>Done</Button>
              :
              <Button size="small" onClick={this.handleNext} disabled={activeStep === 2}>Next</Button>
          }
        />

      </div>

    );

  }
}

export default withStyles(styles)(ScreenTag);
