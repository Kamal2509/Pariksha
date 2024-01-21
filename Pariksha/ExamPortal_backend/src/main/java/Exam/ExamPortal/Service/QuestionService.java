package Exam.ExamPortal.Service;

import java.util.Set;

import Exam.ExamPortal.model.exam.Question;
import Exam.ExamPortal.model.exam.Quiz;

public interface QuestionService {

	public Question addQuestion(Question question);
	
	public Question updateQuestion(Question question);
	
	public Question getQuestion(Long questionId);
	
	public Set<Question> getQuestions();
	
	public Set<Question> getQuestionsofQuiz(Quiz quiz);
	
	public void deleteQuestion(Long questionId);
	
	
	
}
