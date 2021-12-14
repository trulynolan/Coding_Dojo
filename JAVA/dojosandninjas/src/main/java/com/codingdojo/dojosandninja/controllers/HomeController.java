package com.codingdojo.dojosandninja.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.codingdojo.dojosandninja.models.Dojo;
import com.codingdojo.dojosandninja.models.Ninja;
import com.codingdojo.dojosandninja.services.DojoService;
import com.codingdojo.dojosandninja.services.NinjaService;

@Controller

public class HomeController {
	@Autowired
	DojoService dojoService;

	@Autowired
	NinjaService ninjaService;

	@RequestMapping("/dojos/new")
	public String dojoForm(Model model, @ModelAttribute("dojos") Dojo dojo) {
		return "index.jsp";
	}

	@RequestMapping(value = "/newdojo", method = RequestMethod.POST)
	public String createDojo(@Valid @ModelAttribute("dojos") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "index.jsp";
		} else {
			dojoService.createDojo(dojo);
			return "redirect:/ninjas/new";
		}
	}
	

	@RequestMapping("/ninjas/new")
	public String ninja(Model model, @ModelAttribute("ninjas") Ninja ninja) {
		model.addAttribute("dojos", dojoService.allDojos());
		return "newNinja.jsp";
	}

	@PostMapping("/newninja")
	public String createNinja(Model model,@Valid @ModelAttribute("ninjas") Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			model.addAttribute("dojos", dojoService.allDojos());
			return "newNinja.jsp";
		}
		else {
		ninjaService.createNinja(ninja);
		Dojo dojo=ninja.getDojo();
		Long  id=dojo.getId();
		return "redirect:/dojos/"+id;
		}
	}

	@RequestMapping("dojos/{id}")
	public String getNinjaByDojo(Model model, @PathVariable Long id){
		Dojo dojo = dojoService.findDojoById(id);
		model.addAttribute("dojo", dojo);
		return "dojoninjas.jsp";
	}
}
