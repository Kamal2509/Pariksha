package Exam.ExamPortal.Service.Impl;

import java.nio.file.attribute.UserPrincipalNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import Exam.ExamPortal.Service.CustomUserDetails;
import Exam.ExamPortal.model.User;
import Exam.ExamPortal.repo.UserRepository;


public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=this.userRepository.findByUsername(username);
		CustomUserDetails customUserDetails = new CustomUserDetails(user);
       if(user==null) {
	   System.out.println("user not found");
	   throw new UsernameNotFoundException("No user found!!");
	
}
		return customUserDetails;
	}

}
