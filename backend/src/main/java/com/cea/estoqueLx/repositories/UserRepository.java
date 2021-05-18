package com.cea.estoqueLx.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cea.estoqueLx.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	List<User> findAll();
	
	@Query("select u from User u where u.email = ?1")
	User findOne(String email);

	
}