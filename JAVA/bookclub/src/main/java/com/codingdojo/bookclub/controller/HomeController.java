package com.codingdojo.bookclub.controller;

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
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.LoginUser;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

@Controller
public class HomeController {

	@Autowired
	private UserService userServ;
	@Autowired
	private BookService bookServ;

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
		return "redirect:/books";
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
		return "redirect:/books";
	}

//	If no errors, set the UserID in session.
	@RequestMapping("/books")
	public String dashboard(Model model, HttpSession session) {

		if (session.getAttribute("user_id") != null) {
			Long user_id = (Long) session.getAttribute("user_id");
			model.addAttribute("user", userServ.oneUser(user_id));
			List<Book> allBooks = bookServ.allBooks();
			model.addAttribute("books", allBooks);
			return "books.jsp";
		} else {
			return "redirect:/";
		}
	}

	@RequestMapping("/show/{id}")
	public String showBook(@PathVariable("id") Long id, Model model, HttpSession session) {
		model.addAttribute("book", bookServ.getBook(id));
		return "show.jsp";

	}

	@RequestMapping("/books/new")
	public String newBook(Model model, HttpSession session) {
		Long user_id = (Long) session.getAttribute("user_id");
		model.addAttribute("user", userServ.oneUser(user_id));
		model.addAttribute("book", new Book());
		return "new.jsp";
	}

	@RequestMapping(value = "/books/post", method = RequestMethod.POST)
	public String postBook(@Valid @ModelAttribute("book") Book book, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("books", new Book());
			return "new.jsp";
		} else {
			bookServ.createBook(book);
			return "redirect:/books";
		}
	}

	@RequestMapping("/books/{id}/edit")
	public String editBook(@PathVariable("id") Long id, Model model, HttpSession session) {
		model.addAttribute("book", bookServ.getBook(id));
		Long user_id = (Long) session.getAttribute("user_id");
		model.addAttribute("user", userServ.oneUser(user_id));
		return "edit.jsp";
	}

	@PutMapping("/books/update/{id}")
	public String bookUpdate(@PathVariable("id") Long id, @Valid @ModelAttribute("book") Book book,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("book", bookServ.getBook(id));
			return "edit.jsp";
		} else {
			bookServ.updateBook(book);
			return "redirect:/books";
		}
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("user_id");
		return "redirect:/";
	}
}
