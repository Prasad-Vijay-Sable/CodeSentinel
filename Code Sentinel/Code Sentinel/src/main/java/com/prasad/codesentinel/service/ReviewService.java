package com.prasad.codesentinel.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class ReviewService {

    @Value("${huggingface.api.token}")
    private String apiToken;

    private final String API_URL = "https://router.huggingface.co/v1/chat/completions";

    public String reviewCode(String code) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiToken);

        Map<String, Object> message = new HashMap<>();
        message.put("role", "user");
        message.put("content", "Review this code and point out bugs, improvements, and suggestions:\n\n" + code);

        Map<String, Object> body = new HashMap<>();
        body.put("model", "Qwen/Qwen2.5-Coder-32B-Instruct");
        body.put("messages", List.of(message));

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(API_URL, request, String.class);

            // Extract just the AI's message content
            com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
            com.fasterxml.jackson.databind.JsonNode root = mapper.readTree(response.getBody());
            String content = root.get("choices").get(0).get("message").get("content").asText();

            return content;
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}