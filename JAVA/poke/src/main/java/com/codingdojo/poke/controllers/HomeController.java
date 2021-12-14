package com.codingdojo.poke.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.poke.models.Poke;
import com.codingdojo.poke.services.PokeServices;

@Controller
public class HomeController {
	@Autowired
	PokeServices pokeServices;

	@RequestMapping("/dashboard")
	public String index(Model model) {
		model.addAttribute("dad", new Poke());
		List<Poke> poke = pokeServices.allPoke();
		model.addAttribute("poke", poke);
		return "index.jsp";
	}

	@RequestMapping(value = "/expenses", method = RequestMethod.POST)
	public String create(Model model, @Valid @ModelAttribute("dad") Poke poke, BindingResult result) {
		if (result.hasErrors()) {
			List<Poke> poke1 = pokeServices.allPoke();
			model.addAttribute("poke", poke1);
			return "index.jsp";
		}

		else {
			pokeServices.createPoke(poke);
			return "redirect:/dashboard";

		}
	}

	@RequestMapping("/expenses/{id}/edit")
	public String edit(Model model, @PathVariable("id") Long id) {
		model.addAttribute("poke", pokeServices.findPoke(id));
		return "edit.jsp";
	}

	@RequestMapping(value = "/expenses/poke/{id}", method = RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("updatePoke") Poke poke, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			pokeServices.updatePoke(poke);
			return "redirect:/dashboard";
		}
	}

	@RequestMapping(value = "/onepoke/delete/{id}")
	public String destroy(@PathVariable("id") Long id) {
		pokeServices.destroyPoke(id);
		return "redirect:/dashboard";
	}
	
	@RequestMapping("/onePoke/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
    	model.addAttribute("poke", pokeServices.findPoke(id));
        return "show.jsp";
    }
	
}
