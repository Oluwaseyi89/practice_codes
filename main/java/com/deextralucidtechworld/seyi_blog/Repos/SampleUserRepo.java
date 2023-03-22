package com.deextralucidtechworld.seyi_blog.Repos;

import com.deextralucidtechworld.seyi_blog.Models.SampleUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface SampleUserRepo extends JpaRepository<SampleUser, Integer> {

    // SampleUser findByFirst_name(String first_name);
    SampleUser findByEmail(String email);

}
