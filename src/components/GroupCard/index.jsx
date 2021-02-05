import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ItemChoice from '../ItemChoice'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    paddingTop: '36.25%',
  },
  title: {
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: 'gray',
    marginLeft: 4,
  },
  description: {
    color: 'grey',
  },
  content: {
    flexGrow: 1,
  },
  types: {
    color: theme.palette.secondary.light,
    marginBottom: 10,
    height: 40,
  },
  typeText: {
    marginRight: 10,
    fontSize: '14px',
  },
}))

export default function GroupCard({ group }) {
  const classes = useStyles()

  return (
    <Grid item key={group.name} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={group.image}
          title={group.name}
        />

        <CardContent className={classes.content}>
          <Grid container spacing={0} alignItems="flex-end">
            <Grid container direction="row" alignItems="baseline">
              <Typography variant="h6" component="h2" className={classes.title}>
                {group.name}
              </Typography>
              <Typography variant="caption" className={classes.subtitle}>
                (mínimo {group.min_order} un.)
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={classes.types}>
            {group.types.map((type) => {
              return (
                <Grid item key={type} className={classes.typeText}>
                  {type}
                </Grid>
              )
            })}
          </Grid>

          <Typography>{group.description}</Typography>
        </CardContent>

        <CardActions>
          <ItemChoice group={group} />
        </CardActions>
      </Card>
    </Grid>
  )
}
