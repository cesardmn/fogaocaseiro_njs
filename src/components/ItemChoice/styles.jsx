import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url('./media/bg.png')`,
    backgroundSize: 'cover',
    filter: 'brightness(50%)',
  },
  linear: {
    height: 10,
  },
  top: {
    padding: 5,
  },
  left: {
    height: '100%',
    width: '100%',
    // border: '1px solid red',
  },
  right: {
    height: '100%',
    width: '100%',
    // border: '1px solid blue',
  },
  button: {
    padding: '10px',
    textTransform: 'none',
    minWidth: '150px',
    height: '100%'
  }
}))