package Exam.ExamPortal.Service.Impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Exam.ExamPortal.Service.QuestionService;
import Exam.ExamPortal.model.exam.Question;
import Exam.ExamPortal.model.exam.Quiz;
import Exam.ExamPortal.repo.QuestionRepository;
@Service
public class QuestionServiceImpl implements QuestionService{
@Autowired

private QuestionRepository questionRepository;
	
	@Override
	public Question addQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		return this.questionRepository.save(question);
	}

	@Override
	public Question getQuestion(Long questionId) {
		return this.questionRepository.findById(questionId).get();
	}

	@Override
	public Set<Question> getQuestions() {
		return new LinkedHashSet<Question>(this.questionRepository.findAll());
	}

	@Override
	public Set<Question> getQuestionsofQuiz(Quiz quiz) {
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestion(Long questionId) {
		this.questionRepository.deleteById(questionId);
		
	}

}
