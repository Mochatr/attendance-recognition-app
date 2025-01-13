import { motion } from 'framer-motion';
import { ErrorBoundary } from './components/ErrorBoundary';
import { WebcamSection } from './components/WebcamSection';
import { Navbar } from './components/Navbar';

function ErrorFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
        <p className="text-gray-400 mb-4">We're sorry, but there was an error loading this page.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="text-emerald-400 hover:text-emerald-300"
        >
          Try reloading
        </button>
      </div>
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Face Recognition
              <span className="block text-emerald-400">Attendance System</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Streamline your attendance process with advanced facial recognition technology.
              Secure, fast, and contactless.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <WebcamSection />
          </motion.div>
        </motion.section>
      </div>
    </ErrorBoundary>
  );
}