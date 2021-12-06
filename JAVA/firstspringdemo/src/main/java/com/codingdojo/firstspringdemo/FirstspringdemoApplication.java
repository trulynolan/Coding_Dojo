package com.codingdojo.firstspringdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class FirstspringdemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstspringdemoApplication.class, args);
		
	}	
		
		@RequestMapping("/")
		public String index() {
			return "Hello world";
		}
		
		
		@RequestMapping("/buttseat")
		public String buttSeat() {
			return "Butts are for seats";
		}
		
		@RequestMapping (value= "/thisPlace", method=RequestMethod.GET)
		public String thisPlace() {
			return "Woah, this is a place.";
		}

}


