import requests
import json
import time
import random

API_URL = "http://localhost:8080/api/telemetry"
drones = ["DRN001", "DRN002", "DRN003"]

while True:
    drone_id = random.choice(drones)
    payload = {
        "droneId": drone_id,
        "lat": 37.7749 + random.uniform(-0.05, 0.05),
        "lng": -122.4194 + random.uniform(-0.05, 0.05),
        "altitude": random.randint(10, 150),
        "battery": random.randint(10, 100),
        "status": random.choice(["FLYING", "IDLE", "DELIVERING", "RETURNING"])
    }
    try:
        requests.post(API_URL, json=payload)
        print(f"Sent: {drone_id} -> {payload['battery']}%")
    except:
        print("Failed to send")
    time.sleep(2)