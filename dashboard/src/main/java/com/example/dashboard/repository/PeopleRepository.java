package com.example.dashboard.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.dashboard.model.People;

@Repository

public interface PeopleRepository extends MongoRepository<People,String>{
	
	
	
	public List<People> findByAge(int age);
	

}
