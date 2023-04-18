// Generates `/user/1` and `/user/2`
import { useRouter } from 'next/router'

const fetcher = (query: string): Promise<Data> =>
  fetch('http://localhost:3000/api/graphql', {
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
    age: number
  }[]
}

// 再打包的时候构建路由
export async function getStaticPaths() {
  const res = await fetcher('{ users { name age } }')
  const paths = res.users.map(user => ({
    params: { name: user.name }
  }))
  return {
    paths,
    fallback: false, //若为真，则不存在此处定义的路由也可访问，否则 404
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { name } }: { params: { name: string } }) {
  const res = await fetcher('{ users { name age } }')
  const user = res.users.find(user => user.name === name)
  const age = user?.age
  return {
    // Passed to the page component as props
    props: { name, age },
  }
}

export default function ({ name, age }: { name: string, age: number }) {
  return (
    <>
    <p>
      dynamic root
    </p>
    <div>{name}-{age}</div>
    </>
  )
}