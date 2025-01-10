"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCards from "./components/ProductCards";
import ProductDescription from "./components/ProductDescription";
import Footer from "./components/Footer";
import ApplicationForm from "./components/ApplicationForm";

import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  
  return (
    <>
    <Header toggleForm={toggleForm}/>
    <HeroSection />
    <ProductDescription />
    <ProductCards toggleForm={toggleForm}/>
    {showForm && <ApplicationForm toggleForm={toggleForm} />}
    <Footer />
    </>
  );
}
