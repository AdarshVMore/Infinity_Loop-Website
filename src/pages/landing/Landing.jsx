import React from "react";
import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import Works from "../../components/works/Works";
import Footer from "../../components/footer/Footer";

function Landing() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <Works />
      <Footer />
    </div>
  );
}

export default Landing;
