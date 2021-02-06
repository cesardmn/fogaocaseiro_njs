import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { ElevationScroll } from './tasks'
import { useStyles } from './styles'
import MenuBar from '../MenuBar'

export default function PageDefault({ children }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Grid container className={classes.grid} direction="row">
            <Grid item xs={3}>
              <img
                src="./media/logo.png"
                alt="Fogão Caseiro"
                className={classes.logo}
              />
            </Grid>

            <MenuBar />
          </Grid>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Container>
        <Box my={0}>{children}</Box>
      </Container>
    </React.Fragment>
  )
}
