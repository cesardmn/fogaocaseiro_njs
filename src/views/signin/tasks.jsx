export async function logIn(username, password) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth-token`

  console.log(url)

  const credentials = {
    username,
    password,
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  }

  const data = await (await fetch(url, requestOptions)).json()

  let response = {}

  if (data.token) {
    response['user'] = username
    response['token'] = data.token
  } else {
    response = data
  }

  localStorage.setItem('user', JSON.stringify(response))

  return response
}
