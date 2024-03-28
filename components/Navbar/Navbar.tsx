import Link from 'next/link'

import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.links}>
      <Link href={'/'}>Main</Link>
      <Link href={'/signin'}>SignIn</Link>
      <Link href={'/signup'}>SignUp</Link>
      <Link href={'/profile'}>Profile</Link>
    </div>
  )
}
