package com.example.dashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.dashboard.model.People;
import com.example.dashboard.service.PeopleService;

@RestController
public class PeopleController {
	
	@Autowired
	private PeopleService peopleService;
	@CrossOrigin(origins = "http://lcalhost:4200")
	@RequestMapping(value="/create",method=RequestMethod.POST)
	public String create(@RequestBody People people) {
		People p = peopleService.create(people);
		return p.toString();
	}
	

	@RequestMapping(value="/getAll" , method=RequestMethod.GET)
	public List<People> getAll(){
		return peopleService.getAll();
	}


	@RequestMapping ("/deleteAll")
	public String deleteAll() { 
		peopleService.deleteAll();
		return "Deleted all records";
	}
	 
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
