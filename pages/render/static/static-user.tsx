import useSWR from 'swr'

// 静态生成 static generation

const fetcher = (query: string): Promise<Data> =>
  fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ query })
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  users: {
    name: string
  }[]
}

export default function StaticRender({ users }: Data) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  // 必须是绝对路径，不能访问/api/graphql
  const props = await fetcher('{ users { name } }')

  return {
    props
  }
}
