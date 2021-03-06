package com.cea.estoqueLx.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cea.estoqueLx.dto.ProductDTO;
import com.cea.estoqueLx.services.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService service;

	@RequestMapping("/products/add")
	public ResponseEntity<ProductDTO> insert(@RequestBody ProductDTO dto) {
		dto = service.insert(dto);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@RequestMapping("/products/all")
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll() {
		List<ProductDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	
	
	@DeleteMapping("/products/delete/{id}")
	public ResponseEntity<Boolean> delete (@PathVariable (value = "id")  Long id){
		
		Boolean response = false;
		
		try {
			service.delete(id);
			response = true;
		} catch (Exception e) {
			e.getLocalizedMessage();
		}
				
		return ResponseEntity.ok().body(response);
		
	}

	

	@PutMapping("/products/edit")
	public ResponseEntity<ProductDTO> put (@RequestBody ProductDTO dto){
		dto = service.update(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping("/products/updateAmount")
	public ResponseEntity<ProductDTO> putAmout (@RequestBody ProductDTO dto){
		Integer amount = dto.getAmount();
		dto = service.findOne(dto.getId());
		dto.setAmount(amount);
		dto = service.update(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	

	@GetMapping(path = { "/products/findByNameList/{name}" })
	public ResponseEntity<List<ProductDTO>> findByNameList(@PathVariable String name) {
		List<ProductDTO> list = service.loadUserByNameList(name);
		return ResponseEntity.ok().body(list);
	}

}
