import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import TypeList from '../TypeList'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

import { useStyles } from './styles'
import { useType } from '../../providers/typeCount'
import { fMoney } from '../../utils'

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
  const { totalType, setTotalType, totalValueType, totalCountType } = useType()

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
            <Grid item>
              {totalType < 100 ? (
                <Typography color="textSecondary">
                  {totalCountType}/{group.min_order} itens escolhidos.
                </Typography>
              ) : (
                <Typography color="textSecondary">
                  {totalCountType} itens escolhidos.
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid
            item
            xs={5}
            container
            className={classes.right}
            justify="flex-end"
          >
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              disabled={totalType >= 100 ? false : true}
            >
              <Grid item xs container>
                <Grid item color="primary" >{fMoney(totalValueType)}</Grid>
              </Grid>

              <Grid item xs={4} >
                <Badge badgeContent={totalCountType}>
                  <AddShoppingCartIcon />
                </Badge>
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
