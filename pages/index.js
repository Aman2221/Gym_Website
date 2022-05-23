import HomePage from '../components/Home/HomePage'
import styles from '../styles/Home/Home.module.css'
import Head from "next/head"
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement } from '../Redux/actions/index'

export default function Home() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.changeNumber);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePage/>
      <div className={styles.counterDiv}>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <input type="text" value={state}/>
        <button onClick={() => dispatch(decrement(4))}>-</button>
      </div>
    </div>
  )
}
