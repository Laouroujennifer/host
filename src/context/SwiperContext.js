import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const SwiperSlideContext = createContext(null);

// Hook personnalisé pour accéder au contexte
const useSwiperSlide = () => {
  return useContext(SwiperSlideContext);
};

// Fournisseur du contexte
const SwiperSlideProvider = ({ children }) => {
  const [slide, setSlide] = useState('Slide 1'); // Définir la valeur du contexte

  return (
    <SwiperSlideContext.Provider value={{ slide, setSlide }}>
      {children}
    </SwiperSlideContext.Provider>
  );
};

export { SwiperSlideProvider, useSwiperSlide };
