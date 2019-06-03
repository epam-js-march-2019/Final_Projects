package me.geeksploit.enot.manager;

import me.geeksploit.enot.manager.Manager;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ManagerRepository extends Repository<Manager, Long> {

    Manager save(Manager manager);

    Manager findByName(String name);

}