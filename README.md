# Drone Operations Dashboard (React + Java + AWS)

Real-time drone fleet monitoring with live map, telemetry, alerts, and delivery logs.

## Features
- Live drone tracking on Leaflet map
- Real-time telemetry via WebSocket
- Fleet status panel
- Delivery event log
- Automated alerts (low battery, geofence)
- Serverless AWS backend (API Gateway, DynamoDB, S3)
- CI/CD with GitHub Actions

## Tech Stack
- **Frontend**: React 18, TypeScript, TailwindCSS, Leaflet, Socket.IO
- **Backend**: Java 17, Spring Boot 3, WebSocket
- **Cloud**: AWS API Gateway, DynamoDB, S3, CDK
- **Real-time**: WebSocket via Spring

## Quick Start

```bash
# Backend
cd backend/drone-service && ./mvnw spring-boot:run

# WebSocket
cd ../websocket-service && ./mvnw spring-boot:run

# Frontend
cd ../../frontend && npm start

# Mock Data
cd ../../scripts && python mock_drone_telemetry.py

