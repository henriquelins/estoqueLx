package com.cea.estoqueLx.dto;

import java.io.Serializable;

import com.cea.estoqueLx.model.Product;


public class ProductDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Integer amount;
	private String description;
	private String imageuri;
	
	public ProductDTO () {
		
	}
	
	public ProductDTO(Long id, String name, Integer amount, String description, String imageUri, String imageuri) {
		this.id = id;
		this.name = name;
		this.amount = amount;
		this.description = description;
		this.imageuri = imageuri;
	}
	
	public ProductDTO(Product entity) {
		id = entity.getId();
		name = entity.getName();
		amount = entity.getAmount();
		description = entity.getDescription();
		imageuri = entity.getImageUri();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUri() {
		return imageuri;
	}

	public void setImageUri(String imageuri) {
		this.imageuri = imageuri;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProductDTO other = (ProductDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
