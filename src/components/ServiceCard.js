"use client"; // Ajoute cette ligne au début du fichier

import React, { useState } from "react";

export default function ServiceCard({ icon, title }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0} // Permet la navigation au clavier
      onKeyDown={(e) => e.key === "Enter" && handleClick()} // Active avec "Entrée"
      className={`w-48 h-48 flex flex-col items-center justify-center p-4 rounded-2xl shadow-md transition duration-300 transform cursor-pointer ${
        isActive
          ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-400 scale-105"
          : "bg-white border-gray-300 text-gray-800 hover:bg-blue-500 hover:border-blue-500 hover:scale-105 hover:text-white"
      } focus:outline-none focus:ring-4 focus:ring-blue-300`}
    >
      <div className="text-4xl text-yellow-400 mb-4 hover:text-white">{icon}</div> {/* Icône jaune par défaut, blanche au survol */}
      <h3 className="text-lg font-bold text-gray-800 hover:text-white">{title}</h3> {/* Texte noir par défaut, blanc au survol */}
    </div>
  );
}
