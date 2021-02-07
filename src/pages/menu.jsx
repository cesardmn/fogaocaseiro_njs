import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import axios from 'axios'

import { getPages, fMoney, CapStrFirst } from '../utils'
import { Page, Header, TopGroup, MenuList } from '../styles/menu'

const useStyles = makeStyles((theme) => ({
  print: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '34px',
    fontWeight: 'bolder',
  },
  groupTitle: {
    color: theme.palette.primary.main
  },
  typeText: {
    color: theme.palette.secondary.main,
  },
  grid: {
    padding: '1rem',
  },
  itemId: {
    color: theme.palette.secondary.main,
    marginLeft: '1rem'
  },
  price: {
    color: theme.palette.primary.main,
  }
}));

export default function Menu() {

  const [isLoading, setIsLoading] = useState(true)
  const [pages, setPages] = useState([])

  useEffect(() => {
    setIsLoading(false)

    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`).then(response => {
      const apiPages = getPages(response.data)
      setPages(apiPages)
      setIsLoading(false)
    })

  }, []) 


  const classes = useStyles();
  return (
    <div className={classes.print} >
      {
        isLoading ? <h1>Loading...</h1>
          :
          <>
            {
              pages.map((page, index) => {
                return (
                  <Page key={index}  >
                    <Header >
                      <img src="./media/logo.png" alt="" />

                      <div className="social">
                        <a href="https://wa.me/5521999374814"
                          target="blank"
                          rel="noopener noreferrer">
                          <WhatsAppIcon className={classes.icon} />
                          <span>(21) 999 37 48 14</span>
                        </a>

                        <a href="https://www.instagram.com/fogaocaseirooficial"
                          target="blank"
                          rel="noopener noreferrer">
                          <InstagramIcon className={classes.icon} />
                          <span>@fogaocaseirooficial</span>
                        </a>
                      </div>
                    </Header>

                    <TopGroup >
                      <h1 className={classes.groupTitle} >{page.group}</h1>
                      <span>(mínimo {page.min_order} un.)</span>
                    </TopGroup>

                    <MenuList >
                      {
                        page.types.map((type, index) => {

                          const items = page.items.filter(item => item.type.name === type)

                          return (
                            <div className="typeList" key={index} >
                              <h1 className={classes.typeText} >{type}</h1>

                              <ul>
                                {
                                  items.map(item => {
                                    return (
                                      <li key={item.id}>
                                        <Grid container direction="row" className={classes.grid} >
                                          <Grid item xs={10} >
                                            <span className={classes.itemId} >{item.id}</span> - {CapStrFirst(item.description)}
                                          </Grid>

                                          <Grid item xs={2} className={classes.price} >
                                            {fMoney(item.sale_price)}
                                          </Grid>

                                        </Grid>
                                      </li>
                                    )
                                  })
                                }
                              </ul>

                            </div>
                          )
                        })
                      }
                    </MenuList>

                  </Page>
                )
              })
            }
          </>
      }
    </div>

  )
}
