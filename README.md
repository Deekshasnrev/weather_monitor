# **Weather Monitoring Application**

## Overview

This application fetches weather data for specified cities from the OpenWeatherMap API and displays the information on a web interface. It also includes features for alerting based on user-configurable thresholds such as temperature and weather conditions. This document provides comprehensive build instructions, design choices, and dependency setup for the application.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Design Choices](#design-choices)
3. [Dependencies](#dependencies)
4. [Installation and Setup](#installation-and-setup)
5. [Guide](#Guide)
---

## **1. Overview**

The Weather Monitoring Application allows users to view real-time weather data for various cities and visualize historical trends. It supports the following features:
- Fetches weather data dynamically using the OpenWeatherMap API.
- Visualizes the data using a user-friendly chart.
- Allows users to set up temperature and weather condition thresholds.
- Triggers alerts when these thresholds are exceeded.

---

## **2. Design Choices**

1. **Django Framework:** The application uses Django for its robustness, scalability, and ease of integrating with databases and external APIs.
2. **SQLite Database:** The choice of SQLite was made due to its reliability and extensive feature set that supports complex queries, which are useful for fetching historical weather data.
3. **Chart.js Library:** Chart.js is used for rendering interactive and responsive charts to visualize weather trends. It is lightweight and integrates well with JavaScript.
4. **Docker:** Docker containers are used to package the application and its dependencies, ensuring consistency across different environments (development, testing, and production).
5. **Logging System:** Python's logging library is used for monitoring and debugging purposes. Logs capture threshold breaches and application errors.
6. **Synchronous Weather Data Fetching:** Weather data fetching is kept synchronous to ensure data consistency and prevent race conditions during data aggregation and threshold comparisons.

---

## **3. Dependencies**

Before running the application, ensure the following dependencies are installed:

### **Backend Dependencies**

- **Django (>= 4.0)**: Python web framework for building the backend.
- **Django REST Framework (>= 3.12)**: For building API endpoints.
- **Requests Library (>= 2.26)**: For making HTTP requests to the OpenWeatherMap API.
- **PostgreSQL (>= 13)**: Database system for storing weather data and user-configured thresholds.
- **Phonenumbers Library (>= 8.12)**: For managing and validating phone numbers if notifications based on user numbers are included.

### **Frontend Dependencies**

- **Bootstrap (>= 5.1)**: For styling the frontend.
- **Chart.js (>= 3.7)**: For data visualization.
- **jQuery (>= 3.6)**: Simplifies frontend scripting and AJAX calls.

### **Docker Dependencies**

- **Docker**: Ensure Docker is installed on your system to run the application in a containerized environment.
- **Docker Compose**: Used to set up multiple containers (Django app, PostgreSQL, etc.).

---

## **4. Installation and Setup**

### **4.1 Setting up the Environment**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Deekshasnrev/weather-monitor.git
   cd weather-monitor

2.  **Make sure the manage.py file is present there , otherwise go that folder**
3.  **Start the server**
    ```bash
    python manage.py runserver
 4. **Go thr link which comes Eg:'http://127.0.0.1:8000/'**


## Guide

# First when you land in the website please write '/weather/' and press enter.
![Screenshot 2024-10-20 234220](https://github.com/user-attachments/assets/2fc3efe6-7aba-454a-816e-be0ae7a877a3)


# In the dropdown select the cities which you want to see the weather details.
![Screenshot 2024-10-20 232910](https://github.com/user-attachments/assets/1015fab5-19c3-48ed-84a1-06345c8cc750)


![Screenshot 2024-10-20 233026](https://github.com/user-attachments/assets/4b009b24-bd3d-403c-845a-e6efeca30e6d)

![Screenshot 2024-10-20 233119](https://github.com/user-attachments/assets/c1651da2-91c9-4e72-a9b0-434b5261fee2)

![Screenshot 2024-10-20 233246](https://github.com/user-attachments/assets/00ec2c4a-0693-4cb8-9861-3e5c852fa44b)


# By clicking on the boxes beside features we can strike that feature and remove it from the chart
![Screenshot 2024-10-20 233347](https://github.com/user-attachments/assets/3f9b9520-d336-48bb-a0ba-062401995077)



