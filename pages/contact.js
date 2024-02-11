import Nav from '../components/nav'
import Info from '../components/info'
import Footer from '../components/footer'
import Cartoon from '../components/cartoon'
import { Container } from '../components/Container'
import Head from 'next/head'

const Contact = () => {

  return (
    <>
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo2.webp" />
      </Head>
      <Nav />
      <Container>
        <Info />
        <Cartoon />
      </Container>
      <Footer />
    </>
  )
}

export default Contact
