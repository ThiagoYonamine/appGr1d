import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

export default class AddressForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      cpf: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      country: '',
      email: '',
      name: '',
      gender: '',
      age: '',
      taxIdCountry: '',
      totalAssets: '',
      cnhInfo: '',
      carInfo: '',
    };
  }

  handleOnChangeCPF = (event) => {
    if (!event) { return; }
    this.setState({ cpf: event.target.value });
  }
 
  /**
   *  API REQUESTS
   *
   * */
  mySubmitHandler = async event => {
    try{
       event.preventDefault();

       /* APi pega informações basicas do usuario*/
       const headers = {
         'Content-Type': 'application/json',
         'X-Api-Key': '52d2e55d-0561-4178-b812-079491fa1769',
       };
       const emails = {
        Datasets: "emails",
        q: "doc{" + this.state.cpf + "}",
        AccessToken: "52d2e55d-0561-4178-b812-079491fa1769"
       };
       let res = await axios.post(
         `https://gateway.gr1d.io/production/bigdata/bigboost/v1/peoplev2`, 
         emails,
         {headers}
        );
        console.log({result: res.data});
        this.setState( {email: res.data.Result[0].Emails[0].EmailAddress });

        const basics = {
          Datasets: "basic_data",
          q: "doc{" + this.state.cpf + "}",
          AccessToken: "52d2e55d-0561-4178-b812-079491fa1769"
         };
        res = await axios.post(
          `https://gateway.gr1d.io/production/bigdata/bigboost/v1/peoplev2`, 
           basics,
          {headers}
         );

        this.setState( {name: res.data.Result[0].BasicData.Name });
        this.setState( {gender: res.data.Result[0].BasicData.Gender });
        this.setState( {age: res.data.Result[0].BasicData.Age });
        this.setState( {country: res.data.Result[0].BasicData.TaxIdCountry });

        const financial = {
          Datasets: "financial_data",
          q: "doc{" + this.state.cpf + "}",
          AccessToken: "52d2e55d-0561-4178-b812-079491fa1769"
         };
        
        res = await axios.post(
          `https://gateway.gr1d.io/production/bigdata/bigboost/v1/peoplev2`, 
          financial,
          {headers}
         );

        this.setState( {totalAssets: res.data.Result[0].FinantialData.TotalAssets });

        /**
         * Esta pesquisa retorna os dados do condutor, bem como seus impedimentos e pontuação online.
         */
        const CNHheaders = {
          'Content-Type': 'application/json',
          'X-Api-Key': '986ac350-6aef-43c0-9707-8ea597215a41',
        };
        const CNHRequest = {
          parameters: {
            cpf: this.state.cpf
          }
         };
        res = await axios.post(
          `https://gateway.gr1d.io/production/infocar/cnh/v1/INFOCAR_CNH`, 
          CNHRequest,
          {headers: CNHheaders}
         );
         this.setState( {cnhInfo: res.data });

          /* Esta pesquisa retorna uma régua de risco de avaliação do veículo,
          seus critérios e parâmetros levam em consideração itens que possam vir 
          a depreciar o veículo, tais como passagem por leilão, passagem por locadora,
          órgão público, registro de sinistro anterior, dentre outros.*/
          const Parecerheaders = {
            'Content-Type': 'application/json',
            'X-Api-Key': '2c6928e2-d39f-448b-a7b1-c40065e50e3e',
          };
          const ParecerRequest = {
            parameters: {
              cpf: this.state.cpf
            }
           };
          res = await axios.post(
            `https://gateway.gr1d.io/production/infocar/parecertecnicoplus/v1/ParecerTecnicoPlus`, 
            ParecerRequest,
            {headers: Parecerheaders}
           );

           //todo a api esta mockada e n esta retornando informaçoes certas.
           this.setState( {carInfo: res.data });
 
        //this.setState({result: res.data});
       //const persons = res.data;
       //this.setState({persons});
       this.processIA();
    } catch (e) {
     console.log(`Request failed: ${e}`);
   }
 }

 /**
  * Deveria processar os dados do usuario e fazer indicações com algoritmo.
  */
 processIA = () => {
      console.log(`IA...`);
 }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
      </Typography>
        <form onSubmit={this.mySubmitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                id="cpf"
                name="cpf"
                label="CPF"
                fullWidth
                autoComplete="fname"
                value={this.state.cpf}
                onChange={this.handleOnChangeCPF}
              />
            </Grid>
            <Grid item xs={12} sm={1} >
              <Button type='submit' color='primary'>OK</Button>
            </Grid>
            <Grid item xs={12}>
              <p>{ !!this.state.name && "Uhull! Olá "+this.state.name}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="sexo"
                name="sexo"
                label="Sexo"
                fullWidth
                autoComplete="billing address-line2"
                value={this.state.gender}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="idade"
                name="idade"
                label="Idade"
                fullWidth
                autoComplete="billing address-level2"
                value={this.state.age}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="billing address-level2"
                value={this.state.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="Pais" name="Pais" label="Pais" fullWidth value={this.state.country} />
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
          </Grid>
        </form>
      </React.Fragment >
    );
  }
}