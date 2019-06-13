package me.geeksploit.enot.service;

import lombok.Data;
import lombok.EqualsAndHashCode;
import me.geeksploit.enot.office.Office;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Service {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private long tax;
    private long price;
    private String description;

    @ManyToMany(mappedBy = "services")
    @EqualsAndHashCode.Exclude
    private Set<Office> offices = new HashSet<>();

    private Service() {
    }

    public Service(String title, long tax, long price, String description) {
        this.title = title;
        this.tax = tax;
        this.price = price;
        this.description = description;
    }
}
