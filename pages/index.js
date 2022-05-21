import HomePage from '../components/Home/HomePage'
import styles from '../styles/Home/Home.module.css'
import Head from "next/head"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePage />
    </div>
  )
}
