import { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { motion } from 'framer-motion';
import { Camera, AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

export function WebcamSection() {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  const handleStartWebcam = useCallback(() => {
    setError(null);
    setIsWebcamActive(true);
  }, []);

  const handleUserMedia = useCallback(() => {
    setError(null);
  }, []);

  const handleUserMediaError = useCallback((error: string | DOMException) => {
    setIsWebcamActive(false);
    setError('Unable to access webcam. Please ensure you have granted camera permissions.');
  }, []);

  const simulateAttendanceProcess = useCallback(() => {
    if (webcamRef.current) {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    }
  }, []);

  return (
    <div id="webcam-section" className="min-h-[400px] bg-zinc-900/50 rounded-xl p-8 relative overflow-hidden border border-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        {!isWebcamActive && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <Camera className="w-16 h-16 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-100">Ready to Take Attendance?</h3>
            <p className="text-gray-400">
              Click the button below to activate your webcam and start the attendance process.
            </p>
            <button
              onClick={handleStartWebcam}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all"
            >
              <Camera className="w-5 h-5 mr-2" />
              Activate Webcam
            </button>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 space-y-4"
          >
            <AlertCircle className="w-12 h-12 mx-auto" />
            <p>{error}</p>
            <button
              onClick={handleStartWebcam}
              className="text-emerald-400 hover:text-emerald-300"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {isWebcamActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="relative">
              <Webcam
                ref={webcamRef}
                onUserMedia={handleUserMedia}
                onUserMediaError={handleUserMediaError}
                className="rounded-lg mx-auto border-2 border-gray-800"
                videoConstraints={{
                  width: 640,
                  height: 480,
                  facingMode: "user"
                }}
              />
              {isProcessing && (
                <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-emerald-400">Processing...</p>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={simulateAttendanceProcess}
              disabled={isProcessing}
              className={clsx(
                "inline-flex items-center px-6 py-3 rounded-lg transition-all",
                isProcessing
                  ? "bg-gray-700 cursor-not-allowed text-gray-400"
                  : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white"
              )}
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Mark Attendance
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}