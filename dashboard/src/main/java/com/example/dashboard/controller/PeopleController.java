package com.example.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.dashboard.model.People;
import com.example.dashboard.service.PeopleService;

@RestController
public class PeopleController {
	
	@Autowired
	private PeopleService peopleService;

	@CrossOrigin
	@PostMapping("/create")
	public String create(@RequestBody People people) {
		People p = peopleService.create(people);
		return p.toString();
	}

	@CrossOrigin
	@GetMapping("/getAll")
	public List<People> getAll(){
		return peopleService.getAll();
	}

	@CrossOrigin
	@DeleteMapping("/deleteAll")
	public String deleteAll() { 
		peopleService.deleteAll();
		return "Deleted all records";
	}
	@CrossOrigin
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") String id) {
	  try {
	    peopleService.deleteById(id);
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	  } catch (Exception e) {
	    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	  }
	}
}
