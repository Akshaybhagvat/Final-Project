package com.demo.controller;

import java.util.Iterator;

import java.util.List;
import java.util.ListIterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.demo.model.Library;
import com.demo.repository.Libraryrepo;

@RestController
public class Librarycontroller
{
      @Autowired
      private Libraryrepo l1;
      
      public int searchresult;
      public double bprice;
    
     
      
      public double oldprice(String bname)
      {
      	Library l6 = this.l1.getById(bname);
      	return (l6.getBprice());
      }
     
      
      @CrossOrigin(origins="http://localhost:4200")
      @PostMapping("/add")
      
      public void add(@RequestBody Library l2)
      {
      	this.l1.save(l2);
      }
      
      @CrossOrigin(origins="http://localhost:4200")
      @PostMapping("/update")
      
      public void updatadata(@RequestBody Library l3)
      {
      	this.l1.save(l3);
      }
      @CrossOrigin(origins="http://localhost:4200")
  	@PostMapping("/bookstatus")
  	public int bookstatus(@RequestBody Library l4)
  	{
  		List<Library> books = l1.findAll();
  		String sbook = l4.getBname();
  		
  	

         ListIterator i1 = books.listIterator();		
  		while(i1.hasNext())
  		{
  			Library l5 = (Library) i1.next();
  		
  			String result = l5.getBname();
  			
  		
  		if(sbook.equals(result))
			{
			searchresult = 1;
			  break;
			}
  		   else 	  
			{
				searchresult = 0;
			}
  		}
  		
  		
  	  return searchresult;	
  	 
  		
  	} 
      
      @CrossOrigin(origins="http://localhost:4200")
  	   @ResponseBody
      @GetMapping("/search")
        public int search()
  	{
  		
  		return searchresult;
  	}
      
      @CrossOrigin(origins="http://localhost:4200")
      @PostMapping("/viewprice")
      
      public double viewprice(@RequestBody Library l5)
      {
      	  String bname1 = l5.getBname();
      	   bprice = oldprice(bname1); 
      	 
      	  return bprice;
      }
      
      @CrossOrigin(origins="http://localhost:4200")
 	   @ResponseBody
     @GetMapping("/getprice")
       public double getprice()
 	{
    	return bprice; 
 	}
      
      
}
