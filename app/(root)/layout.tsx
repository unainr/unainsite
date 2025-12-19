import MainHeader from '@/components/layouts/header'
import { PropsLayout } from '@/types'

const Layout = ({children}: PropsLayout) => {
  return (
    <>
    <MainHeader/>
    {children}
    </>
  )
}

export default Layout