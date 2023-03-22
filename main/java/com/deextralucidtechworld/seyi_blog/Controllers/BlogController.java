package com.deextralucidtechworld.seyi_blog.Controllers;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.deextralucidtechworld.seyi_blog.Models.SampleUser;
import com.deextralucidtechworld.seyi_blog.Repos.SampleUserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BlogController {

    @Autowired(required = true)
    private StorageService storageService;

    @Autowired(required = true)
    private SampleUserRepo sampleUserRepo;

    @GetMapping(path = "/")
    @ResponseBody
    public ModelAndView getHome() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("home");
        return mv;
    }

    @PostMapping(value = "/save_user", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    @ResponseBody
    public String saveUser(SampleUser su, @RequestParam("photo") MultipartFile photo) throws IOException {

        String res;

        SampleUser checkedUser = sampleUserRepo.findByEmail(su.getEmail());

        if (checkedUser != null) {
            res = "<h2>User Already Exists</h2>";
            System.out.println("User Already Exists!");
            return res;
        } else {

            try {
                storageService.save(photo);
            } catch (Exception e) {
                e.printStackTrace();
            }
            sampleUserRepo.save(su);
            res = "<h3>User Successfully Saved</h3>";
            System.out.println("User Successfully Saved!");
            return res;
        }

    }

    @GetMapping(value = "/uploads/{file}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void getPhoto(HttpServletResponse response, @PathVariable("file") String file) throws IOException {
        ClassPathResource photoFile = new ClassPathResource("uploads/" + file + ".jpg");
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(photoFile.getInputStream(), response.getOutputStream());
    }

}
