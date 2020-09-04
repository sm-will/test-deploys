import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Sample App</h1>
      <ul>
        <li>
          <Link href="/bots">Go to a hardcoded page</Link>
        </li>
        <li>
          <Link href="/some-path">Go to a dynamic page (/some-path)</Link>
        </li>
        <li>
          <Link href="/some-directory/some-path">
            Go to a catch-all page (/some-directory/some-path)
          </Link>
        </li>
        <li>
          <Link href="/api/hello">Go to a serverless api endpoint</Link>
        </li>
      </ul>
    </div>
  )
}
