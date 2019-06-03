package me.geeksploit.enot.service;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Service {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private long tax;
    private String description;

    private Service() {
    }

    public Service(String title, long tax, String description) {
        this.title = title;
        this.tax = tax;
        this.description = description;
    }
}
