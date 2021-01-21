import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PageDefault from '../components/PageDefault'
import Container from '@material-ui/core/Container';

import { getPages, fMoney } from '../src/utils'

const useStyles = makeStyles((theme) => ({
  root: {}
}));

export default function Menu({ data }) {

  const classes = useStyles();
  const pages = getPages(data)

  return (
    <PageDefault >

      {
        pages.map((page, index) => {
          return (
            <Container key={index}>

              <h1 >{page.group}</h1>

              <ul>
                {
                  page.types.map(type => <li key={type}>{type}</li>)
                }
              </ul>

              <ul>
                {
                  page.items.map(item => {
                    return (
                      <li>

                        <p key={item.id}>
                          <span>{item.id} - </span> {item.description} - <span>{fMoney(item.sale_price)}</span>
                        </p>
                        <hr />
                      </li>
                    )
                  })
                }
              </ul>

            </Container>
          )
        })
      }


    </PageDefault>
  )
}

export async function getStaticProps() {
  // const res = await fetch(`https://backfc.herokuapp.com/api/items`)
  const res = await fetch(`https://www.fogaocaseiro.com.br/imgs/data.json`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
