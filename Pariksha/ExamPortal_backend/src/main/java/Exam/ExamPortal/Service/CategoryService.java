package Exam.ExamPortal.Service;

import java.util.Set;

import Exam.ExamPortal.model.exam.Category;

public interface CategoryService {
	
 public Category addCategory(Category category);
 
 public Category updateCategory(Category category);
 
 public Set<Category> getCategories();
 
 public Category getCategory(Long categoryId);
 
 public void deletecategory(Long categoryId);
 
}
