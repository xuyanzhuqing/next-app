export default function Index() {
  console.info('NEXT_PUBLIC_ 开头的可以在页面访问', process.env.NEXT_PUBLIC_BASE_URL)
  console.info('ENV_ 开头的页面不能访问', process.env.ENV_VARIABLE)
  return (
    <div>
      <a href="https://github.com/vercel/next.js/tree/canary/examples/environment-variables">
        https://github.com/vercel/next.js/tree/canary/examples/environment-variables
      </a>
      <p>
        NEXT_PUBLIC_ 开头的可以在页面访问 {process.env.NEXT_PUBLIC_BASE_URL} <br />
        ENV_ 开头的页面不能直接访问 process.env.ENV_VARIABLE 通过 getStaticProps 间接访问也不行
      </p>
    </div>
  )
}

export const getStaticProps = async () => {
  // ENV_ 可在服务端直接访问
  console.info('*'.repeat(10), 'only in server', process.env.ENV_VARIABLE, '*'.repeat(10))

  return {
    props: {
      // ENV_VARIABLE: process.env.ENV_VARIABLE || ''
    }
  }
}
