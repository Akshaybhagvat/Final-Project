package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Library 
{
     @Id
     private String bname;
     private String bauthor;
     private double bprice;
     
	public Library() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Library(String bname, String bauthor, double bprice) {
		super();
		this.bname = bname;
		this.bauthor = bauthor;
		this.bprice = bprice;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getBauthor() {
		return bauthor;
	}
	public void setBauthor(String bauthor) {
		this.bauthor = bauthor;
	}
	public double getBprice() {
		return bprice;
	}
	public void setBprice(double bprice) {
		this.bprice = bprice;
	}
     
     
}
