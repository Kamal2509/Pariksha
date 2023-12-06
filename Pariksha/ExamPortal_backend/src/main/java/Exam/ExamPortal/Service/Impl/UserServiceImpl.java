package Exam.ExamPortal.Service.Impl;

import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Exam.ExamPortal.Service.UserService;
import Exam.ExamPortal.model.User;
import Exam.ExamPortal.model.UserRole;
import Exam.ExamPortal.repo.RoleRepository;
import Exam.ExamPortal.repo.UserRepository;
@Service
public class UserServiceImpl implements UserService {
@Autowired	
private UserRepository userRepository;
@Autowired
private RoleRepository roleRepository;

	//Creating User
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		User local = userRepository.findByUsername(user.getUsername());
		if(local!=null) {
			throw new Exception("User Already Exist !!");
		}
		else {
			//user create
			for(UserRole ur:userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		
		return local;
	}

	@Override
	public User getUser(String username) {
		
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
		
	}
	

}
