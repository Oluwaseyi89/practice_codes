package com.deextralucidtechworld.seyi_blog;

import javax.annotation.Resource;

import com.deextralucidtechworld.seyi_blog.Controllers.StorageService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SeyiBlogApplication implements CommandLineRunner {

	@Resource
	StorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(SeyiBlogApplication.class, args);
	}

	@Override
	public void run(String... arg) throws Exception {
		storageService.init();
	}

}
