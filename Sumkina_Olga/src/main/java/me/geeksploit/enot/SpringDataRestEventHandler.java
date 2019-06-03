package me.geeksploit.enot;

import me.geeksploit.enot.employee.Employee;
import me.geeksploit.enot.manager.Manager;
import me.geeksploit.enot.manager.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler()
public class SpringDataRestEventHandler {

    private final ManagerRepository managerRepository;

    @Autowired
    public SpringDataRestEventHandler(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    @HandleBeforeCreate
    public void applyUserInformationUsingSecurityContext(Employee employee) {

        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        Manager manager = this.managerRepository.findByName(name);

        if (manager == null) {
            // TODO: In a real production system, this block of code should be removed and instead depend on the DBAs or Security Ops team to properly maintain the user data store.
            Manager newManager = new Manager();
            newManager.setName(name);
            newManager.setRoles(new String[]{"ROLE_MANAGER"});
            manager = this.managerRepository.save(newManager);
        }

        employee.setManager(manager);
    }
}