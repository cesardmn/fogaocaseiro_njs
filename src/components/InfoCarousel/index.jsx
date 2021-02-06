import Slider from 'react-slick'

import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

import { Info, Order } from './styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    minWidth: '300px',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
  },
  carousel: {
    outline: 0,
  },
  orderTitle: {
    color: theme.palette.primary.main,
  },
}))

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 1000,
    pauseOnHover: true,
    dots: true,
  }

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Slider {...settings} className={classes.carousel}>
        <Info>
          <p>
            A solução para quem não tem tempo de cozinhar, mas gosta de boa
            comida em sua mesa.
          </p>
        </Info>
        <Info>
          <p>
            Consulte nossas opções e aproveite as delícias da comida caseira.
          </p>
        </Info>

        <Order>
          <h1 className={classes.orderTitle}>Encomendas</h1>
          <div className="container">
            <p>2ª a 4ª das 10:00 às 18:00.</p>
            <p>Atendimento via WhatsApp.</p>
          </div>
        </Order>

        <Order>
          <h1 className={classes.orderTitle}>Entregas</h1>
          <div className="container">
            <p>Icaraí, Santa Rosa, Centro e Ingá: R$ 8,00.</p>
            <p>Demais localidades: sob consulta.</p>
          </div>
        </Order>
      </Slider>
    </Paper>
  )
}
