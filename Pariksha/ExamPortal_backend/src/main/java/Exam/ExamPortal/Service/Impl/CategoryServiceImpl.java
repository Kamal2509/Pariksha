package Exam.ExamPortal.Service.Impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Exam.ExamPortal.Service.CategoryService;
import Exam.ExamPortal.model.exam.Category;
import Exam.ExamPortal.repo.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category addCategory(Category category) {
		return this.categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return this.categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategories() {
	return new LinkedHashSet<Category>(this.categoryRepository.findAll()) ;
	}

	@Override
	public Category getCategory(Long categoryId) {
	return this.categoryRepository.findById(categoryId).get() ;
	}

	@Override
	public void deletecategory(Long categoryId) {
		this.categoryRepository.deleteById(categoryId);;
	}

}
