import React, { useState } from 'react';
import CameraFeed from './CameraFeed';
import PoseSelector from './PoseSelector';
import './PoseDetection.css';

function PoseDetection() {
  const [selectedPose, setSelectedPose] = useState('tree');
  const [isCameraActive, setIsCameraActive] = useState(false); // Renamed for clarity
  const [capturedImages, setCapturedImages] = useState([]); // To store captured images
  const [detectedPoseName, setDetectedPoseName] = useState(''); //added

  const handleImageCapture = (image) => {
    setCapturedImages(prev => [...prev, image]);
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Yoga Posture Detection</h1>
        <p>Detect your postures live.</p>
      </header>

      <div className="main-content">
        <div className="camera-section">
          <CameraFeed 
            isActive={isCameraActive}
            onCapture={handleImageCapture}
            onPoseDetected={handlePoseDetected} // ✅ pass callback
          />
          
          <div className="controls">
            <button 
              onClick={toggleCamera}
              className={`camera-btn ${isCameraActive ? 'active' : ''}`}
            >
              {isCameraActive ? 'Turn Off Camera' : 'Turn On Camera'}
            </button>
          </div>
        </div>

        <div className="feedback-section">
          <PoseSelector 
            selectedPose={selectedPose}
            onChange={setSelectedPose}
            detectedPose={detectedPoseName} // ✅ pass poseName
          />
        </div>
      </div>
    </div>
  );
}

export default PoseDetection;