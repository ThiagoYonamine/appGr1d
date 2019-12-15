import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default class FormCar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          placa: '',
          carInfo: '',
        };
      }

    handleOnChangePlaca = (event) => {
        if (!event) { return; }
        this.setState({ placa: event.target.value });
      }

    handlerCarinfo = async event => {
        try{

          this.setState({placa: "AQWD1563"});
         /* Precificador de Chassi dps de pegar a placa*/
         const headers = {
            'Content-Type': 'application/json',
            'X-Api-Key': 'adf9d65c-777a-4c30-b5f9-758f659b1480',
          };

          let res = await axios.get(
            `https://gateway.gr1d.io/production/unionsolution/precificador/v1/precificador?pstrChassi=36279119918&pstrPlaca=`
            +this.state.placa, 
            {headers}
           );

           //todo a api esta mockada e n esta retornando informaçoes reais.
           this.setState( {carInfo: res.data });
           console.log({result: res.data});

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
                dado: this.state.placa,
                tipo: "PLACA"
            }
           };
          res = await axios.post(
            `https://gateway.gr1d.io/production/infocar/parecertecnicoplus/v1/ParecerTecnicoPlus`, 
            ParecerRequest,
            {headers: Parecerheaders}
           );

           //todo a api esta mockada e n esta retornando informaçoes reais.
           this.setState( {carInfo: res.data });
           console.log({result: res.data});

        } catch (e) {
            console.log(`Request failed: ${e}`);
        }
      }

      componentDidMount() {
          this.handlerCarinfo();
      }

render() {
    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Carro
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField required id="placa" label="Placa do carro" fullWidth />
            </Grid>
            <Grid item xs={6}>
            <FormControlLabel
                control={<Checkbox color="secondary" name="particular" value="yes" />}
                label="Meu carro é particular"
            />
            </Grid>

            <Grid item xs={6}>
            <FormControlLabel 
                control={<Checkbox color="secondary" name="particular" value="yes" />}
                label="Meu carro possui adaptações"
            />
            </Grid>

            <Grid item xs={6}>
                <FormControlLabel 
                control={<Checkbox color="secondary" name="particular" value="yes" />}
                label="Meu carro é blindado"
            />
            </Grid>
                <Grid item xs={6}>
                    <FormControlLabel 
                    control={<Checkbox color="secondary" name="particular" value="yes" />}
                    label="Meu carro dorme na minha residência"
                />
            </Grid>
        </Grid>
        </React.Fragment>
    );
    }
}