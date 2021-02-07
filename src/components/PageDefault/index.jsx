import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
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
    maxWidth: '800px',
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
      marginRight: 10
    }
  }
}));

export default function PageDefault({ children }) {

  const classes = useStyles();

  return (
    <React.Fragment>

      <ElevationScroll >
        <AppBar className={classes.appBar} >
          <Grid
            container
            className={classes.grid}
            direction="row">

            <Grid item xs={4}>
              <img src="./media/logo.png" alt="Fogão Caseiro" className={classes.logo} />
            </Grid>

            <Grid item xs={8}>
              <Grid container justify="space-evenly" >
                <Link
                  href="https://wa.me/5521999374814"
                  target="blank"
                  rel="noopener noreferrer"
                  className={classes.social}
                >
                  <WhatsAppIcon />
                   (21) 999 37 48 14
                </Link>

                <Link
                  href="https://www.instagram.com/fogaocaseirooficial"
                  target="blank"
                  rel="noopener noreferrer"
                  className={classes.social}
                >
                  <InstagramIcon className={classes.icon} />
                    @fogaocaseirooficial
                </Link>

              </Grid>
            </Grid>

          </Grid>
        </AppBar>
      </ElevationScroll>

      <Toolbar />

      <Container>
        <Box my={0}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
