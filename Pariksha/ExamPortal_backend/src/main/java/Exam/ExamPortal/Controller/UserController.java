package Exam.ExamPortal.Controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Exam.ExamPortal.Service.UserService;
import Exam.ExamPortal.model.Role;
import Exam.ExamPortal.model.User;
import Exam.ExamPortal.model.UserRole;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	@Autowired
private UserService userService;
	
@PostMapping("/")
public User createUser(@RequestBody User user) throws Exception{
	
	Role role = new Role();
	role.setRoleId(45L);
	role.setRolename("Normal");
	
	UserRole userRole = new UserRole();
	userRole.setUser(user);
	userRole.setRole(role);
	
	Set<UserRole>roles=new HashSet<>();
	roles.add(userRole);
	
	return this.userService.createUser(user, roles);
	
}
@GetMapping("/{username}")
public User getuser(@PathVariable("username") String username) {
	return this.userService.getUser(username);
}
@DeleteMapping("/{userId}")
public void deleteUser(@PathVariable("userId") Long userId) {
	this.userService.deleteUser(userId);
}

@GetMapping("/")
public String getuser() {
	return "this is home page";
}

}
