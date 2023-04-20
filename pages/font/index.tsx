import Head from 'next/head'
import { inter, roboto } from './config'

export default function FontDemo() {
  return (
    <>
      <Head>
        <title>font</title>
        <link rel="stylesheet" href="/iconfont/iconfont.css" type="text/css"></link>
      </Head>
      <p className={inter.className}>Inter font</p>
      <p className={roboto.className}>
        <span>roboto font</span>
        <br />
        <span style={{ fontStyle: 'normal' }}> roboto font</span>
        <br />
        <span style={{ fontStyle: 'italic' }}> roboto font</span>
        <br />
      </p>
      <p>
        <i className="iconfont icon-tianranqi"></i>
      </p>
    </>
  )
}
