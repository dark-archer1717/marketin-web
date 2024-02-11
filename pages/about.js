import React from 'react'
import Bout from '../components/bout'
import Nav from '../components/nav'
import Footer from '../components/footer';
import Section from '../components/section';
import Testimonials from '../components/Testimonials';
import { Container } from '../components/Container';
import Head from 'next/head'

const About = () => {

  return (
    <>
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo2.webp" />
      </Head>
      <Nav />
      <Container >
        <Section />
        <Testimonials />
        <Bout />
      </Container>
      <Footer />
    </>
  );
};

export default About

