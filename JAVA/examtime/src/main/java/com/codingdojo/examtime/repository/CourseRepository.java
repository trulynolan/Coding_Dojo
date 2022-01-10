package com.codingdojo.examtime.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.examtime.models.Course;

public interface CourseRepository extends CrudRepository<Course, Long>{
	Optional<Course> findById(Long id);
	
	List<Course> findAll();
	void deleteById(Long id);
}
