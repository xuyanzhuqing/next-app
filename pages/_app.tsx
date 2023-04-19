import 'bootstrap/dist/css/bootstrap.css'
import '../styles/reset.css' // 作用全局，仅需引入一次
import { useEffect } from "react"

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
      <Component {...pageProps} />
  )
}