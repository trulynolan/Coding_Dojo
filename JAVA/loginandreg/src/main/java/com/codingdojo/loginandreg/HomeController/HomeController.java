package com.codingdojo.loginandreg.HomeController;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.loginandreg.models.LoginUser;
import com.codingdojo.loginandreg.models.User;
import com.codingdojo.loginandreg.services.UserService;

@Controller
public class HomeController {

	@Autowired
	private UserService userServ;
	
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
		return "redirect:/dashboard";
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
		return "redirect:/dashboard";
	}
	
//	If no errors, set the UserID in session.
	@RequestMapping("/dashboard")
	public String dashboard() {
		return "dashboard.jsp";

	}

	@RequestMapping("/newThing")
	public String newThing() {
		return "newThing.jsp";

	}

	@RequestMapping("/oneThing")
	public String oneThing() {
		return "oneThing.jsp";

	}

	@RequestMapping("/editThing")
	public String editThing() {
		return "editThing.jsp";

	}

}
