import { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import type { WebcamStatus } from '../types';

export const useWebcam = () => {
  const [status, setStatus] = useState<WebcamStatus>({
    isActive: false,
    error: null,
    isLoading: false
  });
  
  const webcamRef = useRef<Webcam>(null);

  const startWebcam = useCallback(async () => {
    setStatus(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      // Clean up the stream if component unmounts during permission request
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      
    } catch (error) {
      setStatus({
        isActive: false,
        error: 'Camera access denied. Please check your permissions.',
        isLoading: false
      });
      return;
    }
  }, []);

  const handleUserMedia = useCallback(() => {
    setStatus({
      isActive: true,
      error: null,
      isLoading: false
    });
  }, []);

  const handleUserMediaError = useCallback((error: string | DOMException) => {
    let errorMessage = 'Failed to initialize camera.';
    
    if (error instanceof DOMException) {
      switch (error.name) {
        case 'NotFoundError':
          errorMessage = 'No camera device found.';
          break;
        case 'NotAllowedError':
          errorMessage = 'Camera access denied. Please check your permissions.';
          break;
        case 'NotReadableError':
          errorMessage = 'Camera is already in use by another application.';
          break;
        default:
          errorMessage = `Camera error: ${error.message}`;
      }
    }

    setStatus({
      isActive: false,
      error: errorMessage,
      isLoading: false
    });
  }, []);

  const stopWebcam = useCallback(() => {
    const stream = webcamRef.current?.video?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStatus({
      isActive: false,
      error: null,
      isLoading: false
    });
  }, []);

  return {
    status,
    webcamRef,
    startWebcam,
    stopWebcam,
    handleUserMedia,
    handleUserMediaError
  };
};