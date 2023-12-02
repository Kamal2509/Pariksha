package Exam.ExamPortal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import Exam.ExamPortal.Service.UserService;

@SpringBootApplication
public class ExamPortalApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(ExamPortalApplication.class, args);

	}
	@Autowired
    UserService userService;
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Code Running");
		/*User user = new User();
		user.setFirstname("kamal1");
		user.setLastname("Sharma1");
		user.setUsername("Kamal1234"); // it should be unique
		user.setPassword("abcd");
		user.setEmail("Kamal@midasit.com");
		
		Role role1 = new Role();
		role1.setRoleId(40L);
		role1.setRolename("Admin");
		
		UserRole userRole = new UserRole();
		userRole.setRole(role1);
		userRole.setUser(user);
		
		Set<UserRole> userRoleset =new HashSet<>();			
		userRoleset.add(userRole);
		
		User user1=this.userService.createUser(user,userRoleset);
		System.out.println(user1.getUsername());*/
		
	}

}
