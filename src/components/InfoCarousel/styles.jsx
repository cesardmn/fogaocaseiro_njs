import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: '150px',
    minWidth: '300px',
    maxWidth: '600px',
    marginBottom: '20px',
    innerWidth: 1,
  },
  item: {
    height: '150px',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
  },
  splash: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  text: {
    color: theme.palette.complementary.main,
  },
  title: {
    color: theme.palette.primary.main,
  },
}))
