import mediapipe as mp
import numpy as np
import cv2 as cv
import pickle as pkl
import os
import matplotlib.pyplot as plt
import base64

# Loading model, scaler, and label encoder
with open('/Users/devanshpratap28/Documents/Python VS Code/VridhaMitra/app/model.pkl', 'rb') as f:
    model = pkl.load(f)

with open('/Users/devanshpratap28/Documents/Python VS Code/VridhaMitra/app/scaler.pkl', 'rb') as f:
    scaler = pkl.load(f)

with open('/Users/devanshpratap28/Documents/Python VS Code/VridhaMitra/app/label_encoder.pkl', 'rb') as f:
    label_encoder = pkl.load(f)

ANNOTATED_DIR = "Annotated_Image"
os.makedirs(ANNOTATED_DIR, exist_ok=True)

def detect_keypoints(image):
    mp_pose = mp.solutions.pose
    pose = mp_pose.Pose()

    if image is None:
        return None

    img_rgb = cv.cvtColor(image, cv.COLOR_BGR2RGB)
    results = pose.process(img_rgb)

    if results.pose_landmarks:
        keypoints = [(lm.x * image.shape[1], lm.y * image.shape[0]) for lm in results.pose_landmarks.landmark]
        return np.array(keypoints)

    return None

def plot_keypoints(image, keypoints, label):
    filename = os.path.join(ANNOTATED_DIR, "keypoints.png")

    plt.figure(figsize=(4, 6))
    plt.imshow(cv.cvtColor(image, cv.COLOR_BGR2RGB))
    plt.axis("off")

    if keypoints is not None:
        plt.scatter(keypoints[:, 0], keypoints[:, 1], c='red', s=20, label="Keypoints")

    plt.title(label)
    plt.legend()
    plt.savefig(filename, bbox_inches='tight')
    plt.close()

    # Read and encode the annotated image
    with open(filename, "rb") as image_file:
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')

    return encoded_image

def predict_output(image_path):
    img = cv.imread(image_path)

    if img is None:
        return "", "Failed to load image"

    keypoint = detect_keypoints(img)
    if keypoint is None:
        return "", "No keypoints detected"

    kp_reshape = keypoint.reshape(1, -1)
    kp_scale = scaler.transform(kp_reshape)
    pose_label = model.predict(kp_scale)
    pose_name = label_encoder.inverse_transform(pose_label)[0]
    key_image = plot_keypoints(img, keypoint, pose_name)
    return key_image, pose_name
