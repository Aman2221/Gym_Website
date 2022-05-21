import LoginPage from '../components/Login/LoginPage'
import Head from "next/head"

const login = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <LoginPage />
    </>
  )
}

export default login