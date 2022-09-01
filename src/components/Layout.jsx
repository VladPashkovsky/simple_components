import { Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/counter'>Counter</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </div>
    </>
  )
}

export { Layout }