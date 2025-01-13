import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useWebcam } from '../hooks/useWebcam';

export function Navbar() {
  const { startWebcam, status } = useWebcam();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full bg-black/80 backdrop-blur-md border-b border-emerald-900/30 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Camera className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold text-white">Visage</span>
          </div>
          
          <button
            onClick={startWebcam}
            disabled={status.isLoading || status.isActive}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}