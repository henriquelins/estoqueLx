package com.cea.estoqueLx.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cea.estoqueLx.dto.ProductDTO;
import com.cea.estoqueLx.model.Product;
import com.cea.estoqueLx.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public ProductDTO findOne(Long id) {
		Optional<Product> product = productRepository.findById(id);
		return new ProductDTO(product.get());
	}

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = productRepository.findAll();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	public ProductDTO insert(ProductDTO dto) {
		Product produt = new Product(null, dto.getName(), dto.getAmount(), dto.getDescription(), dto.getImageUri());
		produt = productRepository.save(produt);
		return new ProductDTO(produt);
	}

	@Transactional
	public void delete(Long id) {
		productRepository.deleteById(id);
	}

	@Transactional
	public ProductDTO update(ProductDTO dto) {
		Product product = new Product(dto.getId(), dto.getName(), dto.getAmount(), dto.getDescription(),
				dto.getImageUri());
		product = productRepository.save(product);
		return new ProductDTO(product);
	}

	@Transactional
	public List<ProductDTO> loadUserByNameList(String name) {
		List<Product> list = productRepository.findByNameList(name);
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

}
