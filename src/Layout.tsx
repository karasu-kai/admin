import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="grain" aria-hidden />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
