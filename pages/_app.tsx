import 'bootstrap/dist/css/bootstrap.css'
import '../styles/reset.css' // 作用全局，仅需引入一次
import { useEffect } from 'react'
import Layout from '../components/layout'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  const oldLayout = Component.getLayout

  const getLayout = oldLayout || ((page) => page)

  if (oldLayout) {
    return getLayout(<Component {...pageProps} />)
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
