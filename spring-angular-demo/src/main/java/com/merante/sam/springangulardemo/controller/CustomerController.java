package com.merante.sam.springangulardemo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.merante.sam.springangulardemo.model.Customer;
import com.merante.sam.springangulardemo.service.CustomerService;

@RestController
public class CustomerController {
	@Autowired
	CustomerService customerService;
	
	@CrossOrigin
	@RequestMapping(path="/add-customer", method=RequestMethod.POST)
	public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer, HttpServletRequest request) {
		return customerService.addCustomer(customer);
	}
}
