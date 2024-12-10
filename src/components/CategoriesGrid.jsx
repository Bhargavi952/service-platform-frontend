import React from "react";

const categories = [
  { name: "AC Technicians", icon: "🛠️" },
  { name: "Electricians", icon: "💡" },
  { name: "Plumbers", icon: "🚰" },
  { name: "Mechanics", icon: "🔧" },
  { name: "Carpenters", icon: "🪚" },
  { name: "Cleaning", icon: "🧹" },
  { name: "Pest Control", icon: "🐜" },
  { name: "Home Appliances", icon: "📺" },
];

const CategoriesGrid = ({ onOpenModal, setSelectedService }) => {
  const handleCategoryClick = (category) => {
    setSelectedService(category.name); // Set the selected service for the modal
    onOpenModal(); // Open the modal
  };
  return (
    <div className="bg-gray-100 py-12 px-8">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div onClick={() => handleCategoryClick(category)} key={index}>
            <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-lg cursor-pointer">
              <div className="text-4xl mb-4">{category.icon}</div>
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
