// Importerer React, Baileys logo, ImageCarousel komponenten og Link fra 'react-router-dom'
import React from 'react';
import Baileys from '/src/assets/Baileys_logo.png';
import ImageCarousel from '../components/ImageCarousel';
import { Link } from 'react-router-dom';

// Komponenten AboutPage
export default function AboutPage() {
  return (

    <div className="sm:flex flex-col items-center">

      {/*--- Baileys logo ---*/}
      <div className="sm:mb-10 flex justify-center">

        {/*--- Link til hjem ---*/}
        <Link to="/home" className="logo-link">
          
          {/*--- Baileys logo billede ---*/}
          <img className='img sm:w-1/4 w-2/3 h-auto mx-auto' 
          src={Baileys} alt='Baileys logo'/>
        </Link>
      </div>

      <div className="sm:flex justify-center w-full">

        {/*--- Tekst sektion ---*/}
        <section className="flex sm:w-1/2 sm:pr-36 pr-7 pl-7 
        sm:pl-0 sm:pb-0 pb-10 flex-col">

          {/*--- Overskrift ---*/}
          <h1 className="sm:text-5xl text-3xl tracking-wider 
          font-sans mb-4 text-white">
            Fra verdens første flødelikør 
            <br></br> til hele verdens foretrukne spiritus.
          </h1>

          {/*--- Brødtekst ---*/}
          <p className="sm:text-xl sm:leading-8 tracking-wide 
          font-body text-white">
            Det hele begyndte med en idé så skør, at det næsten 
            virkede magisk: at kombinere den fyldige smag af irsk 
            fløde og den karakteristiske sødme af irsk whiskey. 
            Efter to års intense eksperimenter opstod 
            endelig den legendariske Baileys-opskrift i 1974.
            <br></br><br></br>
            Baileys er ikke bare en drink - det er et symbol på 
            irsk kultur og håndværk. Vores whiskey har dybe rødder 
            i Irlands historie, og når den kombineres med fløde, 
            chokolade og vanilje, skaber den uimodståelig smagsoplevelse.
            <br></br>
            Fra vores hjerte til din kop, er Baileys mere end bare en 
            spiritus - det er en tradition, en luksus, og en uundværlig 
            del af enhver festlig lejlighed.
          </p>
          <br></br>
          <p className='font-body sm:tracking-wide text-white 
          text-lg sm:text-xl'>
            Læs mere på: 
            <a href="https://www.baileys.com" target="_blank" 
            rel="noopener noreferrer" 
               className="text-pink font-sans cursor-pointer 
               text-3xl hover:text-link">
              www.baileys.com
            </a>
          </p>
        </section>

        {/*--- Image carousel div ---*/}
        <div className="absolute hidden top-2/4 right-0 transform -translate-y-1/2 w-1/3 h-full sm:flex flex-col items-center" style={{ background: 'linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))' }}></div>

        <div className="flex sm:w-1/3 h-full sm:flex-col justify-center items-center">
          {/*--- Billedkarusel ---*/}
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
}
