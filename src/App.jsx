import React from 'react';
import Hero from "./components/Hero";
import PromotedListings from "./components/PromotedListings";
import AuctionsEnding from "./components/AuctionsEnding";
import RecentlySold from "./components/RecentlySold";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Header from './components/Header';

export default function App() {
  return (
    <div className="font-sans">
      <Header/>
      <Hero />
      <PromotedListings />
      <AuctionsEnding />
      <RecentlySold />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
