101508478_comp3123_labtest2 — Weather App

COMP 3123 — Full Stack Development I
Lab Test 2 (Week 13)
Student: Mackenzie Bishop
Student ID: 101508478

Project Description

This project is a simple interactive Weather App built with React.
It allows users to search for the current weather in any city by calling the OpenWeatherMap API and displaying real-time data including:

Temperature (°C)

Weather condition and description

Feels-like temperature

Humidity

Wind speed

Pressure

Weather icon

The UI follows the assignment’s styling requirements and uses reusable React components.

Technologies Used

React (Create React App)

JavaScript (ES6+)

OpenWeatherMap API

CSS

Fetch API

API Used

This project uses the Current Weather Data API from OpenWeatherMap:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

API Documentation:
https://openweathermap.org/current

Features

✔ Search for weather by city
✔ Real-time API data
✔ Weather icons
✔ Temperature, humidity, wind & pressure
✔ Clean, simple UI
✔ Error handling for invalid cities
✔ Uses props and state
✔ Functional components using hooks

Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ └── WeatherCard.jsx
├── App.js
├── App.css
├── index.js
└── index.css

How to Run the Project Locally

Clone the repository:
git clone https://github.com/mackenzie-bishop/101508478_comp3123_labtest2.git

Install dependencies:
npm install

Insert your OpenWeather API key in src/App.js:
const API_KEY = "YOUR_API_KEY_HERE";

Run the application:
npm start

The app will load at:
http://localhost:3000

Screenshots

Screenshots required by the assignment are included in the .docx file:

Weather App running

Weather search example

Postman API request

GitHub repository

Deployment screenshot

Deployment (Vercel)

Live deployment link:
(Will be added after deployment)

Notes & Assumptions

Free OpenWeather API keys may take time to activate

UI is minimal per assignment instructions

Includes error handling for invalid API responses

Only current weather is required

Submission Checklist

App named 101508478_comp3123_labtest2

Pushed to GitHub

Weather API integrated

Components created

Styled UI

README.md written

Deployment (Vercel)

ZIP file without node_modules

.docx screenshots

Postman screenshot

Status

This Weather App is fully functional and meets all requirements for
COMP 3123 — Lab Test 2 (Week 13).
