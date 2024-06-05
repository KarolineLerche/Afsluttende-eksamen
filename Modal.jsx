// Importerer React og useState fra 'react' biblioteket
import React, { useState } from 'react';

// Komponenten Modal, der viser en modal popup
const Modal = ({ message, isWinner, onClose }) => {
  
  // Deklarerer en state variabel 'email' og en funktion 'setEmail' til at ændre den
  const [email, setEmail] = useState('');

  // Funktion til at håndtere ændringer i email inputfeltet
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Funktion til at gemme email i localStorage og lukke modalen
  const handleSaveEmail = () => {
    localStorage.setItem('winnerEmail', email);
    onClose();
  };

  // Returnerer modalen
  return (
    <div className={`fixed inset-0 bg-opacity-80 flex justify-center items-center z-50 ${isWinner ? 'bg-magenta bg-opacity-10' : 'bg-black bg-opacity-10'}`} onClick={onClose}>
      {/* Modal indhold */}
      <div
        className={`relative px-10 py-7 rounded-xl text-center ${isWinner ? 'bg-magenta bg-opacity-10' : 'bg-black bg-opacity-10'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luk knap */}
        <button className="absolute top-2 right-4 text-white text-2xl hover:text-gold" onClick={onClose}>
          &times;
        </button>
        {/* Besked */}
        <p className="text-white font-body text-xl ">{message}</p>
        {/* Email input og bekræft knap, kun synlig hvis 'isWinner' er sand */}
        {isWinner && (
          <div className="mt-6 flex flex-col items-center">
            <input
              type="email"
              placeholder="Indtast din email her:"
              value={email}
              onChange={handleEmailChange}
              className="px-3 py-2 rounded-lg w-1/2"
            />
            <button
              onClick={handleSaveEmail}
              className="mt-4 bg-gold font-body text-white py-1 px-8 rounded-lg"
            >
              Bekræft
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Eksporterer Modal komponenten som standard
export default Modal;
