# VridhaMitra - Old Age Assistance Platform

## 📌 Overview
VridhaMitra is an all-in-one solution designed to address the challenges faced by aging populations, providing emergency response, daily health management, and community support through a single, intuitive app. The platform integrates features like SOS alerts, medication reminders, AI-powered fitness tracking, and volunteer-assisted services to enhance the quality of life for seniors and their caregivers.

---

## ✨ Key Features
- **Instant Emergency SOS**: One-tap panic button to alert nearby volunteers, family, and hospitals via GPS.
- **Pills Reminder**: Medication reminders, telehealth shortcuts, and booking for nurses/helpers.
- **AI-Powered Yoga Detection**: Camera-based posture tracking for yoga poses.
- **Crowdsourced Fundraising**: Verified requests for medical treatments with secure donation options.
- **Volunteer-Assisted Transportation**: Safe and assisted mobility for seniors with real-time volunteer matching.

---

## 🛠️ Technology Stack
### Frontend
- **Framework**: React.js (with Vite for build tooling)
- **UI Libraries**: Vanilla CSS for responsive design
- **State Management**: Redux Store

### Backend
- **Server**: Node.js with Express.js
- **Database**: MongoDB for real-time data
- **Authentication**: OTP based authentication

### [AI/ML](https://github.com/07-priyanshu/VridhaMitra/blob/main/ML/readme.md)
- **Dataset Used**: [Yoga-82](https://www.kaggle.com/datasets/akashrayhan/yoga-82)
- **Keypoints Detection**: MediaPipe for extracting human posture keypoints from images
- **Libraries**: Numpy, Pandas, scikit-learn Matplotlib, OpenCV, Pickle
- **Models Used**: Logistic Regression on Image Keypoints
- **Backend**: FastAPI and Uvicorn

### APIs
- **Google Maps API**: For GPS and volunteer tracking
- **Emergency Services**: Nodemailer for email alerts

---

## 📂 Repository Structure
- 📂 **VridhaMitra**
  - 📂 **frontend**
    - 📂 src
      - 📂 assets
      - 📂 components
      - 📂 pages
    - 📂 store
    - 📜 vite.config.js
  - 📂 **backend**
    - 📂 models
    - 📂 uploads
    - 📂 utils
  - **📂 ml**
    - 📂 Confusion_Matrix
    - 📂 Dataset
    - 📂 Images
    - 📂 Prediction_Pipeline
  - 📜 README.md
---

## 🚀 Getting Started
### Prerequisites
- Node.js (v16+)
- Python (v3.8+ for ML)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/07-priyanshu/VridhaMitra.git
   cd VridhaMitra

2. **Set up Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev

3. **Set up Backend**:
   ```bash
   cd ../backend
   npm install
   npm start

3. **Set up AI Posture Detection**:
   ```bash
   cd ../ML/Prediction_Pipeline
   pip install numpy pandas matplotlib opencv-python mediapipe fastapi uvicorn python-multipart
   python app.py
---

## 🌟 Team

|     Member              |     Key Responsibilities      |
|-------------------------|-------------------------------|
| **Priyanshu Ranjan**    | Team Lead, ML/API Integration |
| **Shreya Srivastava**   | Frontend                      |
| **Saim Jawed**          | Backend, UI/UX                |
| **Devansh Pratap Singh**| Machine Learning              |
---

## ✨ UI
![WhatsApp Image 2025-04-12 at 21 08 11 (2)](https://github.com/user-attachments/assets/a228a1cd-ec67-4bbc-bdc0-830ed909e029)
![WhatsApp Image 2025-04-12 at 21 08 12 (1)](https://github.com/user-attachments/assets/f7d2555e-a64a-4612-977d-663b53843e05)
![WhatsApp Image 2025-04-12 at 21 08 11 (1)](https://github.com/user-attachments/assets/52656746-3d5e-49a3-afbc-b4264fa976a3)

---
- Open-source libraries:  
  ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
  ![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?logo=opencv&logoColor=white)
  ![MediaPipe](https://img.shields.io/badge/-MediaPipe-FF7F50?logo=mediapipe&logoColor=white)
  ![Uvicorn](https://img.shields.io/badge/-Uvicorn-499848?logo=uvicorn&logoColor=white)
  ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white)
  ![NumPy](https://img.shields.io/badge/-NumPy-013243?logo=numpy&logoColor=white)
  ![Pandas](https://img.shields.io/badge/-Pandas-150458?logo=pandas&logoColor=white)
  ![Matplotlib](https://img.shields.io/badge/-Matplotlib-11557C?logo=matplotlib&logoColor=white)
