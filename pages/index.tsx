import useSWR from 'swr'
import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  users: {
    name: string
  }[]
}

 export const Index: NextPageWithLayout = () => {
  const { data, error, isLoading } = useSWR<Data>('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  const { users } = data

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  )
}

export default Index

// 自定义页面
Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <p>home page</p>
      {page}
    </>
  )
}