import React from 'react'
import Nav from "../components/nav";
import Footer from "../components/footer";
import Extendedprice from '../components/pricing/extendedprice';
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Sohag Technology - High Speed Internet</title>
        <meta name="description" content="Leading ISP in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo2.webp" />
      </Head>
      <Nav />
      <Extendedprice />
      <Footer />
      <Analytics />
    </>
  );
}

export default Pricing;