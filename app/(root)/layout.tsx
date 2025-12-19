import { Footer } from '@/components/layouts/Footer'
import MainHeader from '@/components/layouts/header'
import { PropsLayout } from '@/types'

const Layout = ({children}: PropsLayout) => {
  return (
    <>
    <MainHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout