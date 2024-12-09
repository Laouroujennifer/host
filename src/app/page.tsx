"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@mui/material';


import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Instagram, Star } from "lucide-react";
import ServiceCard from '../components/ServiceCard.js';
import { FaStethoscope, FaUsers, FaSyringe, FaHeart, FaMicroscope, FaPills, FaBrain, FaXRay } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between w-full max-w-[100%] px-6 py-4 mx-auto md:px-16">
        {/* Logo */}
        <Image
          src="/image/blue.svg"
          alt="Logo"
          width={50}
          height={40}
          className="h-14 w-auto"
        />

        {/* Menu Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-gray-600"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 z-40 w-full bg-white md:relative md:top-0 md:flex md:w-auto md:items-center md:gap-8`}
        >
          <a
            href="#"
            className="block px-4 py-2 text-lg font-medium text-center hover:text-blue-600 md:inline md:px-0"
          >
            Accueil
          </a>
          <a
            href="#valeurs"
            className="block px-4 py-2 text-lg font-medium text-center hover:text-blue-600 md:inline md:px-0"
          >
            Valeurs
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-lg font-medium text-center hover:text-blue-600 md:inline md:px-0"
          >
            Services
          </a>
          <a
            href="#médecins"
            className="block px-4 py-2 text-lg font-medium text-center hover:text-blue-600 md:inline md:px-0"
          >
            Médecins
          </a>
          <a
            href="#avis-des-patients"
            className="block px-4 py-2 text-lg font-medium text-center hover:text-blue-600 md:inline md:px-0"
          >
            Avis des patients
          </a>
          <a
            href="https://clinique-rd.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-center md:inline md:px-0"
          >
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 md:w-auto">
              Connexion
            </button>
          </a>
          <a
            href="https://clinique-rd.onrender.com/users/sign_up"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-center md:inline md:px-0"
          >
            <button className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 md:w-auto">
              Sinscrire
            </button>

            </a>
        </nav>
      </div>
    </header>


      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-5xl mx-auto py-0">
   <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-items-center text-center lg:text-left ">
   <div className="space-y-6 lg:space-y-6">

      <h2 className="text-[40px] font-extrabold text-gray-800 tracking-wide font-poppins mt-24">
        Nous nous soucions de votre santé.
      </h2>
      <p className="text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed tracking-wider">
        La bonne santé est un état de bien-être mental, physique et social, et cela
        ne signifie pas seulement l&apos;absence de maladies.
      </p>
      <Button
        size="lg"
        className="bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-500 hover:shadow-blue-700 focus:bg-blue-500 focus:shadow-blue-700 active:bg-blue-700 active:shadow-blue-700 transition-all duration-300 mt-24"
      >
        Prendre rendez-vous
        <ArrowRight />
      </Button>
    </div>

    <div className="flex justify-center mt-12">
      <Image
        src="image/Group 440 1.svg"
        alt="Healthcare Illustration"
        width={500}  
        height={500}
        className="rounded-lg object-contain  mt-16 sm:mt-20 lg:mt-16 w-full lg:w-auto"
        priority
      />
    </div>
  </div>
</section>

<section id="valeurs" className="py-8 sm:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-0">
  <div className="container mx-auto max-w-5xl">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
      Nos Valeurs
    </h1>
    <p className="text-xs sm:text-sm md:text-base text-center text-gray-500 font-extralight mb-12">
      Des principes forts pour guider toutes nos actions.
    </p>
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
      {/* Empathie */}
      <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl">
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <Image
              src="/image/circle2.svg"
              alt="Icône d'empathie"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
        </div>
        <h3 className="mt-4 text-sm sm:text-base md:text-lg font-bold text-left">
          Empathie
        </h3>
        <div className="w-6 md:w-8 h-0.5 bg-blue-500 mt-2 mb-4"></div>
        <p className="text-gray-800 text-xs sm:text-sm md:text-base text-left font-light">
          Être à l&apos;écoute des besoins et comprendre les attentes de santé.
        </p>
      </div>

      {/* Bienveillance */}
      <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl">
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <Image
              src="/image/circle.svg"
              alt="Icône de bienveillance"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
        </div>
        <h3 className="mt-4 text-sm sm:text-base md:text-lg font-bold text-left">
          Bienveillance
        </h3>
        <div className="w-6 md:w-8 h-0.5 bg-blue-500 mt-2 mb-4"></div>
        <p className="text-gray-800 text-xs sm:text-sm md:text-base text-left font-light">
          Accompagner gentiment et soulager au mieux ceux qui souffrent.
        </p>
      </div>

      {/* Intégrité */}
      <div className="flex flex-col p-6 bg-white shadow-md rounded-2xl">
        <div className="flex items-center">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center">
            <Image
              src="/image/circcle3.svg"
              alt="Icône d'intégrité"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
        </div>
        <h3 className="mt-4 text-sm sm:text-base md:text-lg font-bold text-left">
          Intégrité
        </h3>
        <div className="w-6 md:w-8 h-0.5 bg-blue-500 mt-2 mb-4"></div>
        <p className="text-gray-800 text-xs sm:text-sm md:text-base text-left font-light">
          Agir avec honnêteté et transparence dans toutes nos démarches.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Services Section */}
        <section id="services" className="container mx-auto px-4 py-12 max-w-5xl">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
    Nos Services Médicaux
  </h1>
  <p className="text-xs sm:text-sm md:text-base text-center text-gray-500 font-extralight mb-12">
    Nous sommes dédiés à vous offrir les meilleures<br />services médicaux
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 justify-items-center">
    <ServiceCard icon={<FaStethoscope />} title="Médecine" />
    <ServiceCard icon={<FaUsers />} title="Pédiatrie" />
    <ServiceCard icon={<FaSyringe />} title="Vaccination" />
    <ServiceCard icon={<FaHeart />} title="Cardiologie" />
    <ServiceCard icon={<FaMicroscope />} title="Test de laboratoire" />
    <ServiceCard icon={<FaPills />} title="Pharmacie" />
    <ServiceCard icon={<FaXRay />} title="Radiographie" />
    <ServiceCard icon={<FaBrain />} title="Neurologie" />
  </div>
</section>



<section id="médecins" className="container max-w-5xl mx-auto py-12 space-y-6">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-center mb-6">
      Rencontrez un docteur
    </h1>
    <p className="text-center text-sm text-gray-500 font-extralight mb-12">
      Des médecins bien qualifiés sont prêts à vous <br /> servir.
    </p>
  </div>
  <div className="grid md:grid-cols-4 gap-6 justify-items-center">
    {[
      {
        name: "Dr. Robert Henry",
        specialty: "Cardiologue",
        image: "/image/médecin.png" // Image spécifique pour Dr. Robert Henry
      },
      {
        name: "Dr. Sarah Edwards",
        specialty: "Pédiatre",
        image: "/image/infimiére_prev_ui.png" // Image spécifique pour Dr. Sarah Edwards
      },
      {
        name: "Dr. Michelle Kim",
        specialty: "Dermatologue",
        image: "/image/infimiére 2.png" // Image spécifique pour Dr. Michelle Kim
      },
      {
        name: "Dr. Stephen Rogers",
        specialty: "Neurologue",
        image: "/image/docteur.png" // Image spécifique pour Dr. Stephen Rogers
      },
    ].map((doctor, index) => (
      <Card key={index}>
        <CardContent className="p-4 text-center">
          <div className="mb-4">
            <Image
              src={doctor.image} // Utilisation de l'image spécifique pour chaque médecin
              alt={doctor.name}
              width={200}
              height={200}
              className="rounded-lg mx-auto"
            />
          </div>
          <h3 className="font-medium">{doctor.name}</h3>
          <p className="text-sm text-gray-500">{doctor.specialty}</p>
          <div className="flex justify-center mt-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-blue-600 text-blue-600"
                />
              ))}
          </div>
          <p className="text-sm text-yellow-600 mt-1">
            Excellent docteur
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>







<section id="avis-des-patients" className="container max-w-5xl mx-auto py-12 space-y-6">
  <h1 className="text-4xl font-bold text-center mb-6">Avis des patients</h1>
  <p className="text-center text-sm text-gray-500 font-extralight mb-12">
    Voyons ce que nos clients satisfaits disent.
  </p>
  <div className="grid md:grid-cols-3 gap-6 justify-items-center">
    {[
      {
        id: 1,
        name: "Biraca AGOMI",
        description: "Patient en cardiologie",
        image: "/image/médecin.png",
        testimony: "Le service était excellent, et l'équipe est très accueillante !",
      },
      {
        id: 2,
        name: "Emmanuel AKAKPO",
        description: "Patient neurologique",
        image: "/image/docteur.png",
        testimony: "J'ai adoré l'attention portée aux détails et le professionnalisme.",
      },
      {
        id: 3,
        name: "Larissa AVOHOU",
        description: "Patient en dermatologie",
        image: "/image/infimiére 2.png",
        testimony: "Une expérience agréable et des résultats bien au-delà de mes attentes.",
      },
    ].map((testimonial) => (
      <div
        key={testimonial.id}
        className="shadow-xl p-6 rounded-xl bg-white transition-shadow duration-300 hover:shadow-2xl"
      >
        <div className="flex items-start gap-4">
          {/* Image */}
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          {/* Détails */}
          <div className="flex flex-col">
            {/* Nom et description */}
            <h3 className="font-bold text-xl">{testimonial.name}</h3>
            <p className="text-sm text-gray-950 mt-2">{testimonial.description}</p>
            {/* Étoiles */}
            <div className="flex gap-x-1 mt-3">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-blue-600 text-blue-600"
                  />
                ))}
            </div>
            {/* Témoignage */}
            <p className="text-gray-950 mt-3">{testimonial.testimony}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-12 bg-blue-500 text-white rounded-lg my-12 max-w-6xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Abonnez-vous à notre newsletter !
            </h2>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre adresse e-mail"
                className="bg-white"
              />
              <Button variant="secondary">S&apos;abonner</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white">
        <div className="container max-w-5xl mx-auto py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-center md:text-left">
          <div>
          <Image
             src="image/blanc.svg"
             alt="Logo"
             width={70}
             height={60}
             className="h-24 w-auto border border-red-500"
            
            />
            <p className="text-sm ">
              La bonne est un état de bien être mental physique et social et
              cela ne signifie pas seulement l&apos;absence de maladie.
            </p>
            <div className="flex space-x-4 mt-6 ">
              <SocialIcon href="#" icon={Facebook} label="Facebook" />
              <SocialIcon
                href="#"
                icon={() => (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                label="Twitter"
              />
              <SocialIcon href="#" icon={Instagram} label="Instagram" />
            </div>
          </div>
          <div>
            <h3 className="font-medium mt-6 mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>Docteurs</li>
              <li>À propos</li>
              <li>Nos valeurs</li>
              <li>Rendez-vous</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Adresse</h3>
            <div className="h-32 bg-blue-400 rounded-lg" />
          </div>
        </div>
        <div className="border-t border-white-400 max-w-5xl mx-auto"> 


          <div className="container max-w-5xl mx-auto py-4 text-sm text-center">
            © 2024 Medical Services. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

const SocialIcon = ({ href, icon: Icon, label }: SocialIconProps) => (
  <Link href={href} aria-label={label} className="group relative">
    <Icon className="h-6 w-6 text-white group-hover:text-white transition-colors" />
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </Link>
);