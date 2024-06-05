// Importerer nødvendige moduler og aktiver
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';

import Footer from './components/Footer';
import Header from './components/Header';
import UserModal from './pages/UserModal';


// Varianter for sideanimationer ved hjælp af framer-motion
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Komponent til håndtering af animeret routing
const AnimatedRoutes = () => {
  const location = useLocation(); // Hook til at få den aktuelle placering

  return (
    <AnimatePresence> {/* Muliggør exit-animationer, når komponenter fjernes fra træet */}
      <Routes location={location} key={location.pathname}> {/* Routes-komponent med location og unik nøgle til animation */}
        <Route
          path='/user'
          element={
            <motion.div
              variants={pageVariants} // Anvend animation varianter
              initial="initial"
              animate="animate"
              exit="exit"
              className="user-modal"
            >
              <UserModal /> {/* User modal komponent */}
            </motion.div>
          }
        />
        <Route
          path='/'
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <UserModal /> {/* Home page komponent */}
            </motion.div>
          }
        />
        <Route
          path='/home'
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="HomePage-background"
            >
              <HomePage /> {/* Home page komponent med background class */}
            </motion.div>
          }
        />
        <Route
          path='/about'
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="about-page"
            >
              <AboutPage /> {/* About page komponent */}
            </motion.div>
          }
        />
        <Route
          path='/recipe'
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="recipe-page"
            >
              <RecipePage /> {/* Recipe page komponent */}
            </motion.div>
          }
        />
        <Route path='/*' element={<Navigate to='/' />} /> {/* Omdiriger enhver ukendt sti til hjem */}
      </Routes>
    </AnimatePresence>
  );
};

// Hoved App komponent
const App = () => (
  <BrowserRouter> {/* Aktiver client-side routing */}
    <Header /> {/* Header komponent */}
    <AnimatedRoutes /> {/* Komponent der håndterer animeret routing */}
    <Footer /> {/* Footer komponent */}
  </BrowserRouter>
);

export default App;
