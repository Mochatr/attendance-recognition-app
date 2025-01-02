#!/bin/bash

# Install cmake
sudo apt update
sudo apt install cmake -y

# Install dlib
git clone https://github.com/davisking/dlib.git
cd dlib
cmake -G "Unix Makefiles" -DUSE_AVX_INSTRUCTIONS=1 -DUSE_SSE2_INSTRUCTIONS=1 .
make -j$(nproc)
sudo make install
cd ..

# Install python dependencies
pip install numpy opencv-python face_recognition


