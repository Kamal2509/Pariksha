package Exam.ExamPortal.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import Exam.ExamPortal.Service.CustomUserDetails;
import Exam.ExamPortal.model.User;
import Exam.ExamPortal.repo.UserRepository;


public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
    private PasswordEncoder encoder; 
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=this.userRepository.findByUsername(username);
		CustomUserDetails customUserDetails = new CustomUserDetails(user);
       if(user==null) {
	   System.out.println("user not found");
	   throw new UsernameNotFoundException("No user found!!");
	
}
       System.out.println("userDetail fetch"+" "+user);
		return customUserDetails;
	}

	 public String addUser(User user) { 
	        user.setPassword(encoder.encode(user.getPassword())); 
	        userRepository.save(user); 
	        return "User Added Successfully"; 
	    } 
	 
}
