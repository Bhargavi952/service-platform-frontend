import React from "react";
import Bookings from "../components/Bookings";
import CategoriesGrid from "../components/CategoriesGrid";
import HeroSection from "../components/HeroSection";

const Home = ({ onOpenModal, setBookings, bookings, setSelectedService }) => {
  return (
    <div>
      <HeroSection />
      <Bookings setBookings={setBookings} bookings={bookings} />
      <CategoriesGrid
        onOpenModal={onOpenModal}
        setSelectedService={setSelectedService}
      />
    </div>
  );
};

export default Home;
