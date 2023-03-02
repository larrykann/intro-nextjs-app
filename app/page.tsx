import styles from '../styles/home.module.css'
import Link from 'next/link'

export default async function Home() {
  return <div className={styles.home}>
    <div>
      <div>
        <h1>My name is Larry Kann</h1>
      </div>
      <div>
        <Link href="/blog">Checkout my Blog</Link>
      </div>
      <div>
      <Link href="/contact">Contact Me</Link>
      </div>
    </div>
  </div>
}
