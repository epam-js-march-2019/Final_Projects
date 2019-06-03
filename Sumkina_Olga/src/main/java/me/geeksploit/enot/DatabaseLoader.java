package me.geeksploit.enot;

import me.geeksploit.enot.employee.EmployeeRepository;
import me.geeksploit.enot.manager.ManagerRepository;
import me.geeksploit.enot.service.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository employees;
    private final ManagerRepository managers;
    private final ServiceRepository services;

    @Autowired
    public DatabaseLoader(EmployeeRepository employees,
                          ManagerRepository managers, ServiceRepository services) {
        this.employees = employees;
        this.managers = managers;
        this.services = services;
    }

    @Override
    public void run(String... strings) throws Exception {
//        services.save(new Service("завещание", 500, "я не знаю"));
//        services.save(new Service("доверенность на автомобиль", 300, "ну я не знаю зачем"));
//        services.save(new Service("доверенность на недвижимость", 250, "квартиры, дома, жилые и нежилые помещения"));
//        services.save(new Service("согласие", 150, "на выезд, продажу доли"));

//        Manager greg = this.managers.save(new Manager("greg", "turnquist",
//                "ROLE_MANAGER"));
//        Manager oliver = this.managers.save(new Manager("oliver", "gierke",
//                "ROLE_MANAGER"));
//
//        SecurityContextHolder.getContext().setAuthentication(
//                new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
//                        AuthorityUtils.createAuthorityList("ROLE_MANAGER")));
//
//        this.employees.save(new Employee("Frodo", "Baggins", "ring bearer", greg));
//        this.employees.save(new Employee("Bilbo", "Baggins", "burglar", greg));
//        this.employees.save(new Employee("Gandalf", "the Grey", "wizard", greg));
//
//        SecurityContextHolder.getContext().setAuthentication(
//                new UsernamePasswordAuthenticationToken("oliver", "doesn't matter",
//                        AuthorityUtils.createAuthorityList("ROLE_MANAGER")));
//
//        this.employees.save(new Employee("Samwise", "Gamgee", "gardener", oliver));
//        this.employees.save(new Employee("Merry", "Brandybuck", "pony rider", oliver));
//        this.employees.save(new Employee("Peregrin", "Took", "pipe smoker", oliver));
//
//        SecurityContextHolder.clearContext();
    }
}