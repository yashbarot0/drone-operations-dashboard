package com.drone.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Drone {
    private String id;
    private String name;
    private double lat;
    private double lng;
    private double altitude;
    private int battery;
    private String status;
    private String mission;
}