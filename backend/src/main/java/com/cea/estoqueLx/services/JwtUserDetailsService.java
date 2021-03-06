package com.cea.estoqueLx.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.cea.estoqueLx.dto.UserDTO;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		UserDTO dto = userService.getByEmail(email);
		
		try {
			
			return new User(dto.getEmail(), dto.getPassword(), new ArrayList<>());

		} catch (java.lang.NullPointerException e) {

			System.out.println("Usuário não encontrado1! " + e);
			dto.setEmail("");
			dto.setPassword("");
			
			return new User(dto.getEmail(), dto.getPassword(), new ArrayList<>());
		}
		
	}

}
