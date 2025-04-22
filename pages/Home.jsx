import React from 'react';
import HeroSection from '/modules/herosection';
import LandingInfoSection from '/modules/LandingInfoSection'
import ScrollDownArrow from '/modules/ScrollDownArrow'

function Home() {
  return (
    <>
    <HeroSection />
    <ScrollDownArrow />
    <LandingInfoSection />
    </>
  );
}

export default Home;
