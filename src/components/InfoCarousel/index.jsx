import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

import { useStyles } from './styles'

function About() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classes.item}>
        <img
          src="./media/1.jpg"
          alt="Filé de frango recheado com ricota e
          espinafre"
          className={classes.splash}
        />
      </Grid>

      <Grid item xs={12} md={8} className={classes.item}>
        <Container>
          <Typography
            variant="h6"
            color="primary"
            className={classes.title}
            align="center"
          >
            Fogão Caseiro
          </Typography>

          <Typography variant="body1" className={classes.text} align="justify">
            A solução para quem não tem tempo de cozinhar, mas gosta de boa
            comida em sua mesa.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  )
}

function Order() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classes.item}>
        <img src="./media/2.jpg" alt="Macarronese" className={classes.splash} />
      </Grid>

      <Grid item xs={12} md={8} className={classes.item}>
        <Container>
          <Typography
            variant="h6"
            color="primary"
            className={classes.title}
            align="center"
          >
            Encomendas
          </Typography>

          <Typography variant="body1" className={classes.text} align="center">
            2ª a 4ª das 10:00 às 18:00.
          </Typography>

          <br />

          <Typography variant="body1" className={classes.text} align="center">
            Atendimento via WhatsApp.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  )
}

function Delivery() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classes.item}>
        <img
          src="./media/3.jpg"
          alt="Purê de batatas"
          className={classes.splash}
        />
      </Grid>

      <Grid item xs={12} md={8} className={classes.item}>
        <Container>
          <Typography
            variant="h6"
            color="primary"
            className={classes.title}
            align="center"
          >
            Entregas
          </Typography>

          <Typography variant="body1" className={classes.text} align="center">
            Icaraí, Santa Rosa, Centro e Ingá:
          </Typography>

          <Typography variant="body1" className={classes.text} align="center">
            R$ 8,00.
          </Typography>

          <Typography variant="body1" className={classes.text} align="center">
            Demais localidades: sob consulta.
          </Typography>
        </Container>
      </Grid>
    </Grid>
  )
}

const settings = {
  mouseTracking: true,
  autoPlay: true,
  infinite: true,
  disableDotsControls: true,
  disableButtonsControls: true,
  autoPlayInterval: 4500,
  animationDuration: 1000,
  AnimationType: 'fadeout',
  items: [<About />, <Order />, <Delivery />],
}

export default function Carousel() {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper}>
      <AliceCarousel {...settings} />
    </Paper>
  )
}
