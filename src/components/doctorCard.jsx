import { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Robert Henry",
    specialty: "Cardiologue",
    image: "/image/médecin.png",
  },
  {
    name: "Dr. Sarah Edwards",
    specialty: "Pédiatre",
    image: "/image/infimiére_prev_ui.png",
  },
  {
    name: "Dr. Michelle Kim",
    specialty: "Dermatologue",
    image: "/image/infimiére 2.png",
  },
  {
    name: "Dr. Stephen Rogers",
    specialty: "Neurologue",
    image: "/image/docteur.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === doctors.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container max-w-5xl mx-auto py-12 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Rencontrez un docteur
        </h1>
        <p className="text-center text-sm text-gray-500 font-extralight mb-12">
          Des médecins bien qualifiés sont prêts à vous <br /> servir.
        </p>
      </div>

      {/* Carrousel */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Image actuelle */}
        <div className="p-4 bg-white shadow-md rounded-lg text-center">
          <Image
            src={doctors[currentIndex].image}
            alt={doctors[currentIndex].name}
            width={300}
            height={300}
            className="rounded-lg mx-auto"
          />
          <h3 className="font-medium mt-4">{doctors[currentIndex].name}</h3>
          <p className="text-sm text-gray-500">{doctors[currentIndex].specialty}</p>
        </div>

        {/* Boutons de navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
          aria-label="Previous"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
          aria-label="Next"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
