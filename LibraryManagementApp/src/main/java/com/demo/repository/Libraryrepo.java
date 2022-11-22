package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Library;

@Repository
public interface Libraryrepo extends JpaRepository<Library, String>
{
      
}
