drone-operations-dashboard/
├── backend/
│   ├── drone-service/
│   │   ├── pom.xml
│   │   └── src/
│   │       └── main/
│   │           ├── java/com/drone/
│   │           │   ├── DroneServiceApplication.java
│   │           │   ├── controller/DroneController.java
│   │           │   ├── model/Drone.java
│   │           │   ├── model/TelemetryEvent.java
│   │           │   ├── service/DroneService.java
│   │           │   └── websocket/
│   │           │       ├── DroneUpdateHandler.java
│   │           │       └── WebSocketConfig.java
│   │           └── resources/
│   │               └── application.yml
│   └── websocket-service/
│       ├── pom.xml
│       └── src/
│           └── main/
│               ├── java/com/drone/ws/
│               │   ├── WebSocketServiceApplication.java
│               │   ├── handler/DroneUpdateHandler.java
│               │   └── config/WebSocketConfig.java
│               └── resources/
│                   └── application.yml
├── frontend/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── .env.example
│   └── src/
│       ├── index.css
│       ├── App.tsx
│       ├── index.tsx
│       ├── components/
│       │   ├── DroneMap.tsx
│       │   ├── DroneList.tsx
│       │   ├── TelemetryPanel.tsx
│       │   └── AlertBanner.tsx
│       └── services/
│           └── api.ts
├── infrastructure/
│   ├── package.json
│   ├── tsconfig.json
│   └── lib/
│       └── drone-stack.ts
├── scripts/
│   └── mock_drone_telemetry.py
├── docker-compose.yml
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml