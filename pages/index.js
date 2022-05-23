import HomePage from '../components/Home/HomePage'
import styles from '../styles/Home/Home.module.css'
import Head from "next/head"
import { useDispatch,useSelector } from 'react-redux'
import { increment, decrement } from '../actions/index'
export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.incDev);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePage/>
      <div className={styles.counterDiv}>
        <button onClick={() => dispatch(increment())}>+</button>
        <input type="text" value={state}/>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}
