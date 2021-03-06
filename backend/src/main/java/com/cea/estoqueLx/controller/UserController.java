package com.cea.estoqueLx.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cea.estoqueLx.dto.UserDTO;
import com.cea.estoqueLx.services.UserService;

@RestController

public class UserController {
	
	@Autowired
	private UserService service;
	
	@RequestMapping("/users/all")
	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll() {
		List<UserDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
		
	@RequestMapping("/users/add")
	public ResponseEntity<UserDTO> insert (@RequestBody UserDTO dto){
		dto = service.insert(dto);
				
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UserDTO> findOne (@PathVariable Long id){
		UserDTO dto = service.findOne(id);
		return ResponseEntity.ok().body(dto);
	}
}
