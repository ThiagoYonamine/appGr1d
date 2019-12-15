import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function FormCard() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Cadastre o cartão
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField  id="card" label="Nome no cartão" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField  id="ncard" label="Número do Cartão" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField  id="date" label="Validade" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="cvv"
            label="CVV"
            helperText="CVV"
            fullWidth
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}