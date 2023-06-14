import React from 'react';
import Hero from '../Hero';
import Navbar from '../Navbar';

export default function Header({data}) {
  return (
    <header className='header bg-navy'>
      <Navbar data={data}/>
      <Hero />
    </header>
  );
}


