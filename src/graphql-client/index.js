import { uri } from 'src/config'

export const query = q => fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query: q })
  })
  .then(r => r.json())
  .then(({ data }) => data)
