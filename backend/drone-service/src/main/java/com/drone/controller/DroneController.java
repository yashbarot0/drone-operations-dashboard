package com.drone.controller;

import com.drone.model.Drone;
import com.drone.model.TelemetryEvent;
import com.drone.service.DroneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class DroneController {

    @Autowired
    private DroneService droneService;

    @GetMapping("/drones")
    public List<Drone> getFleet() {
        return droneService.getAllDrones();
    }

    @PostMapping("/telemetry")
    public ResponseEntity<?> ingestTelemetry(@RequestBody TelemetryEvent event) {
        droneService.updateTelemetry(event);
        return ResponseEntity.accepted().build();
    }
}