import { motion } from 'framer-motion';

export function FaceDetectIcon({ className = "w-8 h-8" }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Face silhouette */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-full opacity-90" />
        
        {/* Corner brackets */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Top-left bracket */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 20 20 L 20 35 M 20 20 L 35 20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-emerald-400"
          />
          {/* Top-right bracket */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 80 20 L 80 35 M 80 20 L 65 20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-emerald-400"
          />
          {/* Bottom-left bracket */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 20 80 L 20 65 M 20 80 L 35 80"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-emerald-400"
          />
          {/* Bottom-right bracket */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 80 80 L 80 65 M 80 80 L 65 80"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-emerald-400"
          />
        </svg>
      </motion.div>
    </div>
  );
}