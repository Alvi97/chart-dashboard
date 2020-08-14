package com.example.dashboard.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document

public class People {
	@Id
	String id;
	String firstName;
	String lastName;
	String    age;
	String origjina;
	String paga;
	String gjinia;
	String eksperienca;
	
	public People(String firstName, String lastName, String age,String origjina,String paga,String gjinia,String eksperienca) {
		this.firstName = firstName;
		this.lastName  = lastName;
		this.age       = age;
		this.origjina = origjina;
		this.paga = paga;
		this.gjinia=gjinia;
		this.eksperienca=eksperienca;
		
	}

	public People() {
		super();
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getOrigjina() {
		return origjina;
	}

	public void setOrigjina(String origjina) {
		this.origjina = origjina;
	}

	public String getPaga() {
		return paga;
	}

	public void setPaga(String paga) {
		this.paga = paga;
	}

	public String getGjinia() {
		return gjinia;
	}

	public void setGjinia(String gjinia) {
		this.gjinia = gjinia;
	}

	public String getEksperienca() {
		return eksperienca;
	}

	public void setEksperienca(String eksperienca) {
		this.eksperienca = eksperienca;
	}

	public String toString() {
		return "Name:"+firstName+" Last Name:"+lastName+" age:"+age+"origjina:"+origjina+"paga:"+paga+"gjinia:"+gjinia+"eksperienca:"+eksperienca+"";
	}
	
	
}
