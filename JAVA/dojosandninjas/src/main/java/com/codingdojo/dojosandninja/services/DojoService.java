package com.codingdojo.dojosandninja.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninja.models.Dojo;
import com.codingdojo.dojosandninja.repositories.DojoRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepo;

	public DojoService(DojoRepository dojoRepo) {
		this.dojoRepo = dojoRepo;
	}

	public Dojo createDojo(Dojo d) {
		return dojoRepo.save(d);
	}

	public Object allDojos() {
		return dojoRepo.findAll();
	}

	public Dojo findDojoById(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if (optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}

}
