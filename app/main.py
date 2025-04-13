from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from datetime import datetime
from typing import Optional
from data import predict_output as op

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
UPLOAD_DIR = "uploads"
ALLOWED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

os.makedirs(UPLOAD_DIR, exist_ok=True)

def allowed_file(filename: str) -> bool:
    return os.path.splitext(filename)[1].lower() in ALLOWED_EXTENSIONS

@app.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    try:
        if not file.content_type.startswith('image/') or not allowed_file(file.filename):
            raise HTTPException(status_code=400, detail="Only image files (JPEG, PNG, GIF) are allowed")

        file_size = 0
        for chunk in file.file:
            file_size += len(chunk)
            if file_size > MAX_FILE_SIZE:
                raise HTTPException(status_code=413, detail="File too large (max 10MB)")

        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        file_ext = os.path.splitext(file.filename)[1]
        saved_filename = f"img_{timestamp}{file_ext}"
        saved_path = os.path.join(UPLOAD_DIR, saved_filename)

        await file.seek(0)
        with open(saved_path, "wb") as buffer:
            buffer.write(await file.read())

        key_enco_image, pose = op(saved_path)

        if key_enco_image == "":
            raise HTTPException(status_code=422, detail=pose) 

        return JSONResponse(
            status_code=200,
            content={
                "status": "success",
                "filename": saved_filename,
                "path": saved_path,
                "size": file_size,
                "content_type": file.content_type,
                "Pose_Name": pose,
                "annotated_image": key_enco_image
            }
        )

    except HTTPException as he:
        raise he
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)