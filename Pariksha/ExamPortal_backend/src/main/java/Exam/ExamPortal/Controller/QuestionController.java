package Exam.ExamPortal.Controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Exam.ExamPortal.Service.QuestionService;
import Exam.ExamPortal.Service.QuizService;
import Exam.ExamPortal.model.exam.Question;
import Exam.ExamPortal.model.exam.Quiz;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	@Autowired
	private QuestionService questionService;
	@Autowired
	private QuizService quizService;
	//add a question
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.addQuestion(question));
	}

	//update Question
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question){
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
	}
	
	//get question
	@GetMapping("/{quesid}")
	public Question question(@PathVariable("quesid") Long quesid) {
		return this.questionService.getQuestion(quesid);
	}
	 
	// get Questions
	@GetMapping("/")
	public ResponseEntity<?> questions(){
		return ResponseEntity.ok(this.questionService.getQuestions());
	}
	
	//get question for quiz
	@GetMapping("/quiz/{qid}")
	public ResponseEntity<?> getQuestionsofQuiz(@PathVariable("qid") Long qid){
		Quiz quiz = this.quizService.getQuiz(qid);
		Set<Question> questions=quiz.getQuestions();
		List<Question> list= new ArrayList<>(questions);
		if(list.size()>Integer.parseInt(quiz.getNumberofQuestions())){
			list=list.subList(0, Integer.parseInt(quiz.getNumberofQuestions()+1));
		}
		list.forEach((q)->{
			q.setAnswer("");
		});
		Collections.shuffle(list);
		return ResponseEntity.ok(list);
	}
	
	
	// delete question
	
	@DeleteMapping("/{quesid}")
	public void delete(@PathVariable("quesid") Long quesid) {
		this.questionService.deleteQuestion(quesid);
	}
}
