import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { WebcamSection } from './components/WebcamSection';
import { Shield, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-emerald-400" />,
    title: "Real-time Tracking",
    description: "Automated attendance marking with precise timestamp recording"
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "Multi-user Support",
    description: "Handle multiple users simultaneously with high accuracy"
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Secure & Private",
    description: "Enterprise-grade security with data encryption and privacy protection"
  }
];

export function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              Face Recognition
              <span className="block gradient-text">Attendance System</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-400"
            >
              Automate your attendance system with cutting-edge facial recognition technology. 
              Fast, accurate, and completely hands-free.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <WebcamSection />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Why Choose FaceTrack?</h2>
            <p className="mt-4 text-lg text-gray-400">
              Our advanced system offers everything you need for modern attendance management
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="relative p-6 bg-zinc-800/50 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-colors"
              >
                <div className="absolute top-6 left-6">{feature.icon}</div>
                <h3 className="mt-8 text-lg font-semibold text-gray-100">{feature.title}</h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80" 
              alt="Office workspace with people"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-zinc-900/90 flex items-center">
              <div className="max-w-2xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Transform Your Workplace?</h2>
                <p className="text-lg mb-8 text-gray-300">
                  Join thousands of organizations already using FaceTrack to modernize their attendance systems.
                </p>
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}