package com.drone.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TelemetryEvent {
    private String droneId;
    private double lat;
    private double lng;
    private double altitude;
    private int battery;
    private String status;
}