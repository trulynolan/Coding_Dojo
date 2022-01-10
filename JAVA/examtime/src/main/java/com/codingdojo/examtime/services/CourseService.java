package com.codingdojo.examtime.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.examtime.models.Course;
import com.codingdojo.examtime.repository.CourseRepository;

@Service
public class CourseService {
	@Autowired
	private final CourseRepository courseRepo;
	public CourseService(CourseRepository courseRepo) {
		this.courseRepo=courseRepo;
	}
	
	public List<Course> allCourses() {
		return courseRepo.findAll();
	}
	
	public Course saveCourse(Course c) {
		return courseRepo.save(c);
	}
	
	public Course getOneCourse(Long id) {
		Optional<Course> optionalBook = courseRepo.findById(id);
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	public Course updateCourse(Course course) {
		return courseRepo.save(course);
	}
	
	public void deleteCourse(Long id) {
		courseRepo.deleteById(id);
	}
	
}
