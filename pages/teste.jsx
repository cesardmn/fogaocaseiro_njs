export default function Teste() {
  async function send(e) {
    e.preventDefault()

    const order = {
      user: 1,
      orderItems: [
        { item: 15, amount: 1 },
        { item: 25, amount: 3 },
        { item: 25, amount: 2 },
        { item: 5, amount: 1 },
        { item: 2, amount: 1 },
      ],
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    }

    const res = await fetch(process.env.BACK_API, requestOptions)
    const apiData = await res.json()

    console.log(apiData)
  }

  return (
    <form onSubmit={(e) => send(e)}>
      <button>enviar</button>
    </form>
  )
}
