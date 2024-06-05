// Importerer nødvendige moduler og aktiver
import React from 'react';
import Side1 from '../assets/side1.jpg';
import Side2 from '../assets/side2.jpg';
import Side3 from '../assets/side3.jpg';
import Side4 from '../assets/side4.jpg';
import Side5 from '../assets/side6.jpg';
import Resp1 from '../assets/resp1.png';
import Resp2 from '../assets/resp2.png';
import Resp3 from '../assets/resp3.png';
import Resp4 from '../assets/resp4.png';
import Resp5 from '../assets/resp5.png';
import Resp6 from '../assets/resp6.png';
import Resp7 from '../assets/resp7.png';
import Resp8 from '../assets/resp8.png';
import Baileys from '/src/assets/Baileys_logo.png';
import { Link } from 'react-router-dom';

// Definerer komponenten RecipePage
export default function RecipePage() {
  // Arrays til billeder af opskrifter
  const images = [
    Side1,
    Side2,
    Side3,
    Side4,
    Side5,
  ];

  const responsiveImages = [
    Resp1,
    Resp2,
    Resp3,
    Resp4,
    Resp5,
    Resp6,
    Resp7,
    Resp8,
  ];

  return (
    <div className="relative">
      {/* Hovedbanner sektion med Baileys logo og titlen "Opskrifter" */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center">
        <img src={Side1} alt="Recipe 1" className="object-cover h-full w-full" />
        <div className="absolute top-0 text-white text-center w-full">
          <Link to="/home" className="logo-link">
            <img className='img sm:w-1/4 w-2/3 h-auto mx-auto' src={Baileys} alt='Baileys logo'/>
          </Link>
          <div className="text-7xl sm:text-9xl font-sans tracking-wider">Opskrifter</div>
        </div>
      </div>

      {/* Sektion for desktop version af opskriftsbilleder */}
      {images.slice(1).map((image, index) => (
        <div key={index} className="hidden sm:flex h-screen w-full flex justify-center items-center">
          <img src={image} alt={`Recipe ${index + 2}`} className="object-cover h-full w-full" />
        </div>
      ))}

      {/* Sektion for mobil version af opskriftsbilleder */}
      {responsiveImages.map((image, index) => (
        <div key={index} className="sm:hidden h-screen w-full flex justify-center items-center">
          <img src={image} alt={`Responsive Recipe ${index + 1}`} className="object-cover h-full w-full" />
        </div>
      ))}
    </div>
  );
}
