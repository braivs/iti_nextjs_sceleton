import { HeadMeta } from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'

function Home() {
  return (
    <>
      <HeadMeta title={'Create Next App'} />
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div>
          <a
            href={
              'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            }
            rel={'noopener noreferrer'}
            target={'_blank'}
          >
            By{' '}
            <Image
              alt={'Vercel Logo'}
              className={styles.vercelLogo}
              height={24}
              priority
              src={'/vercel.svg'}
              width={100}
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          alt={'Next.js Logo'}
          className={styles.logo}
          height={37}
          priority
          src={'/next.svg'}
          width={180}
        />
      </div>

      <div className={styles.grid}>
        <a
          className={styles.card}
          href={
            'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          }
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and&nbsp;API.</p>
        </a>

        <a
          className={styles.card}
          href={
            'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          }
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          className={styles.card}
          href={
            'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          }
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
        </a>

        <a
          className={styles.card}
          href={
            'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          }
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
        </a>
      </div>
    </>
  )
}

Home.getLayout = getLayout
export default Home
