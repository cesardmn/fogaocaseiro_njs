import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import Alert from '@material-ui/lab/Alert'

import Copyright from '../components/Copyright'

import { sigInStyles } from '../views/signin/styles'
import { logIn } from '../views/signin/tasks'

import { useAuth } from '../providers/auth'

const useStyles = sigInStyles

export default function SignInSide() {
  const classes = useStyles()
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')

  const { user, setUser } = useAuth()

  async function handleLogin(e) {
    e.preventDefault()
    const loginResponse = await logIn(username, password)

    if (loginResponse.token) {
      setAlert(false)
      setUser(username)
      router.push('/')
    } else {
      setAlert(true)
    }
  }

  const textFieldCommomProps = {
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Link href="/">
            <img
              src="./media/logo.png"
              alt="Fogão Caseiro"
              className={classes.logo}
            />
          </Link>

          <Typography component="h1" variant="h5" color="primary">
            Login
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => handleLogin(e)}
          >
            <TextField
              {...textFieldCommomProps}
              value={username}
              name="username"
              label="usuário"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              {...textFieldCommomProps}
              value={password}
              name="password"
              label="senha"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <>
              {alert && (
                <Alert severity="error">
                  "Impossível fazer login com as credenciais fornecidas."
                </Alert>
              )}
            </>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {'Não tenho conta, quero me cadastrar.'}
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
