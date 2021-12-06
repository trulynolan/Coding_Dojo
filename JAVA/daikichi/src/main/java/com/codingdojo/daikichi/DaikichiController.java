package com.codingdojo.daikichi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
@RestController


@SpringBootApplication
public class DaikichiController {

	public static void main(String[] args) {
		SpringApplication.run(DaikichiController.class, args);
	}
	
	@RequestMapping("/daikichi")
	public String index() {
		return "Welcome younglings!";
	}
	
	@RequestMapping("/today")
	public String today() {
		return "Today you will find luck on your endeavors!";
	}
	
	
	
	
}
