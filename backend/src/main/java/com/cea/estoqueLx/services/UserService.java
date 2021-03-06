package com.cea.estoqueLx.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cea.estoqueLx.dto.UserDTO;
import com.cea.estoqueLx.model.User;
import com.cea.estoqueLx.repositories.UserRepository;



@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional(readOnly = true)
	public List<UserDTO> findAll() {
		List<User> list = userRepository.findAll();
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}
		
	@Transactional(readOnly = true)
	public UserDTO findOne(Long id) {
		Optional<User> user = userRepository.findById(id);
		return new UserDTO(user.get());
	}

	@Transactional
	public UserDTO insert(UserDTO dto) {
				
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		
		User user = new User(null, dto.getUsername(), dto.getEmail(), dto.getPassword());
	
		user = userRepository.save(user);
		return new UserDTO(user);
	}
	

	public UserDTO getByEmail(String email) {
		
		try {
			
			User user = userRepository.findOne(email);
			return new UserDTO(user);
			
		} catch (Exception e) {
			
			System.out.println("E-mail não encontrado. Erro: " + e);
			return null;
		}
		
		
		
	}
	
	@Transactional
	public void delete(Long id) {
		userRepository.deleteById(id);
	}

	@Transactional
	public UserDTO loadUserByName( String username ) {
		User user = userRepository.findByName(username);
		return new UserDTO(user);
	}
	
	@Transactional
	public List<UserDTO> loadUserByNameList(String username) {
		List<User> list = userRepository.findByNameList(username);
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}

}
