import React from 'react'
import PageDefault from '../components/PageDefault'
import Home from '../components/Home'

export default function Index({ apiData }) {
  return (
    <PageDefault>
      <Home data={apiData} />
    </PageDefault>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/items`)
  const apiData = await res.json()

  return {
    props: {
      apiData,
    },
    revalidate: 604801,
  }
}
