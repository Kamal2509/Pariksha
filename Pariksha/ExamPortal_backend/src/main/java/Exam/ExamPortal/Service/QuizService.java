package Exam.ExamPortal.Service;

import java.util.Set;

import Exam.ExamPortal.model.exam.Quiz;

public interface QuizService {

	public Quiz addQuiz(Quiz quiz);
	
	public Quiz updateQuiz(Quiz quiz);
	
	public Set<Quiz> getQuizzeS();
	
	public Quiz getQuiz(Long quizId);
	
	public void deleteQuiz(Long quizId);
}
