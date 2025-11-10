'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import HowWeWork from './components/HowWeWork';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import FloatingContactButton from './components/FloatingContactButton';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <WhyChooseUs onOpenModal={openModal} />
      <Services onOpenModal={openModal} />
      <About />
      <Pricing onOpenModal={openModal} />
      <HowWeWork />
      <Reviews />
      <FAQ />
      <Contacts onOpenModal={openModal} />
      <Footer />
      
      <FloatingContactButton />
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>
    </div>
  );
}
