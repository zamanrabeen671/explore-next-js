import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Next JS | Home</title>
      <meta name="keywords" content="next js, web development" />
    </Head>
      <div>
        <h1 className={styles.title}>Welcome to Next JS</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente ea delectus mollitia quod, corporis temporibus libero nostrum dolores velit ducimus, eaque sit quasi neque eum ullam dolorum cumque nesciunt?</p>
        <br />
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sapiente ea delectus mollitia quod, corporis temporibus libero nostrum dolores velit ducimus, eaque sit quasi neque eum ullam dolorum cumque nesciunt?</p>
        <Link href="/ninja">
          <a className={styles.btn}>see ninjas</a>
        </Link>
      </div>
    </>
  )
}
