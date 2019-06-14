package me.geeksploit.enot.invoice;

import lombok.Data;
import me.geeksploit.enot.service.Service;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Invoice {

    @Id
    @GeneratedValue
    private Long id;
    private long taxCharged;
    private long priceCharged;
    private String details;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    @ManyToOne
    private Service service;

    private Invoice() {
    }

    public Invoice(long taxCharged, long priceCharged, String details, Service service) {
        this.taxCharged = taxCharged;
        this.priceCharged = priceCharged;
        this.details = details;
        this.service = service;
    }
}
