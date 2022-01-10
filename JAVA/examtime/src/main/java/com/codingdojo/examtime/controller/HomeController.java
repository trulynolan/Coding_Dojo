package com.codingdojo.examtime.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.examtime.models.Course;
import com.codingdojo.examtime.models.LoginUser;
import com.codingdojo.examtime.models.User;
import com.codingdojo.examtime.services.CourseService;
import com.codingdojo.examtime.services.UserService;

@Controller
public class HomeController {

	@Autowired
	private UserService userServ;
	private final CourseService courseServ;

	public HomeController(UserService userServ, CourseService courseServ) {
		this.userServ = userServ;
		this.courseServ = courseServ;
	}

//	This route renders the forms for login and reg.
	@GetMapping("/")
	public String index(Model model) {
		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}

//	This route is the action for submitting the login and registration form.
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
//		This calls on the register method in service - sends in the newUser info and the results from the binding result.
		userServ.register(newUser, result);
//		If we have any errors, we stay on that page and display the errors. 
		if (result.hasErrors()) {
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
//		If everything is good, set the userId in session.
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/classes";
	}

//	This route is the action for submitting the login form.
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {

		User user = userServ.login(newLogin, result);
//		If we have any errors we stay on the page and display errors.
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}
		session.setAttribute("user_id", user.getId());
		return "redirect:/classes";
	}

	@GetMapping("/classes")
	public String dashboard(HttpSession session, Model model) {
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		Long userId = (Long) session.getAttribute("user_id");
		User user = userServ.getUserInfo(userId);
		model.addAttribute("user", user);
		
		model.addAttribute("courses", courseServ.allCourses());
		return "classes.jsp";
	}


	@RequestMapping("/classes/{id}/edit")
	public String editCourse(@PathVariable("id") Long id, Model model, HttpSession session) {
		model.addAttribute("course", courseServ.getOneCourse(id));
		Long user_id = (Long) session.getAttribute("user_id");
		model.addAttribute("user", userServ.oneUser(user_id));
		return "edit.jsp";
	}

	@PutMapping("/classes/update/{id}")
	public String courseUpdate(@PathVariable("id") Long id, @Valid @ModelAttribute("course") Course course,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("course", course);
			return "edit.jsp";
		} else {
			courseServ.updateCourse(course);
			return "redirect:/classes";
		}
	}
	
	@GetMapping("/classes/new")
	public String newCourse(HttpSession session, RedirectAttributes flash, Model model) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			flash.addFlashAttribute("login", "Please login or register before entering");
			return "redirect:/";
		}
		
		model.addAttribute("userId", userId);
		model.addAttribute("course", new Course());
		return "new.jsp";
	}
	
	@PostMapping("/classes/create")
	public String createCourse(@Valid @ModelAttribute("course") Course course, BindingResult result) {
		if (result.hasErrors()) {
			return "new.jsp";
			
		} else {
			courseServ.saveCourse(course);
			return "redirect:/classes";
			
		}
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user_id");
		return "redirect:/";
	}

//	If no errors, set the UserID in session.
	@RequestMapping("/classes")
	public String classes(HttpSession session, Model model) {
		if (session.getAttribute("user_id") != null) {
			Long user_id = (Long) session.getAttribute("user_id");
			model.addAttribute("user", userServ.oneUser(user_id));
			List<Course> allBooks = courseServ.allCourses();
			model.addAttribute("books", allBooks);
			return "classes.jsp";
		} else {
			return "redirect:/";
		}
	}
	
	@RequestMapping("/{id}/delete")
	public String delete (@PathVariable("id") Long id) {
		courseServ.deleteCourse(id);
		return "redirect:/classes";
	}
	
	
	@RequestMapping("/view/{id}")
	public String getOneCourse(@PathVariable("id") Long id, Model model, HttpSession session) {
		model.addAttribute("course", courseServ.getOneCourse(id));
		return "view.jsp";
	}
}
