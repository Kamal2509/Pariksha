package Exam.ExamPortal.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import Exam.ExamPortal.model.exam.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
