import React, { useEffect, useReducer } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Link from '@material-ui/core/Link'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import InstagramIcon from '@material-ui/icons/Instagram'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { useAuth } from '../../providers/auth'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  socialIcon: {
    color: 'white',
  },
}))

const WhatsAppLinkProps = {
  target: 'blank',
  rel: 'noopener noreferrer',
  href: 'https://wa.me/5521999374814',
}

const InstagramLinkProps = {
  target: 'blank',
  rel: 'noopener noreferrer',
  href: 'https://www.instagram.com/fogaocaseirooficial',
}

const MenuProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  keepMounted: true,
  transformOrigin: { vertical: 'top', horizontal: 'right' },
}

export default function PageDefaultMenu() {
  const classes = useStyles()
  const { user, setUser } = useAuth()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')) || { user: '' }
    setUser(data.user)
  }, [])

  function logOut() {
    localStorage.setItem('user', JSON.stringify({ user: '' }))
    setUser('')
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      {...MenuProps}
      open={isMenuOpen}
      onClose={() => {
        setAnchorEl(null)
      }}
    >
      {user !== '' ? (
        <div>
          <MenuItem
            onClick={() => {
              setAnchorEl(null)
            }}
          >
            <span>{user}</span>
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAnchorEl(null)
              logOut()
            }}
          >
            <span>logout</span>
          </MenuItem>
        </div>
      ) : (
        <div>
          <Link href="/signin">
            <MenuItem
              onClick={() => {
                setAnchorEl(null)
              }}
            >
              Entrar
            </MenuItem>
          </Link>

          <Link href="/signup">
            <MenuItem
              onClick={() => {
                setAnchorEl(null)
              }}
            >
              Cadastrar
            </MenuItem>
          </Link>
        </div>
      )}
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <Toolbar>
        <div className={classes.grow} />

        <Link {...WhatsAppLinkProps} className={classes.socialIcon}>
          <IconButton color="inherit">
            <WhatsAppIcon />
          </IconButton>
        </Link>

        <Link {...InstagramLinkProps} className={classes.socialIcon}>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Link>

        {/* <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton> */}

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={(e) => {
            setAnchorEl(e.currentTarget)
          }}
          color="inherit"
        >
          <Badge
            badgeContent={user === '' ? 0 : user}
            color="secondary"
            overlap="circle"
            variant="dot"
          >
            <AccountCircle />
          </Badge>
        </IconButton>
      </Toolbar>
      {renderMenu}
    </div>
  )
}
