# 🧘‍♂️ AI-Powered Yoga Pose Detection

## 📌 Overview
This project is a **Yoga Pose Detection System** that leverages machine learning to identify and classify various yoga poses. It is designed to assist users in learning and practicing yoga by providing real-time feedback on their poses.


### Dataset :  [Yoga-82](https://www.kaggle.com/datasets/akashrayhan/yoga-82)


## ✨ Key Features
- **Real-time pose detection** using machine learning.
- **Visualization of key points** on the user's body to highlight the detected pose using MediaPipe.
- **Supported Yoga Poses**:
  - **Baddha Konasana** (Bound Angle Pose)
  - **Balasana** (Child's Pose)
  - **Malasana** (Garland Pose)
  - **Vajrasana** (Thunderbolt Pose)
- 🖥️ **User-friendly interface** for seamless interaction.


## 🛠️ Technology Stack
- **Language**: ![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python&logoColor=white)
- **Libraries**:
  - [MediaPipe](https://google.github.io/mediapipe/) (for keypoint detection)
  - [OpenCV](https://opencv.org/) (for image processing)
  - [NumPy](https://numpy.org/) (for numerical computations)
  - [Pandas](https://pandas.pydata.org/) (for data manipulation)
  - [Matplotlib](https://matplotlib.org/) & [Seaborn](https://seaborn.pydata.org/) (for data visualization)
  - [Scikit-learn](https://scikit-learn.org/) (for machine learning)
  - [Pickle](https://docs.python.org/3/library/pickle.html) (for saving/loading models)
  - [FastAPI](https://fastapi.tiangolo.com/) (for creating the API)
  - [Uvicorn](https://www.uvicorn.org/) (for serving the API)
  - Other libraries: `os`, `base64`, `datetime`, `typing`

- **Models**:
  - Logistic Regression[Best Model]
  - K-Nearest Neighbors (KNN)
  - Decision Tree Classifier
  - Stochastic Gradient Classifier
  - Ensemble Learning:
    - Random Forest Classifier
    - Gradient Boosting Classifier
    - Voting Classifier (Logistic Regression, KNN, Random Forest)
- **IDE**: Jupyter Notebook, Google Colab



## 🚀 Getting Started

### ✅ Prerequisites
- Python v3.8+

### 📦 Install the Required Libraries
Run the following command to install all dependencies:
```bash
pip install -r requirements.txt
```

### ▶️ Run the FastAPI Server
Start the FastAPI server by running:
```bash
python app.py
```


## 📊 Workflow
1. **Upload an Image**: The user uploads an image of a yoga pose.
2. **Pose Detection**: The system detects key points on the body using MediaPipe.
3. **Pose Classification**: The detected key points are fed into a machine learning model to classify the yoga pose.
4. **Annotated Image**: The system returns an annotated image with key points and the detected pose name.

---

## 📚 Open-Source Utilities
[![MediaPipe](https://img.shields.io/badge/-MediaPipe-FF7F50?logo=mediapipe&logoColor=white)](https://google.github.io/mediapipe/)
[![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?logo=opencv&logoColor=white)](https://opencv.org/)
[![NumPy](https://img.shields.io/badge/-NumPy-013243?logo=numpy&logoColor=white)](https://numpy.org/)
[![Pandas](https://img.shields.io/badge/-Pandas-150458?logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![Matplotlib](https://img.shields.io/badge/-Matplotlib-11557C?logo=matplotlib&logoColor=white)](https://matplotlib.org/)
[![Seaborn](https://img.shields.io/badge/-Seaborn-40B5A4?logo=seaborn&logoColor=white)](https://seaborn.pydata.org/)
[![Scikit-learn](https://img.shields.io/badge/-Scikit--learn-F7931E?logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Uvicorn](https://img.shields.io/badge/-Uvicorn-499848?logo=uvicorn&logoColor=white)](https://www.uvicorn.org/)
[![Google Colab](https://img.shields.io/badge/-Google%20Colab-F9AB00?logo=googlecolab&logoColor=white)](https://colab.research.google.com/)
[![Jupyter Notebook](https://img.shields.io/badge/-Jupyter%20Notebook-F37626?logo=jupyter&logoColor=white)](https://jupyter.org/)