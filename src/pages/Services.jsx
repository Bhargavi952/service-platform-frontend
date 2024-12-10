import React from "react";
import CategoriesGrid from "../components/CategoriesGrid";

const Services = ({ onOpenModal, setSelectedService }) => {
  return (
    <div>
      <CategoriesGrid
        onOpenModal={onOpenModal}
        setSelectedService={setSelectedService}
      />
    </div>
  );
};

export default Services;
