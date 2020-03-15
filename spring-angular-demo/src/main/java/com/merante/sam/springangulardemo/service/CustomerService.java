package com.merante.sam.springangulardemo.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.merante.sam.springangulardemo.model.Customer;

@Service
public class CustomerService {
	
	public ResponseEntity<Customer>  addCustomer(Customer customer) {
		customer.setCustomerId(generateCustomerId(customer));
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		ResponseEntity<Customer> responseEntity = new ResponseEntity<Customer>(customer,headers,HttpStatus.OK);
		return responseEntity;
	}
	
	public String generateCustomerId(Customer customer) {
		String customerId = "";
		customerId = ""+Math.abs(customer.toString().hashCode());
		return customerId;
	}

}
