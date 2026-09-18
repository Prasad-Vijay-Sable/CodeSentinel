package com.prasad.codesentinel.controller;

import com.prasad.codesentinel.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public String reviewCode(@RequestBody String code) {
        return reviewService.reviewCode(code);
    }
}