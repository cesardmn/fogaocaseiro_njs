import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const useStyles = makeStyles((theme) => ({
  container: {
    border: '1px solid green',
    minWidth: '300px',
    maxWidth: '600px',
    minHeight: '150px',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '300px',
    objectFit: 'cover',
  },
  content: {
    height: '100%',
    width: '300px',
    overflow: 'hidden',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
}))

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 600, min: 300 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 600, min: 300 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 600, min: 300 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 300 },
    items: 1,
  },
}

export default function InfoCarolseu() {
  const classes = useStyles()

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      className={classes.container}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      arrows={false}
    >
      <Grid container wrap="wrap" className={classes.container}>
        <Grid item xs={6}>
          <img src="./media/1.jpg" alt="" className={classes.img} />
        </Grid>

        <Grid item xs={6} className={classes.content}>
          <h1>Title 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            expedita quo! Voluptas quisquam aliquam officiis, quae consectetur
            quidem voluptates nihil quasi ratione, quas maiores velit totam illo
            suscipit alias cum.
          </p>
        </Grid>
      </Grid>

      <Grid container wrap="wrap" className={classes.container}>
        <Grid item xs={6}>
          <img src="./media/1.jpg" alt="" className={classes.img} />
        </Grid>

        <Grid item xs={6} className={classes.content}>
          <h1>Title 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            expedita quo! Voluptas quisquam aliquam officiis, quae consectetur
            quidem voluptates nihil quasi ratione, quas maiores velit totam illo
            suscipit alias cum.
          </p>
        </Grid>
      </Grid>
    </Carousel>
  )
}
