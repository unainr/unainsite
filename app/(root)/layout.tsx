import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/header'
import { PropsLayout } from '@/types'

const Layout = ({children}: PropsLayout) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout