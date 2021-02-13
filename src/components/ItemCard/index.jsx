import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { fMoney, CapStrFirst } from '../../utils'
import { useType } from '../../providers/typeCount'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderBottom: '1px solid #e2e2e2',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  id: {
    color: theme.palette.secondary.main,
  },
  salePrice: {
    color: theme.palette.primary.main,
    marginTop: 5,
  },
  displayItem: {
    border: `1px solid ${theme.palette.complementary.main}70`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.complementary.main,
  },
}))

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
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Grid container justify="space-between" className={classes.grid}>
            <Grid item xs={10}>
              <Typography>
                <span className={classes.id}>{item.id}</span> -{' '}
                {CapStrFirst(item.description)}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography className={classes.salePrice}>
                {fMoney(item.sale_price)}
              </Typography>
            </Grid>
          </Grid>

          <br />

          <Grid
            container
            alignItems="flex-end"
            justify="space-between"
            className={classes.grid}
          >
            <Grid item>
              <Typography>total do item</Typography>
              <Typography>{fMoney(totalItem)}</Typography>
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
        </CardContent>
      </div>
    </Card>
  )
}
