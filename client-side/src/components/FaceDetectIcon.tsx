import { motion } from 'framer-motion';

export function FaceDetectIcon({ className = "w-8 h-8" }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Face detection frame */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Gradient background */}
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Face silhouette */}
          <path
            d="M50 75C63.8071 75 75 63.8071 75 50C75 36.1929 63.8071 25 50 25C36.1929 25 25 36.1929 25 50C25 63.8071 36.1929 75 50 75Z"
            fill="url(#iconGradient)"
            opacity="0.2"
          />
          
          {/* Corner brackets with animation */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 20 20 L 20 35 M 20 20 L 35 20"
            stroke="url(#iconGradient)"
            strokeWidth="4"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 80 20 L 80 35 M 80 20 L 65 20"
            stroke="url(#iconGradient)"
            strokeWidth="4"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 20 80 L 20 65 M 20 80 L 35 80"
            stroke="url(#iconGradient)"
            strokeWidth="4"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 80 80 L 80 65 M 80 80 L 65 80"
            stroke="url(#iconGradient)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}