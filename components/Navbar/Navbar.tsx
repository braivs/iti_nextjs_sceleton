import Link from 'next/link'

import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={s.links}>
      <Link href={'/signin'}>SignIn</Link>
      <Link href={'/signup'}>SignUp</Link>
      <Link href={'/'}>Home</Link>
      <Link href={'/create'}>Create</Link>
      <Link href={'/profile'}>My Profile</Link>
      <Link href={'/messenger'}>Messenger</Link>
      <Link href={'/search'}>Search</Link>
      <Link href={'/statistics'}>Statistics</Link>
      <Link href={'/favorites'}>Favorites</Link>
      <Link href={'/logout'}>Log Out</Link>
    </div>
  )
}
