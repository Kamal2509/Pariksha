package Exam.ExamPortal.Service;

import java.util.Set;

import Exam.ExamPortal.model.User;
import Exam.ExamPortal.model.UserRole;

public interface UserService {
// Create User
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
// Get user from database
	public User getUser(String username);
	
	// Delete user
	public void deleteUser(Long userId);
}
