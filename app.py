from flask import Flask, render_template, Response
import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime

app = Flask(__name__)

# Load known faces and encodings
path = 'attendance_dataset'
images = []
class_names = []
myList = os.listdir(path)
for cl in myList:
    current_img = cv2.imread(f'{path}/{cl}')
    images.append(current_img)
    class_names.append(os.path.splitext(cl)[0])

def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

encodeListKnown = findEncodings(images)
print('Encoding Complete')

def markAttendance(name):
    with open('Attendance.csv', 'r+') as f:
        attendance_data = f.readlines()
        recorded_names = []
        for line in attendance_data:
            entry = line.split(',')
            recorded_names.append(entry[0])
        if name not in recorded_names:
            current_time = datetime.now()
            time_string = current_time.strftime('%H:%M:%S')
            f.writelines(f'\n{name}, {time_string}')

def generate_frames():
    cap = cv2.VideoCapture(0)
    while True:
        success, img = cap.read()
        if not success:
            break
        else:
            small_frame = cv2.resize(img, (0, 0), None, 0.25, 0.25)
            small_frame = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)

            faces_currentFrame = face_recognition.face_locations(small_frame)
            encode_currentFrame = face_recognition.face_encodings(small_frame, faces_currentFrame)

            for encodeFace, faceLoc in zip(encode_currentFrame, faces_currentFrame):
                matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
                face_distance = face_recognition.face_distance(encodeListKnown, encodeFace)
                matchIndex = np.argmin(face_distance)

                if matches[matchIndex]:
                    name = class_names[matchIndex].upper()
                    y1, x2, y2, x1 = faceLoc
                    y1, x2, y2, x1 = y1*4, x2*4, y2*4, x1*4
                    cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    cv2.rectangle(img, (x1, y2-35), (x2, y2), (0, 255, 0), cv2.FILLED)
                    cv2.putText(img, name, (x1+6, y2-6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)
                    markAttendance(name)

            ret, buffer = cv2.imencode('.jpg', img)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)