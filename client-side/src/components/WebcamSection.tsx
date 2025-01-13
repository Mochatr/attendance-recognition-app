import { motion, AnimatePresence } from 'framer-motion';
import Webcam from 'react-webcam';
import { Camera, AlertCircle, Loader } from 'lucide-react';
import { useWebcam } from '../hooks/useWebcam';

export function WebcamSection() {
  const {
    status,
    webcamRef,
    startWebcam,
    handleUserMedia,
    handleUserMediaError
  } = useWebcam();

  return (
    <div className="min-h-[400px] bg-black/50 rounded-xl p-8 relative overflow-hidden border border-emerald-900/30">
      <AnimatePresence mode="wait">
        {!status.isActive && !status.error && !status.isLoading && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-6"
          >
            <Camera className="w-16 h-16 text-emerald-400 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Ready to Begin?</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Click below to activate your camera and start the facial recognition process.
            </p>
            <button
              onClick={startWebcam}
              className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <Camera className="w-5 h-5 mr-2" />
              Activate Camera
            </button>
          </motion.div>
        )}

        {status.isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-4"
          >
            <Loader className="w-12 h-12 mx-auto text-emerald-400 animate-spin" />
            <p className="text-emerald-400">Initializing camera...</p>
          </motion.div>
        )}

        {status.error && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-4"
          >
            <AlertCircle className="w-12 h-12 mx-auto text-red-400" />
            <p className="text-red-400">{status.error}</p>
            <button
              onClick={startWebcam}
              className="text-emerald-400 hover:text-emerald-300"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {status.isActive && (
          <motion.div
            key="webcam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <Webcam
              ref={webcamRef}
              onUserMedia={handleUserMedia}
              onUserMediaError={handleUserMediaError}
              className="rounded-lg mx-auto border-2 border-emerald-900/30"
              videoConstraints={{
                width: 640,
                height: 480,
                facingMode: "user"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}