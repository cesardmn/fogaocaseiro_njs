export async function logIn(username, password) {
  const url = `http://127.0.0.1:8000/auth-token`

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
