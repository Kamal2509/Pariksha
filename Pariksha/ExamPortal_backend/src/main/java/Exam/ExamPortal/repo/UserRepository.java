package Exam.ExamPortal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Exam.ExamPortal.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByUsername(String username);
}
