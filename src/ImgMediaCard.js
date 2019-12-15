import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 550,
    marginTop: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ImgMediaCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
    <Card className={classes.card}>
      <CardHeader
        title="Seguradora Stark"
        subheader="R$56,25 / mês"
      />
      <CardMedia
        className={classes.media}
        image="../car-assist1.jpg"
        title="Car Assist"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Colisão, incêndio, roubo e furto, alagamento e eventos da natureza e danos materiais a terceiros.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" color="primary">
          Contratar
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
          <Typography paragraph><b>Colisão</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Switch
            checked={true}
            value="checked"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Grid>
          </Grid>

          <Typography paragraph>Vale para perda total</Typography>

          <Typography paragraph>
          Se acontecer um acidente e seu carro “já era”? Não desespera! Em caso de perda total em batidas, capotagens, queda do veículo ou queda de qualquer objeto que cause a perda total do seu carro, essa cobertura garante que vc receba o valor que contratou no seguro.
INDENIZAÇÃO DE 100% DA TABELA FIPE
<br></br>
<br></br>
<Typography paragraph>Vale para qualquer batida</Typography>
          Se rolar algum acidente com seu carro, seja batida, capotagem, incêndio ou alagamento, ou até mesmo se ele foi roubado ou furtado e, depois, encontrado com problemas, você pode acionar essa cobertura que pagamos o conserto pra você. Mas fique ligado: o valor pra deixar tudo em ordem tem que ser superior ao valor que você definiu de franquia, ok? ;)
          </Typography>

          <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
          <Typography paragraph><b>Incêndio  (+R$20)</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Switch
            value="checked"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Grid>
          </Grid>

          <Typography paragraph>
          Se seu veículo der PT porque pegou fogo, explodiu ou caiu um raio, vc recebe seu seguro integral pra compensar o prejuízo.
INDENIZAÇÃO DE 100% DA TABELA FIPE
          </Typography>


          <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
          <Typography paragraph><b>Roubo e furto</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Switch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Grid>
          </Grid>

          <Typography paragraph>
          Que @#$%! Seu carro foi roubado? Calma, calma. Se em trinta dias ele não for encontrado a gente paga o valor total do seu seguro. Mas se for e estiver bem, bem detonado – deu PT – a gente também cobre o seguro pra você.
INDENIZAÇÃO DE 100% DA TABELA FIPE
          </Typography>

          <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
          <Typography paragraph><b>Alagamento e eventos da natureza (+R$20)</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Switch
            value="checked"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Grid>
          </Grid>

          <Typography paragraph>
          Se seu carro foi pego de surpresa no meio de uma inundação, alagamento, granizo ou ventos fortes e deu PT, não se preocupe. Você tem direito ao valor integral de seu seguro pra cobrir seu prejuízo.
          </Typography>

          <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
          <Typography paragraph><b>Danos materiais a terceiros  (+R$30)</b></Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Switch
            checked={state.checkedC}
            onChange={handleChange('checkedC')}
            value="checkedC"
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          </Grid>
          </Grid>

          <Typography paragraph>
          Se acontecer um acidente que envolva os bens de outras pessoas, você conta com essa ajuda pra bancar as despesas que tiver com reparos, reposições e até mesmo com advogados, se for o caso.
          </Typography>
          <Typography>
            <b>Download </b>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card spacing={3} className={classes.card}>
    <CardHeader
      title="Seguradora Lannister"
      subheader="R$960,00 / mês"
    />
    <CardMedia
      className={classes.media}
      image="../car-assist2.jpg"
      title="Car Assist"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio rutrum, sodales nisi et, viverra nunc.
        Vestibulum sit amet pretium mauris, et gravida eros. Morbi rhoncus id tellus mattis varius.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Button size="small" color="primary">
        Contratar
      </Button>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio rutrum, sodales nisi et, viverra nunc.
        Vestibulum sit amet pretium mauris, et gravida eros. Morbi rhoncus id tellus mattis varius.
        </Typography>
        <Typography paragraph>
        Donec dignissim libero vel arcu vulputate, id volutpat sapien consequat.
          Nulla auctor fermentum eleifend. Donec ex sem, tempor eget urna eu, malesuada maximus magna.
          Nullam nisl mi, laoreet id blandit quis, bibendum sit amet elit. Pellentesque rutrum at tellus sit amet feugiat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Typography>
        <Typography paragraph>
        Donec dignissim libero vel arcu vulputate, id volutpat sapien consequat.
          Nulla auctor fermentum eleifend. Donec ex sem, tempor eget urna eu, malesuada maximus magna.
          Nullam nisl mi, laoreet id blandit quis, bibendum sit amet elit. Pellentesque rutrum at tellus sit amet feugiat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Typography>
        <Typography>
        <b>Download </b>
        </Typography>
      </CardContent>
    </Collapse>
  </Card>

  <Card className={classes.card}>
  <CardHeader
    title="Seguradora Targaryen"
    subheader="R$1.042,00 / mês"
  />
  <CardMedia
    className={classes.media}
    image="../car-assist3.jpg"
    title="Car Assist"
  />
  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio rutrum, sodales nisi et, viverra nunc.
        Vestibulum sit amet pretium mauris, et gravida eros. Morbi rhoncus id tellus mattis varius.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <Button size="small" color="primary">
      Contratar
    </Button>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio rutrum, sodales nisi et, viverra nunc.
        Vestibulum sit amet pretium mauris, et gravida eros. Morbi rhoncus id tellus mattis varius.
      </Typography>
      <Typography paragraph>
      Donec dignissim libero vel arcu vulputate, id volutpat sapien consequat.
          Nulla auctor fermentum eleifend. Donec ex sem, tempor eget urna eu, malesuada maximus magna.
          Nullam nisl mi, laoreet id blandit quis, bibendum sit amet elit. Pellentesque rutrum at tellus sit amet feugiat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
      </Typography>
      <Typography paragraph>
      Donec dignissim libero vel arcu vulputate, id volutpat sapien consequat.
          Nulla auctor fermentum eleifend. Donec ex sem, tempor eget urna eu, malesuada maximus magna.
          Nullam nisl mi, laoreet id blandit quis, bibendum sit amet elit. Pellentesque rutrum at tellus sit amet feugiat.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
      </Typography>
      <Typography>
      <b>Download </b>
      </Typography>
    </CardContent>
  </Collapse>
</Card>
</React.Fragment>
  );
}