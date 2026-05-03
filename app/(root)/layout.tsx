import { Header } from '@/components/layouts/header'
import FooterStandard from '@/components/layouts/main-footer'
import { PropsLayout } from '@/types'

const Layout = ({children}: PropsLayout) => {
  return (
    <>
    <Header/>
    {children}
    <FooterStandard/>
    </>
  )
}

export default Layout