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

    const config = {
      headers: {
        'Content-Type': 'application.json',
        'Authorization': process.env.TOKEN
      }
    }
    const res = await fetch(process.env.BACK_API_DEV, config)
    const apiData = await res.json()

  return {
    props: {
      apiData
    },
    revalidate: 604800
  }
}
