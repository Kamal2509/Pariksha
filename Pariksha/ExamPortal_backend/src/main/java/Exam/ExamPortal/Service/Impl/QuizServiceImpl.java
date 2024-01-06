package Exam.ExamPortal.Service.Impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Exam.ExamPortal.Service.QuizService;
import Exam.ExamPortal.model.exam.Quiz;
import Exam.ExamPortal.repo.QuizRepository;
@Service
public class QuizServiceImpl implements QuizService{
  @Autowired
	private QuizRepository quizRepository;
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	
	}

	@Override
	public Set<Quiz> getQuizzeSet() {
	return new LinkedHashSet<Quiz>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		return this.quizRepository.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		this.quizRepository.deleteById(quizId);
		
	}

}
