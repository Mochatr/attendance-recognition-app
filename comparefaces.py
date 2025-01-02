import cv2
import face_recognition
import numpy as np

image1 = face_recognition.load_image_file('dataset/Jeff Besos.jpg')
image2 = face_recognition.load_image_file('dataset/Sam altman.jpeg')

image1 = cv2.cvtColor(image1, cv2.COLOR_BGR2RGB)
image2 = cv2.cvtColor(image2, cv2.COLOR_BGR2RGB)

facelocation_img1 = face_recognition.face_locations(image1)[0]
encode_img1 = face_recognition.face_encodings(image1)[0]
cv2.rectangle(image1, (facelocation_img1[3], facelocation_img1[0]), (facelocation_img1[1], facelocation_img1[2]), (0, 255, 0), 2)

facelocation_img2 = face_recognition.face_locations(image2)[0]
encode_img2 = face_recognition.face_encodings(image2)[0]
cv2.rectangle(image2, (facelocation_img2[3], facelocation_img2[0]), (facelocation_img2[1], facelocation_img2[2]), (0, 255, 0), 2)

results = face_recognition.compare_faces([encode_img1], encode_img2) # Compare the faces
faceDis = face_recognition.face_distance([encode_img1], encode_img2) # Distance between the faces
print(results, faceDis)
cv2.putText(image2, f'{results} {round(faceDis[0], 2)}', (50, 50), cv2.FONT_HERSHEY_COMPLEX, 1, (0, 0, 255), 2)

cv2.imshow('Jeff Besos', image1)
cv2.imshow('Sam Altman', image2)

cv2.waitKey(0)