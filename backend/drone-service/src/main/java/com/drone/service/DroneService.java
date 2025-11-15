package com.drone.service;

import com.drone.model.Drone;
import com.drone.model.TelemetryEvent;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class DroneService {

    private final Map<String, Drone> drones = new ConcurrentHashMap<>();

    public DroneService() {
        // Seed initial drones
        drones.put("DRN001", new Drone("DRN001", "Alpha", 37.7749, -122.4194, 0, 100, "IDLE", "Standby"));
        drones.put("DRN002", new Drone("DRN002", "Beta", 37.7849, -122.4094, 0, 95, "IDLE", "Standby"));
    }

    public List<Drone> getAllDrones() {
        return new ArrayList<>(drones.values());
    }

    public void updateTelemetry(TelemetryEvent event) {
        Drone drone = drones.getOrDefault(event.getDroneId(),
                new Drone(event.getDroneId(), "Drone-" + event.getDroneId(), 0, 0, 0, 100, "IDLE", "Unknown"));

        drone.setLat(event.getLat());
        drone.setLng(event.getLng());
        drone.setAltitude(event.getAltitude());
        drone.setBattery(event.getBattery());
        drone.setStatus(event.getStatus());

        drones.put(event.getDroneId(), drone);
    }

    public Drone getDrone(String id) {
        return drones.get(id);
    }
}