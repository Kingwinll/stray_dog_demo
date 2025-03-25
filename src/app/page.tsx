import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Problems from '@/components/Problems';
import Solutions from '@/components/Solutions';
import Donate from '@/components/Donate';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Story />
      <Problems />
      <Solutions />
      <Donate />
      <Footer />
    </main>
  );
}
