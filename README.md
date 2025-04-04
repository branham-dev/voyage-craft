# Voyage Craft

# ✈️ Travel Planner – TripAdvisor API Integration

This is a frontend application that leverages the [Tripadvisor Content API](https://developer-tripadvisor.com/content-api/) to help users discover hotels, restaurants, attractions, and experiences by location. The project includes a custom backend proxy server to securely handle requests and manage API access.

## 🔧 Tech Stack

- **Frontend**: React, Axios, TailwindCSS
- **Backend**: Node.js, Express.js, Axios
- **Others**: dotenv, CORS

## 🛡 Why a Proxy?

Due to TripAdvisor's requirement for secure API key usage, I implemented a Node.js + Express backend proxy to handle all requests to the API. This design abstracts away the API key from the frontend, supports query parameter management, and enforces proper request formatting.

## 🚀 Features

- Location-based search (e.g., cities, landmarks)
- Infinite scroll-ready architecture using `limit` and `offset`
- Query categories such as hotels, restaurants, and attractions
- API proxy server with customizable parameters
- Clean and scalable codebase (React + Hooks)

## 🌐 API Routing Structure

**Frontend hits:**
[GET](http://localhost:5000/api/tripadvisor/location/search?searchQuery=Nairobi&category=hotels)

**Backend proxy reformats and sends:**
[GET](https://api.content.tripadvisor.com/api/v1/location/search?key=API_KEY&searchQuery=Nairobi&category=hotels&limit=10&offset=0)
