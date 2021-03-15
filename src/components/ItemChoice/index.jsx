import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import TypeList from '../TypeList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import { useStyles } from './styles'
import { useType } from '../../providers/typeCount'
import { Add } from '@material-ui/icons'

export default function ItemChoice({ group }) {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setTotalType(0)
    setOpen(false)
  }

  const classes = useStyles()
  const { totalType, setTotalType } = useType()

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
        <DialogTitle id="responsive-dialog-title" className={classes.bg} />

        <Grid container className={classes.top} alignItems="center">
          <Grid
            item
            xs={7}
            container
            className={classes.left}
            direction="column"
          >
            <Grid item>
              <Typography component="h2" variant="h6" color="primary">
                {group.name}
              </Typography>
            </Grid>
            {totalType < 100 ? (
              <Typography color="textSecondary">
                Escolha ao menos {group.min_order}{' '}
                {group.min_order > 1 ? 'itens' : 'item'}.
              </Typography>
            ) : (
              <Typography color="textSecondary">
                Adicione ao carrinho.
              </Typography>
            )}
          </Grid>

          <Grid
            item
            xs={5}
            container
            className={classes.right}
            justify="flex-end"
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              disabled={totalType >= 100 ? false : true}
            >
              <Grid item xs={8} container>
                <Grid item>0/2 itens</Grid>
                <Grid item>R$ 0,00</Grid>
              </Grid>

              <Grid item xs={4}>
                <AddShoppingCartIcon />
              </Grid>
            </Button>
          </Grid>
        </Grid>

        <LinearProgress
          variant="determinate"
          value={totalType > 100 ? 100 : totalType}
          color={totalType >= 100 ? 'primary' : 'secondary'}
          className={classes.linear}
        />

        <TypeList group={group} />
      </Dialog>
    </div>
  )
}
