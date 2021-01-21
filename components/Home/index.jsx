
import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { getGroups } from '../../src/utils'

import GroupCard from '../GroupCard'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home({ data }) {

  const classes = useStyles();
  const groups = getGroups(data)

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md"  >
        <Grid container spacing={4} justify="center" >
          {
            groups.map((group, index) => {
              return (
                <GroupCard group={group} key={index} />//
              )
            })
          }
        </Grid>
      </Container>
    </main>
  )
}
