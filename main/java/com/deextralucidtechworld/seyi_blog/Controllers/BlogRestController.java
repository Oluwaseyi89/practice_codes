package com.deextralucidtechworld.seyi_blog.Controllers;

import java.util.List;

import com.deextralucidtechworld.seyi_blog.Models.SampleUser;
import com.deextralucidtechworld.seyi_blog.Repos.SampleUserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5000")
@RequestMapping("/api")
public class BlogRestController {

    @Autowired(required = true)
    SampleUserRepo sampleUserRepo;

    @GetMapping("/all_users")
    public List<SampleUser> getAllUsers() {
        List<SampleUser> allUsers = sampleUserRepo.findAll();
        return allUsers;
    }

}
