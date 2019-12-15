import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormDados from './FormDados';
import FormCar from './FormCar';
import FormNegocios from './FormNegocios';
import Album from './Album';
import ImgMediaCard from './ImgMediaCard';
import FormCard from './FormCard';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Sobre você', 'Sobre o carro', 'Negociação', 'Ofertas', 'Pagamento'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormDados />;
    case 1:
      return <FormCar />;
    case 2:
      return <FormNegocios />;
    case 3:
      return <ImgMediaCard />;
    case 4:
      return <FormCard />;
    default:
      throw new Error('Unknown step');
  }
}

export default function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <div>
      <Grid>
      <AppBar position="absolute" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          <img src={require('./logo.png')} alt="car" height='70px' width='100px'></img>
            
          </Typography>
        </Toolbar>
      </AppBar>
        
      </Grid>
      <Grid item xs={12} >
        <img src={require('./img_header3.jpg')} alt="img header"  width={window.innerWidth-16}></img>
      </Grid>

    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
        <img src={require('./car.png')} alt="car" height='50px' width='50px'></img>
        </Typography>
      
          <Typography component="h1" variant="h4" align="center">
            Cotação agora!
           
          </Typography>
        
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Tudo certo!
                </Typography>
                <Typography variant="subtitle1">
                  Agora você já pode curtir a vida do melhor jeito! 
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>


      </main>
    </React.Fragment>
    <Grid item xs={12} >
    <img src={require('./grid.jpg')} alt="img header"  width={window.innerWidth-16}></img>
      </Grid>
    </div>
  );
}