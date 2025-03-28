
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import SecurityFeatures from '@/components/home/SecurityFeatures';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <AppLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <SecurityFeatures />
      <CallToAction />
    </AppLayout>
  );
};

export default Index;
