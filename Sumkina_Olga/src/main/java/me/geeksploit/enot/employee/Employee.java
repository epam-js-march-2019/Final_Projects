package me.geeksploit.enot.employee;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import me.geeksploit.enot.manager.Manager;

import javax.persistence.*;

@Data
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    private String description;

    @Version
    @JsonIgnore
    private Long version;

    @ManyToOne //(cascade = {CascadeType.ALL})
    private Manager manager;

    private Employee() {
    }

    public Employee(String firstName, String lastName, String description, Manager manager) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.manager = manager;
    }
}