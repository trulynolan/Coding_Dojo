package com.codingdojo.poke.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

//...
import org.springframework.stereotype.Service;
import com.codingdojo.poke.models.Poke;
import com.codingdojo.poke.repositories.PokeRepository;

@Service
public class PokeServices {
	private final PokeRepository pokeRepository;

	public PokeServices(PokeRepository pokeRepository) {
		this.pokeRepository = pokeRepository;
	}

//	 returns all the books
	public List<Poke> allPoke() {
		return pokeRepository.findAll();
	}

	public Poke createPoke(Poke p) {
		// TODO Auto-generated method stub
		return pokeRepository.save(p);

	}

	public Poke findPoke(Long id) {
		Optional<Poke> optionalPoke = pokeRepository.findById(id);
		if (optionalPoke.isPresent()) {
			return optionalPoke.get();
		} else {
			return null;
		}
	}

	public Poke updatePoke(Poke p) {
		// TODO Auto-generated method stub
		return pokeRepository.save(p);
	}
	
	public void destroyPoke(Long id) {
		// TODO Auto-generated method stub
		pokeRepository.deleteById(id);
	}
	
	
	
}
