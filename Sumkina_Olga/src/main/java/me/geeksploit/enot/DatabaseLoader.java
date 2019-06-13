package me.geeksploit.enot;

import me.geeksploit.enot.employee.Employee;
import me.geeksploit.enot.employee.EmployeeRepository;
import me.geeksploit.enot.manager.Manager;
import me.geeksploit.enot.manager.ManagerRepository;
import me.geeksploit.enot.office.Office;
import me.geeksploit.enot.office.OfficeRepository;
import me.geeksploit.enot.service.Service;
import me.geeksploit.enot.service.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository employees;
    private final ManagerRepository managers;
    private final ServiceRepository services;
    private final OfficeRepository offices;

    @Autowired
    public DatabaseLoader(EmployeeRepository employees,
                          ManagerRepository managers, ServiceRepository services,
                          OfficeRepository offices) {
        this.employees = employees;
        this.managers = managers;
        this.services = services;
        this.offices = offices;
    }

    @Override
    public void run(String... strings) throws Exception {

        Service service1 = services.save(new Service("завещание", 500, 100, "я не знаю"));
        Service service2 = services.save(new Service("доверенность на автомобиль", 300, 150, "ну я не знаю зачем"));
        Service service3 = services.save(new Service("доверенность на недвижимость", 250, 200, "квартиры, дома, жилые и нежилые помещения"));
        Service service4 = services.save(new Service("согласие", 150, 125, "на выезд, продажу доли"));
        Service service5 = services.save(new Service("заявление", 350, 110, "отказ от доли"));
        Service service6 = services.save(new Service("копия", 50, 25, "Копия любого документа"));
        Service service7 = services.save(new Service("перевод", 200, 130, "нотариально заверенный перевод на все языки мира"));

        Office office1 = new Office("Невский", "СПб, Невский проспект, 1", "485-21-35", 59.936846, 30.312176);
        Office office2 = new Office("Охта", "СПб, Заневский проспект, 65", "589-08-93", 59.932108, 30.432568);
        Office office3 = new Office("Южный", "СПб, Пулковское шоссе, 34к1", "441-51-69", 59.823896, 30.326333);
        Office office4 = new Office("Приморский", "СПб, улица Савушкина 4", "834-38-17", 59.986061, 30.299016);
        Office office5 = new Office("Фрунзенский", "СПб, Софийская улица", "945-14-67", 59.861182, 30.420037);
        Office office6 = new Office("Выборгский", "СПб, Петергофское шоссе, 51", "512-83-70", 59.849202, 30.144245);

        office1.getServices().addAll(Arrays.asList(service1, service2, service3, service6));
        office2.getServices().addAll(Arrays.asList(service2, service3, service4, service5));
        office3.getServices().addAll(Arrays.asList(service3, service4, service6));
        office4.getServices().addAll(Arrays.asList(service1, service2, service3));
        office5.getServices().addAll(Arrays.asList(service1, service4, service5, service6));
        office6.getServices().addAll(Arrays.asList(service1, service7));

        offices.saveAll(Arrays.asList(office1, office2, office3, office4, office5, office6));

        Manager greg = this.managers.save(new Manager("greg", "turnquist",
                "ROLE_MANAGER"));
        Manager oliver = this.managers.save(new Manager("oliver", "gierke",
                "ROLE_MANAGER"));

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
                        AuthorityUtils.createAuthorityList("ROLE_MANAGER")));

        this.employees.save(new Employee("Frodo", "Baggins", "ring bearer", greg));
        this.employees.save(new Employee("Bilbo", "Baggins", "burglar", greg));
        this.employees.save(new Employee("Gandalf", "the Grey", "wizard", greg));

        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken("oliver", "doesn't matter",
                        AuthorityUtils.createAuthorityList("ROLE_MANAGER")));

        this.employees.save(new Employee("Samwise", "Gamgee", "gardener", oliver));
        this.employees.save(new Employee("Merry", "Brandybuck", "pony rider", oliver));
        this.employees.save(new Employee("Peregrin", "Took", "pipe smoker", oliver));

        SecurityContextHolder.clearContext();
    }
}