// Importerer React, useState og useRef fra 'react' biblioteket samt Slider fra 'react-slick'
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

// Importerer CSS-styling for Slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importerer produktbillederne
import Product1 from '/src/assets/product1.png';
import Product2 from '/src/assets/product4.png';
import Product3 from '/src/assets/product3.png';
import Product4 from '/src/assets/product2.png';

// Importerer brugerdefinerede pilebilleder
import ArrowLeft from '/src/assets/arrow-left.png';
import ArrowRight from '/src/assets/arrow-right.png';

// Definerer et array af produktbilleder med tilhørende navne og links
const products = [
  { image: Product1, name: 'Tiramisu', link: 'https://www.baileys.com/da-dk/produkter/baileys-tiramisu/' },
  { image: Product2, name: 'Birthday Cake', link: 'https://www.baileys.com/da-dk/produkter/baileys-birthday-cake/' },
  { image: Product3, name: 'Chocolat Luxe', link: 'https://www.baileys.com/da-dk/produkter/baileys-chocolat-luxe/' },
  { image: Product4, name: 'Original Irish', link: 'https://www.baileys.com/da-dk/produkter/baileys-original-irish-cream/ ' },
];

// Komponent til den venstre pileknap i Slider
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute sm:left-5 left-7 transform -translate-y-1/2 z-10 cursor-pointer" style={{ top: '50%', marginLeft: '-50px' }} onClick={onClick}>
      <img src={ArrowLeft} alt="Previous" className="w-8 h-8" />
    </div>
  );
};

// Komponent til den højre pileknap i Slider
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute sm:right-5 right-7 transform -translate-y-1/2 z-10 cursor-pointer" style={{ top: '50%', marginRight: '-50px' }} onClick={onClick}>
      <img src={ArrowRight} alt="Next" className="w-8 h-8" />
    </div>
  );
};

// Hovedkomponenten for billedkarusellen
const ImageCarousel = () => {
  // Deklarerer state variabler for aktivt billede og en reference til Slider
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

 // Indstillinger for Slider
const settings = {
  dots: true, // Viser prikker for at angive det aktive slide
  infinite: true, // Muliggør uendelig rulning af slideren
  speed: 500, // Hastigheden for animation af slideren (i millisekunder)
  slidesToShow: 3,// Antal slides, der vises ad gangen
  slidesToScroll: 1,// Antal slides, der rulles ad gangen
  centerMode: false, // Aktiverer midterjustering af slides
  beforeChange: (_, next) => setActiveIndex(next), // Funktion, der køres før slide skiftes
  nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />,// Pileknap til at gå til næste slide
  prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />,// Pileknap til at gå til forrige slide
  responsive: [ // Responsive indstillinger baseret på skærmstørrelse
    {
      breakpoint: 1024,// Indstillinger for skærmbredde større end eller lig med 1024px
      settings: {
        slidesToShow: 3,// Antal slides, der vises ved denne skærmstørrelse
      }
    },
    {
      breakpoint: 768, // Indstillinger for skærmbredde større end eller lig med 768px
      settings: {   
        slidesToShow: 3,// Antal slides, der vises ved denne skærmstørrelse
      }
    }
  ]
};


  // Funktion til at kontrollere om et billede er midterbilledet
  const isMiddleSlide = (index) => {
    const numVisibleSlides = settings.slidesToShow;
    const middlePosition = Math.floor((numVisibleSlides - 1) / 2);
    const adjustedActiveIndex = activeIndex % products.length;
    const middleIndex = (adjustedActiveIndex + middlePosition) % products.length;
    return index === middleIndex;
  };

  // Returnerer billedkarusellen
  return (
    <div className="relative max-w-4xl mb-20 sm:mb-0 mx-auto">
      {/* Viser den venstre pileknap */}
      <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
      <div className="max-w-md mx-auto relative overflow-visible">
        {/* Viser en besked over karusellen */}
        <div className="absolute top-0 left-0 w-full flex justify-center items-center">
          <p className='font-body text-white text-center tracking-wider'>
            Køb din yndlings variant i dit lokale supermarked.
          </p>
        </div>

        {/* Slider komponenten */}
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => {
            const isMiddle = isMiddleSlide(index);

            return (
              <div key={index} className="text-center mt-16 relative">
                {/* Viser billedet */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`mx-auto ${isMiddle ? 'max-h-96' : 'max-h-80'} mb-4`} // Justerer størrelsen baseret på placeringen
                />
                {/* Viser navn og link hvis billede er midterbilledet */}
                {isMiddle ? (
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="sm:block sm:w-auto sm:mx-auto">
                    <p className="text-white sm:mt-8 sm:py-2 px-2 font-body cursor-pointer rounded-xl bg-pink hover:text-link">
                      {product.name}
                    </p>
                  </a>
                ) : null}
              </div>
            );
          })}
        </Slider>
      </div>
      
      {/* Viser den højre pileknap */}
      <NextArrow onClick={() => sliderRef.current.slickNext()} />

      {/* Styler pileknapperne */}
      <style>
        {`
          .slick-prev, .slick-next {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default ImageCarousel;
