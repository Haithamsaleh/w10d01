import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../pages/components/Footer'
import Navbar from '../pages/components/Navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App | Home</title>
        <meta name="description" content="Home page for Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
         Home page
        </h1>
    </div>
  )
}

