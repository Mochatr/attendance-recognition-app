import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaceDetectIcon } from './FaceDetectIcon';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToWebcam = () => {
    const webcamSection = document.getElementById('webcam-section');
    if (webcamSection) {
      webcamSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="fixed w-full nav-blur z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <FaceDetectIcon />
            <span className="ml-2 text-xl font-bold gradient-text">Visage</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-gray-400 hover:text-gray-100 transition-colors">Demo</a>
            <button 
              onClick={scrollToWebcam}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all"
            >
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-400 hover:text-gray-100" />
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900 border-b border-gray-800">
            <a href="#demo" className="block px-3 py-2 text-gray-400 hover:text-gray-100">Demo</a>
            <button 
              onClick={scrollToWebcam}
              className="w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}