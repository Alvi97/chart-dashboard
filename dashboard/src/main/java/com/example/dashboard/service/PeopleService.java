package com.example.dashboard.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dashboard.model.People;
import com.example.dashboard.repository.PeopleRepository;

@Service

public class PeopleService {

	@Autowired
	private PeopleRepository peopleRepository;
	
	
	//Create operation
	public People create(People people) {
		return peopleRepository.save(people);
	}
	//Retrieve operation
	public List<People> getAll(){
		return peopleRepository.findAll();
	}
	//Delete operation
	public void deleteAll() {
		peopleRepository.deleteAll();
	}
	
	public void deleteById(String id) {
		peopleRepository.deleteById(id);
	}
	
	
}
