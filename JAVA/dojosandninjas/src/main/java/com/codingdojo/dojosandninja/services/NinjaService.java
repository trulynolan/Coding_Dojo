package com.codingdojo.dojosandninja.services;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninja.models.Ninja;
import com.codingdojo.dojosandninja.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepo;

	public NinjaService(NinjaRepository ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}

	public Ninja createNinja(Ninja n) {
		return ninjaRepo.save(n);
		
	}

}
