import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { useStyles } from './styles'

const settings = {
  autoPlay: true,
  infinite: true,
  disableDotsControls: true,
  disableButtonsControls: true,
  autoPlayInterval: 3500,
}

export default function Gallery() {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.paper}>
      <AliceCarousel {...settings}>
        <Grid container direction="column" justify="space-evenly">
          <Grid item xs={12} sm={6} className={classes.item}>
            <img src="./media/1.png" alt="" className={classes.splash} />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.item}>
            <Grid container direction="column" justify="space-evenly">
              <Typography variant="p">
                A solução para quem não tem tempo de cozinhar, mas gosta de boa
                comida em sua mesa.
              </Typography>
              <Typography variant="p">
                Consulte nossas opções e aproveite as delícias da comida
                caseira.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column" justify="space-evenly">
          <Grid item xs={12} sm={6} className={classes.item}>
            <img src="./media/2.png" alt="" className={classes.splash} />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.item}>
            <Grid container direction="column" justify="space-evenly">
              <Grid item>
                <Typography variant="h5" color="primary">
                  Encomendas
                </Typography>
              </Grid>

              <Grid item className={classes.text}>
                <Typography variant="p">2ª a 4ª das 10:00 às 18:00.</Typography>
                <Typography variant="p">Atendimento via WhatsApp.</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column" justify="space-evenly">
          <Grid item xs={12} sm={6} className={classes.item}>
            <img src="./media/3.png" alt="" className={classes.splash} />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.item}>
            <Grid container direction="column" justify="space-evenly">
              <Grid item>
                <Typography variant="h5" color="primary">
                  Entregas
                </Typography>
              </Grid>

              <Grid item className={classes.text}>
                <Typography variant="p">
                  Icaraí, Santa Rosa, Centro e Ingá:
                </Typography>
                <Typography variant="p">R$ 8,00.</Typography>
                <Typography variant="p">
                  Demais localidades: sob consulta.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AliceCarousel>
    </Paper>
  )
}
