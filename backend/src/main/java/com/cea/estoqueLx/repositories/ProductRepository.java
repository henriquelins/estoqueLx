package com.cea.estoqueLx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cea.estoqueLx.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAll();
	
	@Query("SELECT u FROM Product u WHERE u.name LIKE %?1%")
	List<Product> findByNameList(String name);
		
}
