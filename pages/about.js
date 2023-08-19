import React from 'react'
import Bout from '../components/bout'
import Nav from '../components/nav'
import Footer from '../components/footer';
import Section from '../components/section';
import Testimonials from '../components/Testimonials';
import { Container } from '../components/Container';

const About = () => {

  return (
    <>
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

