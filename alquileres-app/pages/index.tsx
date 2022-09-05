import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alquilar .COM</title>
        <meta name="description" content="Venta y alquileres de inmuebles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    </>
  )
}

export default Home
