"use client";
import HeroSection from "./components/HeroSection";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";
import Carousel from "./components/Carousel.jsx";

import { useState } from "react";
import InfoSection from "./components/InfoSection";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  
  return (
    <>
    <HeroSection />
    <InfoSection />
    <Carousel />
    <ProductCards toggleForm={toggleForm}/>
    {showForm && <ApplicationForm toggleForm={toggleForm} />}
    <Footer />
    </>
  );
}
