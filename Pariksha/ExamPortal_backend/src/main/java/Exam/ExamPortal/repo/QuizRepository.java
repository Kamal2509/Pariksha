package Exam.ExamPortal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Exam.ExamPortal.model.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

}
