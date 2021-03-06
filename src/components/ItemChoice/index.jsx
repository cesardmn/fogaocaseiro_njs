import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import TypeList from '../TypeList'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles((theme) => ({
  requiredDisplay: {
    backgroundColor: theme.palette.secondary.light,
    color: 'white',
    fontSize: '14px',
    padding: 5,
  },
  bg: {
    backgroundImage: `url('./media/bg.png')`,
    backgroundSize: 'cover',
    color: 'white',
    overflow: 'hidden',
    padding: '0 1rem',
  },
  logo: {
    height: 70,
    width: 70,
  },
}))

export default function ItemChoice({ group }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyles()

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        ver mais ...
      </Button>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className={classes.bg}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>{group.name}</Grid>

            <Grid item>
              <img src="./media/logo.png" alt="" className={classes.logo} />
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogActions>
          <Grid container justify="space-between">
            <IconButton onClick={handleClose} autoFocus>
              <ArrowBackIosIcon />
            </IconButton>

            <Paper className={classes.requiredDisplay}>
              <Typography variant="subtitle1">
                mínimo ({group.min_order} un.)
              </Typography>
            </Paper>

            <IconButton onClick={handleClose} autoFocus>
              <HomeIcon />
            </IconButton>
          </Grid>
        </DialogActions>

        <TypeList group={group} />
      </Dialog>
    </div>
  )
}
