import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';



const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}°C`;
  }

export default function Review() {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vamos negociar
      </Typography>
     
    <Grid item xs={6}>

    <p>Eu pagaria até:</p>
    <Slider
        min= {1000}
        max= {5000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </Grid>
    </React.Fragment>
  );
}