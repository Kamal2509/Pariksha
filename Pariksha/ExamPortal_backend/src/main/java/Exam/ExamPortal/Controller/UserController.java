package Exam.ExamPortal.Controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import Exam.ExamPortal.Security.JwtHelper;
import Exam.ExamPortal.Service.CustomUserDetails;
import Exam.ExamPortal.Service.UserService;
import Exam.ExamPortal.Service.Impl.UserDetailsServiceImpl;
import Exam.ExamPortal.model.JwtRequest;
import Exam.ExamPortal.model.JwtResponse;
import Exam.ExamPortal.model.Role;
import Exam.ExamPortal.model.User;
import Exam.ExamPortal.model.UserRole;

@RestController
@CrossOrigin
@RequestMapping("/")
public class UserController {
	@Autowired
	private UserService userService;

	@PostMapping("signup")
	public User createUser(@RequestBody User user) throws Exception {

		Role role = new Role();
		role.setRoleId(45L);
		role.setRolename("Normal");
		
		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);

		Set<UserRole> roles = new HashSet<>();
		roles.add(userRole);

		return this.userService.createUser(user, roles);

	}

	@GetMapping("/user/{username}")
	public User getuser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}

	@DeleteMapping("user/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}

	@GetMapping("")
	public String getuser() {
		return "this is home page";
	}

	@GetMapping("currentUser")
	public CustomUserDetails getcurrentuser(Principal principle) {
		System.out.println("what is principle"+" "+principle);
		return (CustomUserDetails)this.userDetailsService.loadUserByUsername(principle.getName());
	}

//
	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Autowired
	private AuthenticationManager manager;

	@Autowired
	private JwtHelper helper;

	@PostMapping("login")
	public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

		this.doAuthenticate(request.getUsername(), request.getPassword());

		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

		String token = this.helper.generateToken(userDetails);

		JwtResponse response = new JwtResponse(token);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	private void doAuthenticate(String username, String password) {
		//System.out.println("Authenticate" + " " + username + " " + password);
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(username,
				password);
		try {
			manager.authenticate(authentication);

		} catch (BadCredentialsException e) {
			throw new BadCredentialsException(" Invalid Username or Password  !!");
		}

	}

	@ExceptionHandler(BadCredentialsException.class)
	public String exceptionHandler() {
		return "Credentials Invalid !!";
	}

}
