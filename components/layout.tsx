import Footer from './footer'
import NavBar from './nav-bar'

export default function ({ children }) {
  return (
    <>
      <NavBar/>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}