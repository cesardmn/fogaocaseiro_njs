import React from 'react'
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

export default function PageDefaultMenu() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="/signin">Entrar</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/signup">Cadastrar</Link>
      </MenuItem>
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

        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>

      {renderMenu}
    </div>
  )
}
