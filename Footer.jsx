import Drink from '/src/assets/drinkiq.png'; // Importerer billedet

export default function Footer() {
  return ( 
    <footer className='fixed bottom-1 left-5 z-50 p-4'> {/* Definerer klassenavnene for footer-elementet. */} 
      <div className='flex space-x-4'> 
        <a href="https://www.drinkiq.com/da-dk"><img className='img w-16 cursor-pointer' src={Drink} alt='Drink iQ logo'/></a> {/* Billedet linker til drinkiq.com. */} 
        <a href="https://www.baileys.com/da-dk/" target="_blank" rel="noopener noreferrer"> {/* Oppretter et link til baileys.com som åpnes i ny fane.*/} 
          <p className="text-white font-body text-sm hover:text-link cursor-pointer">www.baileys.com</p> {/* Viser teksten 'www.baileys.com' med klassenavn for styling.*/} 
        </a>
      </div>
    </footer>
  );
}
