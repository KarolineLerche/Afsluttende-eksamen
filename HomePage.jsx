// Importerer nødvendige moduler og komponenter
import React, { useState } from 'react';
import Vind from '/src/assets/Vind.png';
import Baileys from '/src/assets/Baileys_logo.png';
import DiscoWheel from '/src/assets/discoball-wheel.png';
import Confetti from 'react-confetti';
import { Wheel } from 'react-custom-roulette';
import Modal from '../components/Modal.jsx';

// Definerer komponenten HomePage
const HomePage = () => {
  // Data array til roulette hjulet
  const data = [
    { option: '', style: { backgroundColor: '#6b21a8' } },
    { option: '', style: { backgroundColor: '#a54a95' } },
    { option: '', style: { backgroundColor: '#2e1065' } },
    { option: '', style: { backgroundColor: '#6b21a8' } },
    { option: '', style: { backgroundColor: '#a54a95' } },
    { option: '', style: { backgroundColor: '#2e1065' } },
    { option: '', style: { backgroundColor: '#6b21a8' } },
    { option: '', style: { backgroundColor: '#a54a95' } },
    { option: '', style: { backgroundColor: '#bc9b6b' } } // Gyldne felt
  ];

  // State hooks til at håndtere applikationens tilstand
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  // Funktion til at håndtere spin knap klik
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setShowConfetti(false);
    }
  };

  // Funktion til at håndtere når hjulet stopper med at spinne
  const handleStopSpinning = () => {
    setMustSpin(false);
    if (prizeNumber === 8) { //Kontrollerer om den landede på præmie
      setModalMessage("Tillykke, du har vundet 2 billetter til Eurovision finalen! - Indtast din email for at blive kontaktet.");
      setShowConfetti(true);
      setIsWinner(true);
    } else {
      setModalMessage("Du har desværre ikke vundet - prøv igen i morgen.");
      setIsWinner(false);
    }
    setShowModal(true);
  };

  // Funktion til at lukke modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    // Hovedsektion for HomePage
    <section className="min-h-screen relative overflow-hidden">
      {/* Baileys logo */}
      <div className="absolute top-0 w-full flex justify-center p-4 z-20">
        <img className='w-2/3 sm:w-1/4 h-auto' src={Baileys} alt='Baileys logo' />
      </div>
    
      {/* Sektion for roulette hjulet og deltag knap */}
      <div className="absolute top-2/4 right-0 transform -translate-y-1/2 w-full sm:w-1/3 h-full flex flex-col items-center bg-gradient-to-l from-black/90 via-transparent to-transparent z-10">
        <img
          src={DiscoWheel}
          alt="Disco Wheel"
          className="absolute w-10/12 top-64 sm:top-56 z-10"
        />
        <img className='sm:pt-24 pt-44 sm:pb-4 pb-2 sm:w-64 w-44 ' src={Vind} alt='Vind 2 billetter til Eurovision' />
        
        {/* Roulette hjulet */}
        <div className="flex flex-col items-center space-y-5 sm:space-y-5">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={handleStopSpinning}
            outerBorderColor="transparent"
            outerBorderWidth={2}
            innerBorderColor="transparent"
            innerBorderWidth={5}
            radiusLineColor="white"
            radiusLineWidth={1}
            pointerProps={{
              style: { fill: '#ffffff', transform: 'rotate(51deg)' }
            }}
          />
          <button className="bg-pink bg-opacity-90 text-white font-body text-l py-2 px-14 rounded-xl tracking-wider hover:text-link" onClick={handleSpinClick}>DELTAG</button>
          <p className='font-body text-white leading-4 tracking-wider text-center text-xs'>
            Vind præmien ved at lande på det gyldne felt. <br></br>
            Del venligst ikke med personer under 18 år. <br></br>
            Alkohol bør nydes med omtanke.
          </p>
        </div>
      </div>

      {/* Confetti og Modal */}
      {showConfetti && <Confetti />}
      {showModal && <Modal message={modalMessage} isWinner={isWinner} onClose={handleCloseModal} />}
    </section>
  );
};

export default HomePage;
