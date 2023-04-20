import Footer from './footer'
import NavBar from './nav-bar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
