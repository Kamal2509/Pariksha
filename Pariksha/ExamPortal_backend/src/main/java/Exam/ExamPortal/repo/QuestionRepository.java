package Exam.ExamPortal.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import Exam.ExamPortal.model.exam.Question;
import Exam.ExamPortal.model.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long>{

	Set<Question> findByQuiz(Quiz quiz);

}
