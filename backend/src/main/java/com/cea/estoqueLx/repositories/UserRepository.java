package com.cea.estoqueLx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cea.estoqueLx.model.User;

import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
	
	List<User> findAll();

	
	@Query("select u from User u where u.email = ?1")
	User findOne(String email);
	
	@Query("SELECT u FROM User u WHERE u.username = ?1")
	User findByName(String nome);
	
	@Query("SELECT u FROM User u WHERE u.username LIKE %?1%")
	List<User> findByNameList(String nome);

	
}
