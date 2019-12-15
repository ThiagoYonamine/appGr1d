import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

export default class AddressForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      country: '',
    };
  }

  handleOnChangeFirstName = (event) => {
    if (!event) { return; }

    this.setState({ firstName: event.target.value });
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.firstName);
    console.log('TESTEEEEE');
    console.log(this.state.firstName);
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
      </Typography>
        <form onSubmit={this.mySubmitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="fname"
                value={this.state.firstName}
                onChange={this.handleOnChangeFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="lname"
                value={this.state.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="billing address-line1"
                value={this.state.address1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="billing address-line2"
                value={this.state.address2}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="billing address-level2"
                value={this.state.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="billing postal-code"
                value={this.state.zip}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="billing country"
                value={this.state.country}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button type='submit' color='primary'>TESTE</Button>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
              />
            </Grid>

          </Grid>
        </form>
      </React.Fragment >
    );
  }
}