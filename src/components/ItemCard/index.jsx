import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { fMoney, CapStrFirst } from '../../utils'
import Grid from '@material-ui/core/Grid';

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
}));

export default function ItemCard({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>

          <Grid container justify="space-between" className={classes.grid} >

            <Grid item xs={10} >
              <Typography >
                <span className={classes.id}>
                  {item.id}
                </span> - {CapStrFirst(item.description)}
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography className={classes.salePrice} >{fMoney(item.sale_price)}</Typography>
            </Grid>

          </Grid>

        </CardContent>

      </div>
    </Card>
  );
}