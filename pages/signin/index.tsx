import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeadMeta title={'SignIn'} />
      <main className={`${styles.main} ${inter.className}`}>SignIn</main>
    </>
  )
}
