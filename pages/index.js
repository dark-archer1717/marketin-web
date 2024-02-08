import Head from 'next/head'
import Nav from '../components/nav'
import Feature from '../components/feature'
import Comprice from '../components/pricing/comprce'
import Footer from '../components/footer'
import Panel from '../components/panel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <Nav />
      <Panel />
      <Feature />
      <Comprice />

      <Footer />
    </>
  )
}
