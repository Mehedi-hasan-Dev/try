// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const pageVariants = {
  initial: {
    x: '100vw',  // Start from off-screen (right side)
    opacity: 0,
  },
  in: {
    x: 0,        // Move to the center of the screen
    opacity: 1,
  },
  out: {
    x: '-100vw', // Exit towards the left
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              className="h-full w-full flex items-center justify-center bg-blue-100"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              className="h-full w-full flex items-center justify-center bg-green-100"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <AboutPage />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              className="h-full w-full flex items-center justify-center bg-red-100"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 text-white py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="hover:text-yellow-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Animated Routes */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
