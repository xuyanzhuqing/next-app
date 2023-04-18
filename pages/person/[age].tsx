// Generates `/user/1` and `/user/2`

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

// `getStaticPaths` requires using `getStaticProps`
export async function getServerSideProps({ params: { age } }: { params: { age: string } }) {
  const res = await fetcher('{ users { name age } }')
  const user = res.users.find(u => u.age === parseInt(age))
  const name = user?.name
  return {
    // Passed to the page component as props
    props: { name, age },
  }
}

export default function ({ name, age }: { name: string, age: number }) {
  return (
    <>
    <p>
      ssr
    </p>
    <div>{name}-{age}</div>
    </>
  )
}