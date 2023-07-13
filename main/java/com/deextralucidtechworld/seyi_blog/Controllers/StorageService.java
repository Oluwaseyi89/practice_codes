package com.deextralucidtechworld.seyi_blog.Controllers;

import java.nio.file.Path;
import java.util.stream.Stream;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public interface StorageService {

    public void init();

    public void save(MultipartFile file);

    public void saveVideo(MultipartFile file);

    public Resource load(String filename);

    public Stream<Path> loadAll();

    void deleteAll();
}
