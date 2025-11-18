import React from 'react';
import HeroSection from '/modules/herosection';
import LandingInfoSection from '/modules/LandingInfoSection'
import { Helmet } from 'react-helmet-async';
import ScrollDownArrow from '/modules/ScrollDownArrow'

function Home() {
  return (
    <>
    <Helmet>
        <title>Home | My FPV Journey</title>
        <meta name="description" content="Cinematic FPV drone footage and photography portfolio." />
      </Helmet>
    <HeroSection />
    <ScrollDownArrow />
    <LandingInfoSection />
    </>
  );
}

export default Home;
