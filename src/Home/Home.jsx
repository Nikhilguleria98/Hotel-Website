import React from 'react';

import Services from './Services';
import FavRooms from './FavRooms';
import Hero from './Hero';
import OurServices from './OurServices';

const Home = () => {
  return (
    <main className="mt-16">
      <Hero/>
  <OurServices/>
      <Services />
      <FavRooms />
    </main>
  );
};

export default Home;
