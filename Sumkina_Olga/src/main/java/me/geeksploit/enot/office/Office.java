package me.geeksploit.enot.office;

import lombok.Data;
import lombok.EqualsAndHashCode;
import me.geeksploit.enot.service.Service;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Office {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String address;
    private String phone;

    private Double lat;
    private Double lng;

    @ManyToMany
    @EqualsAndHashCode.Exclude
    private Set<Service> services = new HashSet<>();

    private Office() {
    }

    public Office(String name, String address, String phone, double lat, double lng) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.lat = lat;
        this.lng = lng;
    }
}
