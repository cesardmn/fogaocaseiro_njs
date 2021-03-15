import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { fMoney, CapStrFirst } from '../../utils'
import { useType } from '../../providers/typeCount'
import { useStyles } from './styles'

export default function ItemCard({ item }) {
  const classes = useStyles()
  const { totalType, setTotalType } = useType()

  const minOrder = item.group.min_order
  const percent = 100 / minOrder

  const [totalItem, setTotalItem] = useState(0)
  const [itemCount, setItemCount] = useState(0)

  function addItem() {
    setItemCount(itemCount + 1)
    setTotalItem(totalItem + item.sale_price)
    setTotalType(totalType + percent)
    window.navigator.vibrate(20)
  }

  function removeItem() {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
      setTotalItem(totalItem - item.sale_price)
      setTotalType(totalType - percent)
      window.navigator.vibrate(20)
    }
  }

  return (
    <Grid container className={classes.card}>
      {/* description */}
      <Grid item>
        <Grid item xs={12}>
          <Typography align="justify">
            <span className={classes.id}>{item.id}</span> -{' '}
            {CapStrFirst(item.description)}
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <Typography className={classes.salePrice}>
              {fMoney(item.sale_price)}
            </Typography>
          </Grid>

          <Grid item>
            <ButtonGroup variant="outlined">
              <Button onClick={removeItem}>-</Button>
              <Typography variant="button" className={classes.displayItem}>
                {itemCount}
              </Typography>
              <Button onClick={addItem}>+</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
