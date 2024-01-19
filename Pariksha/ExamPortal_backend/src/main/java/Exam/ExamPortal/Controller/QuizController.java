package Exam.ExamPortal.Controller;

import java.util.ArrayList;
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

import Exam.ExamPortal.Service.CategoryService;
import Exam.ExamPortal.Service.QuizService;
import Exam.ExamPortal.model.exam.Category;
import Exam.ExamPortal.model.exam.Question;
import Exam.ExamPortal.model.exam.Quiz;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	@Autowired
	private QuizService quizService;
	@Autowired
	private CategoryService categoryService;

	// add a new quiz
	@PostMapping("/")
	public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz) {
		
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}

	//update quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
		return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}
	
	//Get Quizzes
	@GetMapping("/")
	public ResponseEntity<?> quizzes(){
		return ResponseEntity.ok(this.quizService.getQuizzeS());
	}
	
	// Get Single quiz
	@GetMapping("/{qid}")
	public Quiz quiz(@PathVariable("qid") Long qid) {
		return this.quizService.getQuiz(qid);
		
	}
	
	//delete Quiz
	@DeleteMapping("/{qid}")
	public void deleteQuiz(@PathVariable("qid") Long qid) {
		this.quizService.deleteQuiz(qid);
	}
	
	//get Quizs for Category
	@GetMapping("/category/{cid}")
		public ResponseEntity<?> getQuizzes(@PathVariable("cid") Long cid){
		Category category=this.categoryService.getCategory(cid);
		Set<Quiz> quizs=category.getQuizzed();
		List list= new ArrayList(quizs);
			return ResponseEntity.ok(list);
		}
	
	//evaluate Quiz
	
	@PostMapping("/evaluateQuiz")
	public ResponseEntity<?> evaluateQuiz(@RequestBody List<Question> questions ){
		System.out.println(questions);
		return ResponseEntity.ok("got questions with answer");
	}
	
	
}
