import React from 'react';
import PageDefault from '../components/PageDefault'
import Home from '../components/Home'

export default function Index({ apiData }) {

  return (
    <PageDefault >
      <Home data={apiData} />
    </PageDefault>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://backfc.herokuapp.com/api/items`)
  // const res = await fetch(`https://www.fogaocaseiro.com.br/imgs/data.json`)
  const apiData = await res.json()

  return {
    props: {
      apiData
    },
    revalidate: 86400
  }
}
