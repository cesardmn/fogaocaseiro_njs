import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: `url('./media/bg.png')`,
    backgroundSize: 'cover',
    height: 110,
    width: '100%',
    backgroundColor: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  grid: {
    height: 110,
    maxWidth: '600px',
    minWidth: '340px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {
    height: 110,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: 'white',
    padding: '0.5rem 0',
    '& > :first-child': {
      marginRight: 10,
    },
  },
  menu: {
    height: '100%',
    border: '1px solid green',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}))
