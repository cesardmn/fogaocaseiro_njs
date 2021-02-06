import PageDefault from '../src/components/PageDefault'
import Home from '../src/components/Home'

export default function Index({ apiData }) {
  return (
    <PageDefault>
      <Home data={apiData} />
    </PageDefault>
  )
}

export async function getStaticProps() {
  const url = `${process.env.BASE_URL}/api/items`

  const config = {
    headers: {
      'Content-Type': 'application.json',
      'Authorization': process.env.ADMIN_TOKEN
    }
  }
  const res = await fetch(url, config)
  const apiData = await res.json()

  return {
    props: {
      apiData,
    },
    revalidate: 604800,
  }
}
